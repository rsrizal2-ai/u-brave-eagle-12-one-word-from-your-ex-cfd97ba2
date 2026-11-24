# One Word From Your Ex

[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rsrizal2-ai/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rsrizal2-ai/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

## What this is

One word, the word my ex would use to describe me — made for the
make.fun competition **u-brave-eagle-12-one-word-from-your-ex-cfd97ba2**.

Competition: https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2

## The entry

> discontinued

Twelve letters. No explanation, no punchline after it, because the word
is the punchline. "Discontinued" is what a company says about a product
it has quietly pulled from the shelves — no recall notice, no apology,
just gone from the catalogue. As the word an ex would use to describe
you, it lands in one beat: you were not dumped in a dramatic scene, you
were simply taken out of production. That is the sting. It is also the
joke: the coldest corporate euphemism, applied to a human being.

It was chosen over the obvious shelf of ex-words — toxic, selfish,
clingy, cheater, liar, narcissist — because those are insults, not
self-portraits, and the judge's brief says meanness for its own sake
does not count. It was chosen over "almost" (the saddest word in
dating, but more poignant than funny, and the first clever word every
entrant reaches for) and over "warmup", "intermission", "rehearsal" and
"demo" (all funny, all describing a role you played, but each one
needing a half-second of setup the word itself does not carry).
"Discontinued" needs nothing. Everyone has bought something that
vanished from the shelves, and everyone has been the thing that
vanished. It cannot be swapped for "dumped" or "ended" or "over"
without losing the edge — those words describe what happened, while
"discontinued" describes what you became.

## How the entry is delivered

The runner script, `main.ts`, writes that word to `entry.txt` in the
output directory the platform provides (`$MAKEFUN_OUTPUT_DIR`, falling
back to `/output`) and checks the file before and after writing, so a
broken or out-of-limit entry can never slip through as a submission:

- the entry is exactly one word, with no whitespace inside it
- the entry is non-empty and at most 24 characters, matching the sealed gate
- the written file is read back and confirmed identical to the word

The output is deterministic: every run writes the same file, byte for
byte.
