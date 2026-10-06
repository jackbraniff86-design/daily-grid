#!/usr/bin/env python3
"""Structural check of puzzles.js. Run before pushing a new week.
Checks: 4 groups x 4 words, levels 1-4 once each, 16 distinct words per grid,
ids in order, words reused across grids, and categories repeated within 14 days."""
import json, re, sys, pathlib
src = pathlib.Path(__file__).resolve().parent.parent / "puzzles.js"
body = src.read_text()
m = re.search(r"window\.PUZZLES\s*=\s*(\[.*\]);\s*$", body, re.S)
puzzles = json.loads(m.group(1))
bad = 0
def fail(msg):
    global bad; bad += 1; print("FAIL", msg)
seen_words, seen_labels = {}, {}
for i, p in enumerate(puzzles):
    tag = f"grid #{p.get('id')}"
    if p.get("id") != i + 1: fail(f"{tag}: id out of order (expected {i+1})")
    gs = p.get("groups", [])
    if len(gs) != 4: fail(f"{tag}: {len(gs)} groups")
    if sorted(g.get("level") for g in gs) != [1, 2, 3, 4]: fail(f"{tag}: levels must be 1-4 once each")
    words = []
    for g in gs:
        if len(g.get("words", [])) != 4: fail(f"{tag}: '{g.get('label')}' has {len(g.get('words', []))} words")
        if not g.get("label", "").strip(): fail(f"{tag}: group with no label")
        for w in g["words"]:
            if w != w.strip().upper(): fail(f"{tag}: '{w}' should be upper case with no spaces around it")
            words.append(w)
        key = g["label"].strip().lower()
        if key in seen_labels and i - seen_labels[key] < 14:
            fail(f"{tag}: category '{g['label']}' repeats grid #{seen_labels[key]+1} within two weeks")
        seen_labels[key] = i
    if len(set(words)) != 16: fail(f"{tag}: {len(set(words))} distinct words, need 16")
    for w in words:
        if w in seen_words: print(f"note grid #{p['id']}: {w} also used in grid #{seen_words[w]}")
        else: seen_words[w] = p["id"]
    if not p.get("trap"): print(f"note {tag}: no 'how the trap resolves' note")
print(f"{len(puzzles)} grids checked, {bad} problem(s)")
sys.exit(1 if bad else 0)
