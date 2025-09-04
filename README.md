プロジェクト概要
このプロジェクトは、フロントエンドにReact、バックエンドにNode.js、データベースにAWS RDS (MySQL) を使用して構築された、シンプルなショッピングサイトです。

このアプリケーションは、商品の表示と追加ができるCRUD（Create, Read, Update, Delete）機能の基本を実装しています。

技術スタック
フロントエンド: React

バックエンド: Node.js, Express.js

データベース: AWS RDS (MySQL)

その他: CORS, dotenv

プロジェクトの機能
商品データの表示: データベースに保存された商品リストを、API経由で取得し表示します。

新しい商品の追加: フォームを通じて新しい商品名と価格を入力し、データベースに保存します。

技術選定の理由
AWS RDS: データベースの運用・管理をAWSに任せ、アプリケーション開発に集中するため、マネージドサービスであるRDSを選定しました。

React & Node.js: フロントエンドとバックエンドをそれぞれ異なる技術で構築することで、フルスタック開発の全体像を理解し、データ連携の仕組みを学ぶことを目的としました。

開発中に学んだこと
フルスタックのデータフロー:

React (フロントエンド)

Node.js API (バックエンド)

AWS RDS (データベース)
この3つの層がどのように連携して動作するかを実践的に学びました。

CORSの設定:

フロントエンドとバックエンドのポートが異なることによるCORSエラーに直面し、corsライブラリを使って問題を解決しました。

環境変数の管理:

データベースの認証情報をコードに直接記述するリスクを理解し、dotenvライブラリを使って安全に管理する方法を学びました。

動作方法
依存関係のインストール:

my-shopping-siteフォルダで: npm install

my-shopping-site-apiフォルダで: npm install

環境変数の設定:

my-shopping-site-apiフォルダに.envファイルを作成し、以下の内容を記述します。

DB_HOST=...
DB_USER=...
DB_PASSWORD=...
DB_DATABASE=...
サーバーの起動:

my-shopping-site-apiフォルダで: node server.js

my-shopping-siteフォルダで: npm start

データベースの設定:

db/schema.sqlとdb/initial_data.sqlのスクリプトを、DBeaverなどのツールを使ってAWS RDSで実行します。