## TODO:

- 不要な docs を消す
- README を修正する

## 映画をレビューするサイト

- このサイトで、皆さんんは映画を検索して、レビューを読める
- レビュー内容は管理者から作成した物だ。１つの映画は複数なレビューがある（未実装）
- Guest ユーザーは内容を読むだけできる
- ログインしたユーザーは：
  - 映画をブックマークできて、その後、ブックマークした一覧を確認できる
  - レビューに対してコメントできる。その上、コメントを返事できる（未実装）
- このサイトで、Lisence を導入した場合、映画の Trailer を見える（実実装）
  - 映画を見たい場合、このサイトから、映画を見るの専用サイトに移動できる（未実装）

### 事前準備

- mysql 8.0.31 をインストールする
- DB を作る
- Ruby version: see [.ruby-version](.ruby-version)

- システムの設計：see [Design](./docs/DESIGN.md)

### バックエンド環境構築

- 環境変数を準備する

  ```
  cp .env.example .env
  cp .env.example.test .env.test
  ```

- gem インストール
  ```
  bundle install
  ```
- 初めてサーバーを起動する場合、DB をシードする。ログインする時、{ username: 'admin', password: 'admin } を利用してください

  ```
  bundle exec rails db:create
  bundle exec rails db:migrate
  bundle exec rails db:seed
  ```

- サーバを起動する
  ```
  bundle exec rails s
  ```
- テストする
  ```
  bundle exec test test/
  ```

### フロントエンド環境構築

see [client/README.md](/client/README.md)

### Docker-compose で動作確認

```
docker-composer up
docker-compose run server rails db:migrate
docker-compose run server rails db:seed
cd client/
yarn start --host ml-test-thanhbinh.lvh.me
```

### 動作確認流れ

- `http://ml-test-thanhbinh.lvh.me:4200/` にアクセスする
- 映画一覧：
  - 「映画一覧」ボタンを選択する
- ブックマークした一覧：
  - １つの映画の右上の「heart icon」をクリックする
  - 「　ブックマーク一覧」ボタンを選択する
- 映画詳細：
  - １つの映画をクリックする
- ログイン・ログアウト：
  - 画面の右上に「ログイン」・「ログアウト」ボタンをクリックする
  - ログイン画面で `{ username: 'admin', password: 'admin' } で利用する
- 検索する
  - 画面の右上にキーワードを入力した後、Enter を打つ

=================
author: Le Thanh Binh (レ　タイン　ビン)

contact: binh97.lt@gmail.com
