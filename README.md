# gBlocker
Googleブロッカー完全版!!!!!

## Googleブロッカーのメリット
- ほとんどのサイトに設置してあるGoogle広告等のトラッカーから逃れられる
- YouTubeを断つことができる
- Google広告にある危険な広告に捉われる心配が無くなる

## 開発者向け
### 実態
declarativeNetRequestを使う~~Chrome~~Chromium拡張機能

### 導入方法
1. クローン
1. `bun i`

### ビルド方法
`bun build.ts`

### ファイル構成
|ファイル|名目|
|-|-|
|manifest.json|拡張機能となるmanifest.json|
|src/blocks.ts|declarativeNetRequestのルールを生成するコード|
|src/index.ts|将来background.jsになる予定|
