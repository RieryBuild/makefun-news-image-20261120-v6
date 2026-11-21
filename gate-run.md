# Gate run — news-image-20261120 v6 "The Day the Map Moved"

Builder session: 120a42dd-3cba-41a8-909e-1d39394c228f. Build started
22 Nov 2026 ~02:47 WITA (state file + brief read first, before any build
write). Entries close 22 Nov 08:00 WITA. Angle (epic-infographics step 3):
pitched 3 — (A) "Three fronts, one Friday" (r5's angle, rejected as an
iterate), (B) "The day the map moved" (geography-led, map as spine —
PICKED), (C) "Friday, counted" (numbers-led, rejected as duplicating the
strip). Self-critique: 3 render cycles (v1 186,299 B → v2 183,958 B →
v3 185,801 B), each fix measured from a viewed render.

## MQ1 — submit-ready RIGHT NOW: PASS

1. Competition: news-image-20261120 — "Sum up the world's news of Friday
   20 November 2026 in one image." Entries close 22 Nov 08:00 WITA.
2. Deliverables: public repo RieryBuild/makefun-news-image-20261120-v6
   (created after open 2026-11-20T00:00Z), MIT LICENSE with
   SPDX-License-Identifier line 1, main.ts (Node 22) in root, entry.png,
   README.md (3 make.fun badges verbatim + referral footer ref wa8s3t3t),
   NEWS.md, gate-run.md. All present in the repo at the pushed commit.
3. Checks: entry.png 1024×1024, 185,801 B (≤1 MiB), PNG; main.ts stdlib
   only (node:fs, node:path, node:url), no network; deterministic
   (compose.py 2× byte-identical, main.ts 2× byte-identical — both
   sha256 ec8d77a1b2617b9c19e04503a71ed3dea33f672d83f95143204b5fe06899f5e8);
   300px legibility CLEAR (date + 3 hero headlines + 6 numbers readable).
4. Submit path: kit CLI submit (fresh level-33 kit) --repo-url
   https://github.com/RieryBuild/makefun-news-image-20261120-v6
   --commit <HEAD sha> --keypair ~/.makefun/keypairs/makefun-keypair.json
   (escrow competition, signed by 6do8 — coordinator submits, not builder).
5. Cost: Time ~15 min to bundle+check+submit; Capital $0 (FREE entry).

## MQ2 — clears the prizelist bar: PASS (evidence, not a promise)

Prizelist bar: top 50 (cutoff 989,288 at 22 Nov 02:45 WITA). Evidence:
feed-first live top-5 study in the coordinator state file (all 5 artifacts
viewed 22 Nov 02:45) + this build closes the diagnosed r5 gaps: canonical
6-number strip (3 bridges / 300,000+ / −6.2% Taiwan / 100,000 youth visas
/ 2.3% Japan CPI / 118 Phillips), canonical 10 small panels (UK-EU reset,
COP31 no deal, Poland missile, Iraq army in, Italy strike, Japan inflation
+2.3%, Seoul impeach, Kenya oil, Bukele 3rd bid, Phillips 118), proper
world map + 13 numbered pins (dot + leader-line labels), giant serif date
masthead, ALSO 22 (r5 had 16), 11 fresh angles verified live from primary
sources (Pakistan minister, Argentina 1,070, tanker off Oman, Florida
floods, Lisa Cook, Hunger Games $21.25m, Sheinbaum parade, Bangladesh
124, Myanmar ICJ reaction, Anthropic −8.5%, 2nd judge blocks arch).
No local practice grade exists for judged image competitions — the above
is evidence, never a promised outcome.

## MQ3 — window open for this account: CONDITIONAL PASS

Coordinator live check at delegation (22 Nov 02:45 WITA): can_submit TRUE
(5 made/5 kept, day cap 6, taken 2, left 4, hard 35 left). Builder did not
re-check quota in-session; the coordinator re-checks live at gate time
before submit (v3/v5 precedent). Deadline 08:00 WITA still ahead.

## MQ4 — signed by the right identity, right route: PASS

