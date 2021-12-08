# 関数生成の速度比較

## 実行環境

|||
| - | - |
| PC | Surface Pro X |
| CPU | Microsoft SQ2 @ 3.15 GHz |
| Type | ARM64 processor |
| Memory | 16.0 GB |
| OS | Windows 10 Pro 21H2 |
| Browser | Microsoft Edge v96.0.1054.43 |
| Node.js | v17.1.0 |
|||

## 結果

### ブラウザ
```
Function declaration x 1,527,664,811 ops/sec ±0.32% (66 runs sampled)
Function expression x 1,523,933,748 ops/sec ±0.52% (66 runs sampled)
Function constructor x 21,402 ops/sec ±1.89% (60 runs sampled)
Arrow function expression x 1,464,235,156 ops/sec ±3.93% (62 runs sampled)
```

### Node.js
```
Function declaration x 527,519,527 ops/sec ±0.66% (82 runs sampled)
Function expression x 529,761,399 ops/sec ±0.63% (84 runs sampled)
Function constructor x 474,862 ops/sec ±0.61% (84 runs sampled)
Arrow function expression x 525,884,661 ops/sec ±0.43% (84 runs sampled)
```

## 考察

関数宣言と関数式に差は見られなかった。
アロー関数はそれらに比べるとわずかに遅いが無視できる程度。
Functionコンストラクタは圧倒的に遅い。
