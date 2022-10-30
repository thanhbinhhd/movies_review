# MovieReviews

フロントエンドのリソースを管理する

- node Js version: see [.node-version](.node-version)

### 事前準備

- yarn インストール
- nodejs インストール
- apiUrl 確認：[このファイル](./src/environments/environment.ts) の `apiUrl` 値はバックエンドの `DEV_SERVER_HOST` 値を同じことを確認

### Packages インストール

```
yarn
```

### App を起動する

```
yarn start
```

ファイルを変更する時、アップが自動でリーロードする

### バックエンドを繋がって動作確認場合

```
yarn start --host ml-test-thanhbinh.lvh.me
```

上の host はバックエンドの `ALLOW_CORS_HOST` と同じです

### App をビルドする

```
yarn build
```

ビルドした物は `/dist` で保存されます

### テストする

```
yarn test
```

詳しいなら[Karma](https://karma-runner.github.io)を見てください

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