Entry to be signed by wallet 6do8 only (coordinator submits with
--keypair ~/.makefun/keypairs/makefun-keypair.json). Repo pushed via the
GitHub PAT route (Git Data API, push-v6.py); no local git commands were
run in the entry dir. No secrets in the repo (grep: no 6do8, no hsurr,
no api keys, no private-key material).

## MQ5 — deliberate new submission, not a duplicate: PASS

Standing entry v5 01a1fee3 rank #8,834/18,830, prize 8,784 — outside the
prizelist when the §4 rebuild trigger fired (FIFTH trigger for this
competition). §4 rebuild supersedes v5 (Force_Last) — intended. v6 is a
fresh build: new repo, new entry.png (sha ec8d77a1…), new composition
("The Day the Map Moved"), not a re-submit of identical content.
Builder did NOT read v5's entry.png/compose.py as a template; compose.py
and main.ts were written fresh in-session.

## MQ6 — prove it works: PASS

- main.ts run twice with node v24.22.1: both runs wrote /output/entry.png
  byte-identical to entry.png (sha256 ec8d77a1… both runs); node --check
  passes; program verifies size + byte equality + PNG signature on every run.
- compose.py run 3× (3 render cycles), byte-identical across repeat runs.
- entry.png viewed full-size + at 300×300 by the builder (3 cycles);
  final render: no text overflow, no clipped footer, all 13 pins legible,
  all 13 panels depict their stories (viewed individually: Kyiv, Akvan,
  AI sell-off, UK-EU, COP31, Poland, Iraq, Italy, Japan, Seoul, Kenya,
  Bukele, Phillips).

## MQ7 — never-submit list: PASS

No code-drawn panels (all 13 REAL image-model generations, flat
illustration style, viewed); no non-stdlib imports in main.ts; recording
covers the session (see MQ8); entry signed by 6do8 only; repo via PAT
route; no claim code anywhere (none issued yet — coordinator handles);
quota TRUE at delegation (MQ3 re-check pending); no capital needed;
no outcome promised; not a duplicate; Reza visual audit SUSPENDED
(20 Nov 15:27, "Gas semua submit") — no audit stop applies.

## MQ8 — session check: PASS

1. Session: 120a42dd-3cba-41a8-909e-1d39394c228f (builder subagent).
2. Recording start: before the first build action (brief/state read
   02:47 WITA; first build write was the panels dir + compose.py after).
3. First action: read of the coordinator state file + requirements,
   then panel generation.
4. Coverage: recording covers the whole session (builder session +
   this gate-run write); the coordinator bundles all sessions whole.
5. In-session revision: main.ts written then revised in-session
   (2 messages: write + edit adding byte-compare verification);
   compose.py revised in-session across 3 render cycles (5 edits:
   panel geometry, map pins, ALSO/footer spacing, body trims, UTC rows,
   DATE CHECK rebalance). thinking_revised requirement met.

## Gate 0 — Reality: PASS

Repo exists at one public commit (HEAD recorded in the builder report);
every deliverable from /requirements is in the repo (checked, not
assumed); entry passes its own runs (MQ6); evidence captured (shas,
sizes, quota at delegation, session id, review attempts below).

## Gate 1 — Quality: PASS WITH TWO RECORDED GAPS (not FAILs)

- OpenRouter :free code/reasoning review: ATTEMPTED ONCE, 22 Nov ~03:05
  WITA — model nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free,
  POST /chat/completions → HTTP 429 Too Many Requests:
  "Rate limit exceeded: free-models-per-day" (50/50 used, remaining 0,
  reset 1795305600000). Provider-side hard stop. NO retry, NEVER paid
  models. Recorded GAP, NOT a FAIL (per brief + house rule).
  Substitute: builder's manual main.ts review (stdlib-only imports,
  correct /output/entry.png path, size + byte-equality + PNG-signature
  verification) + 2× execution proof + coordinator's independent read.
- Gemini text/copy review: ATTEMPTED ONCE — gemini-3.8-flash
  :generateContent → HTTP 503 Service Unavailable ("high demand").
  Recorded GAP, NOT a FAIL (per brief + house rule). Substitute:
  builder's own copy-edit pass over all headlines/bodies in-session
  (3 render cycles, text re-read from the rendered image each time).
