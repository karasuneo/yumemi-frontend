# `src`

`src` 配下は次のような構成になっています。

```
.
├── __test__
│   ├── api
│   ├── const
│   └── e2e
├── app
│   ├── api
│   │   ├── fetcher
│   │   ├── population
│   │   ├── prefectures
│   │   └── utils
│   ├── hooks
│   ├── styles
│   ├── ui-domain
│   │   ├── ArrowButton
│   │   ├── Chart
│   │   ├── CheckBox
│   │   ├── Header
│   │   ├── PopulationCards
│   │   │   └── Card
│   │   └── Spinner
│   └── ux-domain
│       └── SelectPopulationChart
│           └── logic-ui
│               ├── PopulationChart
│               └── SelectPrefecture
├── const
├── fetcher
├── types
└── utils
```

### `__test__`

- フロントエンドのテストコードが入るディレクトリ

- `api`

  - API Route のテストコードが入るディレクトリ

- `const`

  - テストコードで扱う定数が入るディレクトリ

- `e2e`

  - E2E テストコードが入るディレクトリ

### `app`

- コンポーネント、フック、スタイルなど、フロントエンドに関する処理が入るディレクトリ

- `api`

  - API routes に関する処理が入るディレクトリ
  - 今回は RESAS API との通信に関する処理が入り、複数回叩くなどの処理がある

  - `fetcher`

    - RESAS API を叩く際に使うfetcherを定義するディレクトリ

  - `population`

    - `api/population`のエンドポイントに関する処理が入るディレクトリ

  - `prefectures`

    - `api/prefectures`のエンドポイントに関する処理が入るディレクトリ

  - `utils`

    - 型確認と型作成に関する処理が入るディレクトリ

- `hooks`

  - フックスを定義するディレクトリ
  - エンドポイントに関するフックスが入っている

- `styles`

  - グローバルに扱うスタイルが入るディレクトリ

- `ui-domain`

  - アプリケーションで扱うUIコンポーネントが入るディレクトリ

- `ux-domain`

  - アプリケーションで発生するユーザーの操作に関する処理が入るディレクトリ

### `const`

- アプリケーションで扱う定数が入るディレクトリ

### `fetcher`

- API Routes を叩く際に使う fetcher を定義するディレクトリ

### `types`

- アプリケーションで扱う型が入るディレクトリ

### `utils`

- アプリケーションで扱うユーティリティ関数が入るディレクトリ
