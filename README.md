# WTC Qualifying Scenarios

A predictor for the World Test Championship: score the Tests still to be played
and the points table redraws the qualification cut live.

**Live page:** https://amit050689.github.io/wtc-qualifying-scenarios/

## How it works

- A win is 12 points, a draw 4, a defeat none. Penalties are subtracted.
- Teams are scheduled between 12 and 22 Tests, so the table ranks on **PCT** —
  the percentage of available points a side has actually won, as the ICC does it.
- Only Tests with a result, played or predicted, count toward a team's available
  points, so the table always reads like a live standings sheet.
- Ties break on raw points, then wins.

Click each square in *Still to be scored* to cycle home win → draw → away win.
Squares with a ring have been played and cannot be changed. *Copy scenario*
puts the whole prediction on the clipboard as a link or short code; *Load
scenario* takes either one back.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole page — no build step, no dependencies |
| `artifact.html` | Generated copy without the document skeleton, for Claude Artifacts |
| `build-artifact.js` | `node build-artifact.js` regenerates `artifact.html` from `index.html` |

`index.html` is the single source of truth. Edit it, then run the build if the
artifact copy is needed.

## Updating results

Results live in the `RAW` table near the top of the script. Each row is
`[home, away, tests, played]`, where `played` is one character per Test —
`h` home win, `a` away win, `d` draw. A string shorter than the number of Tests
means the rest of the series is still to be played. Deductions already handed
down go in `BASE_PEN`.
