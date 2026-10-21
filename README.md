# 007tsx.github.io

tarapon の個人サイト。Astro で作り、GitHub Pages に置いています。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview  # ビルド結果を確認
```

## 中身の足し方

- **制作物** — `src/data/works.ts` の配列に追記
- **記録（記事）** — `src/content/notes/` に Markdown を追加。frontmatter は `title` / `date` / `summary`

## デプロイ

`main` に push すると GitHub Actions がビルドして Pages に公開します。
（リポジトリの Settings → Pages → Source が「GitHub Actions」になっている必要があります）
