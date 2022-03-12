# 概要

WordPressを用いて公開されているWebサイトのパフォーマンス向上を目的に

- AWS(Kusanagi)
- WordPress(APIサーバー(Grapql))
- Next.js(フロント部分)
- Tailwindcss(デザイン部分)

を用いて検証を行っています。
課題は山積みですが一通り構築しデプロイ・検証(パフォーマンスが上がるか・検索上位に上がるか否か)が当面のゴールです。

## 開発環境

- WSL2(Ubuntu^lts)
- Node.js(16.14.0)
- docker-compose
- [他はこちら](./Front/ssg_media/package.json)

## ToDo

- KusanagiにてWordPress構築
    - 検証用に数記事の執筆やカテゴリー設定等諸々
    - 新規ドメイン取得
    - DB管理用のphpMyAdminインストール
    - shortcoderやテーマファイルの設定の保存先特定
    - セキュリティー回りの設定
        - 不要ファイルの削除・設定
- フロント側の開発
    - 今後に向けての開発環境コンテナ化(Dockerfile, docker-compose.ymlの作成)
    - データ取得関連
        - GraphQLのクエリ作成
        - Apolloでクエリ処理
        - クエリのコンポーネント化
        - Google Analyticsの追加、イベント設定
    - データ表示関連
        - パーツ別のコンポーネント作成
        - 記事ページの作成
        - デザイン案検討
        - カテゴリページの作成
        - OGP自動生成
- バックエンド側(インフラ)の開発
    - 既存プラグインの再開発
    - CI/CDの構築