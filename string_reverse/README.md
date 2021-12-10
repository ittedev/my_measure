# 文字列逆順の速度比較

## 比較コード

``` js:Array.reverse()
var r = str.split('').reverse().join('')
```

``` js:Array.reduce()
var r = str.split('').reduce((r, c) => c + r)
```

``` js:Array.forEach()
var r = ''
str.split('').forEach(c => {
  r = c + r
})
```

``` js:for in
var r = ''
for (var c in str) {
  r = c + r
}
```

``` js:for loop ++
var r = ''
for (var i = 0; i < str.length; i++) {
  r = str[i] + r
}
```

``` js:for loop --
var r = ''
for (var i = str.length - 1; i >= 0; i--) {
  r += str[i]
}
```

``` js:Recursion use substring
function reverseUseSubstring(str) {
  return str === '' ? '' : reverseUseSubstring(str.substring(1)) + str[0]
}
var r = reverseUseSubstring(str)
```

``` js:Recursion use slice
function reverseUseSlice(str) {
  return str === '' ? '' : reverseUseSlice(str.slice(1)) + str[0]
}
var r = reverseUseSlice(str)
```


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
Array.reverse() x 1,143,961 ops/sec ±0.30% (64 runs sampled)
Array.reduce() x 2,304,458 ops/sec ±0.55% (65 runs sampled)
Array.forEach() x 2,259,041 ops/sec ±0.22% (65 runs sampled)
for in x 178,135 ops/sec ±0.57% (63 runs sampled)
for loop ++ x 3,373,335 ops/sec ±0.27% (65 runs sampled)
for loop -- x 3,507,901 ops/sec ±0.27% (66 runs sampled)
Recursion use substring x 1,392,431 ops/sec ±8.85% (59 runs sampled)
Recursion use slice x 1,544,291 ops/sec ±0.91% (64 runs sampled)
```

### Node.js
```
Array.reverse() x 545,957 ops/sec ±0.32% (87 runs sampled)
Array.reduce() x 935,543 ops/sec ±0.87% (87 runs sampled)
Array.forEach() x 930,806 ops/sec ±0.23% (86 runs sampled)
for in x 92,702 ops/sec ±0.50% (90 runs sampled)
for loop ++ x 1,249,802 ops/sec ±0.28% (91 runs sampled)
for loop -- x 1,123,611 ops/sec ±0.82% (90 runs sampled)
Recursion use substring x 577,168 ops/sec ±0.28% (89 runs sampled)
Recursion use slice x 579,383 ops/sec ±0.23% (91 runs sampled)
```

## 考察

最速はfor文を使った方法で、インクリメント・デクリメントに差は見られなかった。

for in文は極端に遅いため、文字列処理には向いていない。

短い記述で済むArray.reverse()を使った方法はfor文の3倍遅いため、もしワンライナーで書きたければ同じ文字数で済むArray.reduce()を使うほうが良い。
