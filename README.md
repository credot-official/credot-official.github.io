# Credot

ブラウザで使えるドット絵作成ツール。PC でもスマホでも描けます。

- サイト: https://konosuke106-pixel.github.io/credot/
- 道具：ペン、消しゴム、塗りつぶし、スポイト、直線、四角、左右対称
- テンプレート 191 件（属性の色を 火・水・風・土・雷・光・闇 から選べるものもあります）
- 画像からドット絵に変換（画像は端末の中だけで処理します）
- 作品はブラウザの中に保存。PNG で書き出し

## ファイル
- `index.html` … 本体（claude.ai の Artifact 版もこのファイル）
- `templates.js` … テンプレートのデータ
- `build.js` … 公開用の `docs/` を作る（`node build.js`）。GitHub Pages は `docs/` を配信
