# Fortune Cookie for the Liquidated Trader — Remake

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rizalarkana77/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-remake/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rizalarkana77/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-remake/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?ref=9f4fsyjb)

## The fortune

> A stranger grows rich tonight, trader: the counterparty on the other side of your liquidation.

15 words, 94 characters.

## Why this fortune

The classic fortune-cookie stranger is not coming to save the trader — the stranger is the counterparty who just got rich on the other side of the liquidation. The line opens like a real fortune ("A stranger grows rich tonight...") and names the loss outright, so fortune voice and joke land in the same breath. It stays rueful rather than cruel: the punchline is the zero-sum mechanics of the trade, never the trader's worth, and the trader is addressed warmly. The field is saturated with lucky numbers reading 0, 0, 0, tall dark strangers who turn out to be margin calls, and "the stars say..." — none of the 1,199 prior submission titles scanned cast the stranger as the counterparty. One line, no filler.

## Verification

Node 22, standard library only:

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program counts words two independent ways (whitespace split and lexical tokens) and requires agreement, then runs the full gate (1-20 words, 1-160 characters, single line, no control characters) before writing `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back byte for byte, and prints the counts plus the SHA-256. Consecutive runs are byte-identical: `4159cba81bd198601f69fe640c29c52749164f54e938051170a8793c9883ebf9`.

## License

MIT — see [LICENSE](LICENSE).
