/**
 * OneSig Atlas — /access/ lead capture -> Google Sheets
 *
 * Setup
 *  1. Open the Google Sheet that should hold the leads.
 *  2. Extensions > Apps Script, delete the placeholder code, paste this file, save.
 *  3. Deploy > New deployment > type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *  4. Authorize when prompted, then copy the deployment's /exec URL.
 *  5. Paste that URL into SHEETS_ENDPOINT in access/index.html.
 *
 * Sheet columns: S.No | Date | Time | Work Email | Name | Practice Area
 * Date and Time are stamped server-side in the spreadsheet's timezone, so they
 * cannot be spoofed or skewed by the visitor's clock.
 */

var SHEET_NAME = 'Leads';
var HEADERS = ['S.No', 'Date', 'Time', 'Work Email', 'Name', 'Practice Area'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Serialises concurrent submissions so the S.No sequence never repeats.
    lock.waitLock(30000);

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = getSheet_();
    var now = new Date();
    var tz = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();

    sheet.appendRow([
      sheet.getLastRow(), // header occupies row 1, so last row count == next S.No
      Utilities.formatDate(now, tz, 'yyyy-MM-dd'),
      Utilities.formatDate(now, tz, 'HH:mm:ss'),
      String(data.workEmail || '').trim(),
      String(data.name || data.firmName || '').trim(),
      String(data.practiceArea || '').trim()
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: 'onesig-access-leads' });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
