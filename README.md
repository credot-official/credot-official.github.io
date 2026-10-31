# Credot

ブラウザで使えるドット絵作成ツール。PC でもスマホでも描けます。

- サイト: https://credot-official.github.io/
- 道具：ペン、消しゴム、塗りつぶし、スポイト、直線、四角、左右対称
- テンプレート 191 件（属性の色を 火・水・風・土・雷・光・闇 から選べるものもあります）
- 画像からドット絵に変換（画像は端末の中だけで処理します）
- 作品はブラウザの中に保存。PNG で書き出し

## ファイル
- `index.html` … 本体（claude.ai の Artifact 版もこのファイル）
- `templates.js` … テンプレートのデータ
- `TERMS.md` … テンプレートの利用規約（サイトの「その他」→「テンプレートの利用規約」でも読めます）
- `templates.html` … テンプレート一覧ページ（PNG ダウンロード、そのまま描き始める）。サイト専用
- `export-templates.js` … テンプレートをまとめて PNG に書き出す（`node export-templates.js [出力先]`）
- `build.js` … 公開用の `docs/` を作る（`node build.js`）。GitHub Pages は `docs/` を配信
