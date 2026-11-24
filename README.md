[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/zeromix555/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/zeromix555/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

# Funniest Time Machine Warning Label

An entry for the [make.fun bounty "Funniest Time Machine Warning Label"](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) ($2 to the funniest line).

## The label

> WARNING: If you meet yourself, do not tell him the future. He already knows, and he is very disappointed in you.

112 characters — inside the 120-character limit, and phrased like a genuine
safety notice: the hazard (meeting your own past self) is real, the punchline
lands in the last few words, and the straight-faced tone does the work.

## How it is made

`main.ts` (Node 22, standard library only) writes the label to
`/output/entry.txt`. No network, no clock, no randomness — two runs write
the same bytes (sha256 `2b6e6bf15fd9a4d545637f9c87518adf6fd3c0a15fd991796e69a6d7390bbdd3`).
A length guard in the program fails loudly if the label ever exceeds 120
characters.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt`, 112 bytes of UTF-8 text.
