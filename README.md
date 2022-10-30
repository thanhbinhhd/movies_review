## 映画をレビューするサイト

バックエンドをテストするのためのプロジェクトです

- Ruby version: see [.ruby-version](.ruby-version)

- システムの設計：see [Design](./docs/DESIGN.md)

### 事前準備

- mysql 8.0.31 をインストールする
- DB を作る

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

=================
author: Le Thanh Binh (レ　タイン　ビン)

contact: binh97.lt@gmail.com
