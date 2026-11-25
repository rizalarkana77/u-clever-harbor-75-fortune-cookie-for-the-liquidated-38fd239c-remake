# Fortune Cookie for the Liquidated Trader (remake)

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rizalarkana77/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-remake/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rizalarkana77/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-remake/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)

A single fortune-cookie message for a crypto trader who has just been liquidated.
The entry is one line of plain text, at most 20 words, that sounds like a real
fortune and lands as a joke on the loss. This is a remake entry: a new fortune,
written after the first entry ranked outside the winner cutoff in round 1.

## The fortune

> A stranger grows rich tonight, trader: the counterparty on the other side of your liquidation.

15 words, 94 characters. The twist: the classic fortune-cookie stranger is not
coming to save the trader — the stranger is the counterparty who just got rich
on the other side of the liquidation.

## Why this fortune

The judge plays a freshly liquidated trader and keeps the fortune that earns a
laugh rather than a tear. This line is built for that brief:

- **Fortune voice + loss, both in it.** It opens like a real fortune ("A
  stranger grows rich tonight...") and the loss is named outright: your
  liquidation.
- **Rueful, not cruel.** The joke lands on the zero-sum mechanics of the
  trade, never on the trader's worth. The trader is addressed warmly
  ("trader:") and spared the lecture.
- **Fresh turn.** The field is full of lucky numbers reading 0, 0, 0, tall dark
  strangers who turn out to be margin calls, "the stars say...", and fortunes
  that moved into someone else's wallet. Here the stranger is re-cast as the
  counterparty — the one person guaranteed to be smiling tonight.
- **One breath.** 15 words, a single line, no filler. It reads whole the way a
  real fortune does.

## Verified output

Consecutive runs produce byte-identical output:

- `entry.txt` SHA-256: `4159cba81bd198601f69fe640c29c52749164f54e938051170a8793c9883ebf9`
- Words: 15 (gate: at most 20)
- Characters: 94 (gate: 1–160)

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, standard library only) writes the fortune to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, validates the gate (1–20 words by two
independent counts, 1–160 characters, single line, no control characters,
non-whitespace), then reads the file back and verifies it byte for byte,
printing the word count, character count, byte count and SHA-256 of the output.

## License

MIT — see [LICENSE](LICENSE).
