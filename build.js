// Builds the public website into docs/ (GitHub Pages serves that folder).
// index.html stays the claude.ai Artifact source; the site version only gets a full document head.
// templates.html (template list with PNG downloads) is site-only and copied as is.
// Run: node build.js
const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'docs');
const page = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  .replace('<title>Credot</title>\n', '')
  .replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '');

const desc = 'ブラウザで使える無料のドット絵作成ツール。PC でもスマホでも描けて、テンプレートや画像からの変換、PNG 書き出しができます。';
const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="crispEdges">'
  + '<path fill="#ff004d" d="M1 1h2v1h1V1h0h0V1h2v1h1v2H6v1H5v1H4v1H3V6H2V5H1V4H0V2h1z"/></svg>';

const head = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Credot - ドット絵作成ツール</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="Credot - ドット絵作成ツール">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#e8ebf1">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(icon)}">
`;

fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), head + page.replace('</style>\n', '</style>\n</head>\n<body>\n') + '</body>\n</html>\n');
fs.copyFileSync(path.join(root, 'templates.js'), path.join(out, 'templates.js'));
fs.copyFileSync(path.join(root, 'templates.html'), path.join(out, 'templates.html'));
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log('built docs/');
