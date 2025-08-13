# gBlocker
Googleブロッカー完全版!!!!!

## Googleブロッカーのメリット
- ほとんどのサイトに設置してある~~Google広告~~**スパイウェア**による監視・広告の最適化から逃れられる
- YouTubeを断つことができる
- Googleがばら撒く詐欺広告に捉われる心配が無くなる

## 「スパイウェア」という呼び方は良くないのでは？

https://www.soumu.go.jp/main_sosiki/joho_tsusin/policyreports/chousa/y-net_seido/pdf/060221_1_1-8-1.pdf

トレンドマイクロ社による定義を見てみましょう
> 知らないうちにコンピュータに侵入し、コンピュータの情報や個人データを無断で盗み出したり、盗み出した情報を元に広告をポップアップするプログラムを総称して「スパイウェア」と呼びます。

該当してますよね？
|定義|該当|
|-|-|
|知らないうちにコンピューターに侵入|ほとんどのサイトでは知らないうちにGoogleのスクリプトが実行されます|
|コンピュータの情報や個人データを無断で盗み出したり|ほとんどのサイトでは許可なくGoogleのスクリプト実行され、コンピューターの情報を盗み出します|
|盗み出した情報を元に広告をポップアップするプログラム|盗まれた情報はアドネットワークを介して、それを元に広告が表示されます|

いやいやそんなこと思ってるのお前だけやろ！と思ったかもしれません。  
違います。"気付いた"人は他にもいます。

https://github.com/balena-io/etcher/issues/2902

これにより、Google Analytics等はスパイウェア、とも言えるでしょう。

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
