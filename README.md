# ゆめみフロントエンドコーディングテスト

## 実行方法

### 環境変数を設定

```bash
cp .env.example .env
```

`NEXT_PUBLIC_RESAS_API_URL`と`NEXT_PUBLIC_RESAS_API_URL`は[RESAS API](https://opendata.resas-portal.go.jp/)から取得したキーをコピペしてください

### サーバーを起動

```bash
# モジュールのインストール
npm install

# 開発者サーバーの起動
npm run dev
```

http://localhost:3000/ にアクセスする

## テストの実行方法

今回はJestとPlaywrightを使用してテストを実行しています

```bash
# テストの実行
npm run test
```

## Storybookサーバーの起動方法

```bash
# Storybookサーバーの起動
npm run storybook
```

http://localhost:6006/ にアクセスする

## フォーマッターの実行方法

`prettier --write src && eslint --fix src`を実行します

```bash
# フォーマッターの実行
npm run format
```

## 開発の際の注意点

コミット時、ハスキーによってフォーマッターが実行されます
以下のパスを通すようにしてください

```bash
# パスを通す
export PATH=$PATH:./node_modules/.bin
```
