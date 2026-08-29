# 2 · Product and Platform — What Abhi Said

## Rule packs and the canonical model
- "Help me to think through the rule pack… There are rule packs around data. The qualitative part remains the same in terms of the quantitative data and the data models."
- He asked to understand the difference between **e-invoicing, DAC7, SAF-T, Pillar Two, and tax engine** rule packs, and "how one canonical model could be an edge for us… so that it can be moved in and out." Requested a worked example, delivered as a PowerPoint deck showing how pack in/out works on the platform.
- Separately: "Build a canonical model for invoicing, considering **UAE, Germany, and France**. Put it in an Excel so we can understand each of the rules."

## The five-gate / 8-hour delivery idea (adopted from a LinkedIn post)
He shared the "ERP implementations average 12–18 months. I'm building for 8 hours" post and said: "See this: how product features can be built for the sale… Include this in our build out over the next two years." The five gates he adopted: Discovery (25 questions answered by the client), Auto-configuration, Review/promote (nothing applies without sign-off), Validated data import (bad master data never enters), Go-live in maximum-caution mode (autonomy earned).

## The Lab0 integration
He worked through an **Answer Lifecycle & Rerun Spec** ("Lab0 proposes; Atlas promotes") — Lab0 owns extraction, Atlas owns the record; no machine state may read as final; every promotion stamped with a named human and rationale. His five objections to the current Beacon output: machine-granted "Answered" at low confidence, conflicts resolved inside Lab0, no human-approval field, one answer per question (no top-k candidates), global-only reruns.

Then he pulled back: "We are just getting started — so I don't want to over course correct / put too much work with Lab0… but we can test it for **6 months** and see how we win customers and delight them. Help me frame the call with Lab0."

## Delivery mechanics he asked to design
- "For these two outputs, can you help me create how we will get the data from them?" — the intake flow (where clients drop data, how reports come back), what the deliverable looks like with sample data, and what tooling runs on our end. He noted "one hour with whoever runs the billing is sometimes not possible — we can ask them to upload any of the emails or talks… and we will fill out the relevant parts. We can give you where the breakage is going to happen."
- "So snap should be created similarly to the attached image" (deliverable styling).
- "How is this output linked to the demo site we have built out?… once they come into our demo site, they should be able to relate to what they are seeing in this PDF."
- "Write a requirement that I can take to the demo site to completely rebuild all the sections with the data which connects all the tabs with similar things."

## UX
- "Create an MD file which I can give to my agent to think about the UX."

## Agent skill for outreach
- "From the ICP angles and discovery, create a skill that I can give to my agent where I just put the LinkedIn profile name… it should tell me what I should send and what I should do as my first touch point and second and third touch points."

## Vocabulary and machinery (established across the session)
- Severity: **Blocker / High / Flag**. Confidence: **CONFIRMED / REPORTED / GAP**. Rule IDs, run IDs, re-runs, named owners on every finding.
- Partners see outputs and workflow — never the rule content, question bank, or pack internals.