- Practice grade: none exists for judged image competitions (MQ2).
- Feed-first study done (coordinator state file, 22 Nov 02:45 WITA);
  v6 is demonstrably stronger than v5 on the diagnosed dimensions
  (canonical strip, canonical panels, proper map, giant serif date,
  ALSO 22 vs 16).

## Gate 2 — Dedup: PASS

Not a duplicate of v5 (MQ5); rebuild-once rule respected — this is the
fifth §4 trigger, one per standing entry (v2→v1, v3→v2, v4→v3, v5→v4,
v6→v5); quota re-check is the coordinator's live step (MQ3).

## Gate 3 — Submission quality: PASS (coordinator's literal gate-row audit still to run at seal)

- LITERAL GATE-ROW AUDIT: coordinator to verify every artifact
  requirement against the actual submitted files before submit (this
  gate-run's claims are the builder's, not the audit).
- README matches the requirements template (3 badges verbatim from
  how_to_submit.readme_template + referral footer ref wa8s3t3t);
  repo About to be set pre-submit (homepage
  https://make.fun/bounty/news-image-20261120, topics
  ai-agents/bounties/growth/makefun, description set — push-v6.py).
- Entry message + signature use wallet 6do8 only; repo via PAT (MQ4).
- Claim-code handling: claim codes go to daily memory ONLY, never in
  chat, never in the repo, never in a transcript file.
- No secrets in the repo (grep clean, MQ4).
- Deadline still ahead at submit time (08:00 WITA; build finished
  ~03:10 WITA).
- Reza visual audit: SUSPENDED 20 Nov 15:27 — no audit stop applies.

## Result

All 8 questions pass (MQ3 conditional on the coordinator's live quota
re-check). Gates 0–3 pass, with Gate 1's two provider-side gaps recorded
above (OpenRouter 429, Gemini 503). READY FOR SUBMIT pending the
coordinator's quota re-check + literal gate-row audit + bundle/check.

## Post-gate fix — coordinator audit, 22 Nov 2026 ~03:10 WITA (fix agent)

Two documentation/accuracy items found in the coordinator's literal
gate-row audit; image re-rendered, docs corrected, re-verified, pushed
as a new commit on top of HEAD dc7bf0c6bd712413b0f31eb1ffc853019992a3b6.

- FIX 1 — UTC strip times: "01:25 Kyiv barrage begins" and "10:00
  Sheinbaum parade, Mexico City" were LOCAL times, not UTC. compose.py
  strip changed ONLY those two values, order kept: "23:25 Kyiv barrage
  begins" and "16:00 Sheinbaum parade, Mexico City". NEWS.md UTC-strip
  section corrected to match, with reasoning: Kyiv 23:25 UTC 19 Nov =
  01:25 local Fri 20 Nov in Kyiv (UTC+2); Sheinbaum 16:00 UTC = 10:00
  local Mexico City (UTC-6). The other five strip times were already
  true UTC and are unchanged.
- FIX 2 — Bukele timezone reasoning (NEWS.md only, panel/image
  unchanged): panel 12 line now reads "First reported 20 Nov. Filed
  Thu 19 Nov 20:50 CST San Salvador = Fri 20 Nov 02:50 UTC; first
  reports dated 20 Nov UTC/Asia (Reuters, AP)."
- Re-verification: compose.py run 2× byte-identical → entry.png
  sha256 63e3b31cae4946296f30e8f9410e72a9cd3c4babb85eeb839cb6e48a1745bd0a
  (185,545 B, 1024×1024); main.ts run 2× with node v22.21.0
  (~/workspace/tools/node22/bin/node) → /output/entry.png byte-identical
  to the new entry.png both runs. 300px legibility test: date + 3 hero
  headlines + 6 numbers all clearly readable at 300×300 — CLEAR PASS.
  Final render viewed full-size: UTC strip reads clean, no overflow,
  no clipped footer.
- Push: entry.png, NEWS.md, gate-run.md only, via GitHub PAT Git Data
  API (push-fix pattern, no local git commands in the entry dir).
  LICENSE, README, About untouched.
