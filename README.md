# The Daily Grid

Sixteen words, four groups of four. A Connections-style daily, one grid a day, same for everyone.

- `index.html` — the whole game. No build, no backend. Scores and streaks live in the browser.
- `puzzles.js` — the puzzle bank, one entry per grid in the order they go live (grid #1 = launch day, then it cycles).
- `tools/check.py` — run before pushing new grids. Checks 4×4 structure, levels 1–4, 16 distinct words, categories not repeated within two weeks, and notes words reused across grids.

Local-only preview switches (ignored on the live site): `?day=N` plays day N without saving, `?bank` lists every grid with its solution and trap note.

Launch date is `CONFIG.launch` in `index.html`.
