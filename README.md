## 概要

このアプリケーションは、RESASAPI を用いて、都道府県別に年ごとの人口推移を見ることができるものです。

## 使い方

1. クローンと npm install

2. .env.local ファイルを作成し、その中で NEXT_PUBLIC_RESAS_API_URI と NEXT_PUBLIC_RESAS_API_KEY を設定

```bash
# .env.local
NEXT_PUBLIC_RESAS_API_URI=https://opendata.resas-portal.go.jp
NEXT_PUBLIC_RESAS_API_KEY=自分で取得したRESASAPIのapikey

```

3. ローカルで起動・テスト

```bash
npm run dev
npm test
```
