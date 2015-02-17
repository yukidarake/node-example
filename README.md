# node-example
Node.jsの基礎の基礎

# Node.jsとは？
https://www.google.co.jp/#q=node.js%e3%81%a8%e3%81%af&qscrl=1

# インストール方法
http://nodejs.jp/nodejs.org_ja/docs/v0.10/download/  
からインストーラ落とすのが速いかも。

# サンプルプロジェクトを落としてみよう
```
git clone https://github.com/yukidarake/node-example.git
```

# 1. Hello World

main.js作成

```javascript
// main.js
console.log('Hello World!');

実行
```
cd 1-1
node main.js
```

# 2. モジュール
## パターン1

```javascript
// main.js
var sum = require('./sum');
console.log(sum(1, 2));
```

```javascript
// sum.js
module.exports = function(a, b) {
  return a + b;
};
```

```
# 実行
cd 2-1
node main.js
```

## パターン2
```javascript
// main.js
var sum = require('./calc').sum;
console.log(sum(1, 2));
```

```javascript
// calc.js
exports.sum = function(a, b) {
  return a + b;
};
```

```
// 実行
cd 2-2
node main.js
```
# 3. ユニットテスト
mocha + power-assertを使います。

このページが参考になります。
http://efcl.info/2014/0406/res3809/

## 関連ライブラリのインストール
```
npm install -g mocha # グローバルでコマンドを使える用に
npm install --save-dev power-assert intelli-espower-loader
```

実行
```
mocha --require intelli-espower-loader
```



