// Credot templates. One character per pixel; '.' is transparent and letters map to LEGEND in index.html.
// `m`: left half only (8 columns), mirrored to make the right half. `rows`: full 16-column rows.
window.CREDOT_TEMPLATES = [
  /* ---------- キャラ ---------- */
  { name: 'キャラの素体', cat: 'キャラ', rows: [
    '................', '.....kkkkkk.....', '....kbbbbbbk....', '....kbbbbbbk....',
    '....kssssssk....', '....kskssksk....', '....kssssssk....', '.....kkkkkk.....',
    '....kBBBBBBk....', '...kBkBBBBkBk...', '...kskBBBBksk...', '....kkBBBBkk....',
    '....knnnnnnk....', '....knnkknnk....', '....knnkknnk....', '...kddk..kddk...',
  ] },
  { name: '騎士', cat: 'キャラ', m: [
    '........', '.....kkk', '....kwll', '...kwlll', '...klkkk', '...kllll', '....klll', '.....kkk',
    '..kkllll', '.kllklll', '.kllklBB', '.kskklll', '..kkdddd', '...kllkk', '...kllk.', '..kddk..',
  ] },
  { name: '魔法使い', cat: 'キャラ', m: [
    '........', '.......k', '......kp', '......kp', '.....kpp', '.....kpy', '....kppp', '..kkkkkk',
    '....ksss', '....ksks', '....kwww', '...kpkww', '..kppkkw', '..kppppp', '..kppppp', '..kkkkkk',
  ] },
  { name: '忍者', cat: 'キャラ', m: [
    '........', '........', '.....kkk', '....knnn', '...knnnn', '...kssss', '...kskss', '...knnnn',
    '....knnn', '...kknnn', '..knnknn', '..kskrrr', '...knnnn', '...knnkk', '...knnk.', '..kkkk..',
  ] },
  { name: '王様', cat: 'キャラ', m: [
    '........', '...k..k.', '...kykyk', '...kyyyy', '...kyryy', '...kssss', '...kskss', '...kwsss',
    '...kwwww', '..krkwww', '.krrrkww', '.krrrrkk', '.kwrrrry', '.kwrrrrr', '.kwrrrrr', '.kkkkkkk',
  ] },
  { name: 'お姫さま', cat: 'キャラ', m: [
    '........', '......k.', '.....kyk', '....kooo', '...koooo', '...kosss', '...kosks', '...kosss',
    '..koookk', '..kokPPP', '..kokPwP', '...kkPPP', '...kPPPP', '..kPPPPP', '.kPPPPPP', '.kkkkkkk',
  ] },
  { name: '女の子', cat: 'キャラ', m: [
    '........', '.....kkk', '...kkbbb', '..kbkbbb', '.kbbkbbb', '.kbbksss', '.kbbksks', '..kkksss',
    '....kssr', '.....kkk', '....kPPP', '...ksPPP', '...kkPPP', '...kPPPP', '....kskk', '....kkk.',
  ] },
  { name: 'ロボット', cat: 'キャラ', m: [
    '.......r', '.......k', '...kkkkk', '...kllll', '...klBBl', '...klBBl', '...kllll', '...kldld',
    '...kkkkk', '..kkllll', '.kdklrll', '.kdkllll', '.kkkllll', '...kkkkk', '...kdk..', '..kkkk..',
  ] },
  { name: '宇宙飛行士', cat: 'キャラ', m: [
    '........', '.....kkk', '....kwww', '...kwwww', '...kwkkk', '...kwkwB', '...kwkBB', '...kwkkk',
    '....kwww', '..kkkwww', '.kwwkwww', '.kwwkwww', '.kkkkwww', '...kwwkk', '...kwwk.', '..kkkk..',
  ] },

  /* ---------- モンスター ---------- */
  { name: 'スライム', cat: 'モンスター', rows: [
    '................', '................', '................', '.......kk.......',
    '......kBBk......', '.....kBBBBk.....', '....kBwBBBBk....', '...kBwBBBBBBk...',
    '..kBBBBBBBBBBk..', '..kBBkBBBBkBBk..', '.kBBBkBBBBkBBBk.', '.kBBBBBBBBBBBBk.',
    '.kBBBBBkkBBBBBk.', '.knBBBBBBBBBBnk.', '..knnnnnnnnnnk..', '...kkkkkkkkkk...',
  ] },
  { name: 'ゴースト', cat: 'モンスター', m: [
    '........', '.....kkk', '....kwww', '...kwwww', '..kwwwww', '..kwkkww', '..kwkkww', '..kwwwww',
    '..kwwwwk', '..kwwwww', '..kwwwww', '..kwwwww', '..kwwwww', '..kwwkww', '..kwk.kw', '..kk...k',
  ] },
  { name: 'コウモリ', cat: 'モンスター', m: [
    '........', '........', '........', '......k.', 'k.....kk', 'kk...kpp', 'kpk.kprp', 'kppkkppp',
    'kppppppp', '.kppkppp', '..kk.kpp', '.....kkk', '........', '........', '........', '........',
  ] },
  { name: 'ガイコツ', cat: 'モンスター', m: [
    '........', '........', '....kkkk', '...kwwww', '..kwwwww', '..kwwwww', '..kwkkkw', '..kwkkkw',
    '..kwwwwk', '...kwwww', '....kwkw', '....kkkk', '........', '........', '........', '........',
  ] },
  { name: '目玉', cat: 'モンスター', m: [
    '........', '........', '.....kkk', '...kkwww', '..kwwwww', '.kwwwwww', '.kwwwBBB', 'kwwwBBkk',
    'kwwwBBkk', '.kwwwBBB', '.kwrwwww', '..kwwwww', '...kkwww', '.....kkk', '........', '........',
  ] },
  { name: '悪魔', cat: 'モンスター', m: [
    '........', '..k.....', '..kk....', '..klk.kk', '...kkrrr', '...krrrr', '...kryrr', '...krrrr',
    '...krrkk', '....krrr', '.....kkk', '....krrr', '...krkrr', '...krrrr', '....krkk', '....kk..',
  ] },
  { name: 'タコ', cat: 'モンスター', m: [
    '........', '.....kkk', '....krrr', '...krwrr', '...krrrr', '...krrkr', '...krrkr', '...krrrr',
    '..krrrrr', '.krrkrrk', '.kr.kr.k', 'kr..kr..', 'k...k...', '........', '........', '........',
  ] },
  { name: 'キノコの敵', cat: 'モンスター', m: [
    '........', '.....kkk', '...kkbbb', '..kbbbbb', '.kbbbbbb', '.kbbbbbb', 'kbbkwkbb', 'kbbkwkbb',
    'kbbbbbbb', '.kkkkkkk', '...kssss', '...kssss', '..kkssss', '.kdddkss', '.kdddkkk', '..kkk...',
  ] },
  { name: 'ゾンビ', cat: 'モンスター', m: [
    '........', '....kkkk', '...kdddd', '..kdGGGG', '..kGGGGG', '..kGwkGG', '..kGGGGG', '..kGGGGk',
    '..kGGkkk', '..kGGkwk', '...kGGGG', '....kkkk', '...kvvvv', '..kGkvvv', '..kGkvvv', '..kkkkkk',
  ] },
  { name: 'ドラゴン', cat: 'モンスター', m: [
    '........', '..kk....', '..kok...', '...kkkkk', '..kggggg', '.kgykggg', '.kgggggg', '.kggGGGG',
    '.kgGGkGG', '.kgGGGGG', '.kgkkkkk', '..kgwkwk', '...kgggg', '....kkkk', '........', '........',
  ] },

  /* ---------- アイテム ---------- */
  { name: '剣', cat: 'アイテム', rows: [
    '..............kk', '.............kwk', '............kwlk', '...........kwlk.',
    '..........kwlk..', '.........kwlk...', '........kwlk....', '..kk...kwlk.....',
    '..kok.kwlk......', '...kokwlk.......', '....kook........', '...kbkkok.......',
    '..kbk..kok......', '.kbk....kk......', 'kyk.............', 'kk..............',
  ] },
  { name: '薬びん', cat: 'アイテム', rows: [
    '................', '......kkkk......', '......kbbk......', '.....kkkkkk.....',
    '......kwlk......', '......kwlk......', '.....kwlllk.....', '....kwlllllk....',
    '...kwrrrrrrrk...', '..kwrrrrrrrrrk..', '..krrrrrrrrrrk..', '..krrrrrrrrrrk..',
    '..krrrrrrrrppk..', '...krrrrrrppk...', '....kkkkkkkk....', '................',
  ] },
  { name: '盾', cat: 'アイテム', m: [
    '........', '..kkkkkk', '..kBBBBy', '..kBBBBy', '..kyyyyy', '..kBBBBy', '..kBBBBy', '..kBBBBy',
    '..kBBBBy', '...kBBBy', '...kBBBy', '....kBBy', '.....kBy', '......ky', '.......k', '........',
  ] },
  { name: '杖', cat: 'アイテム', m: [
    '........', '......kk', '.....kwB', '....kBBB', '....kBBB', '.....kBB', '.....kyk', '......ky',
    '......kb', '......kb', '......kb', '......kb', '......kb', '......kb', '......kb', '......kk',
  ] },
  { name: '斧', cat: 'アイテム', m: [
    '........', '.......k', 'kk....kb', 'kwk..klb', 'kwlkkllb', 'kwllllkb', 'kwlkkllb', 'kwk..klb',
    'kk....kb', '......kb', '......kb', '......kb', '......kb', '......kb', '......kk', '........',
  ] },
  { name: '王冠', cat: 'アイテム', m: [
    '........', '........', '........', '..k....k', '.kyk..ky', '.kyyk.ky', '.kyyykyy', '.kyyyyyy',
    '.kyryyyB', '.kyyyyyy', '.kkkkkkk', '.koooooo', '.kkkkkkk', '........', '........', '........',
  ] },
  { name: '宝箱', cat: 'アイテム', m: [
    '........', '........', '..kkkkkk', '.kbbbbbb', 'kbbobbbb', 'kbbobbbb', 'kkkkkkky', 'kbbobbky',
    'kbbobbbk', 'kbbobbbb', 'kbbobbbb', 'kbbobbbb', 'kkkkkkkk', '........', '........', '........',
  ] },
  { name: '鍵', cat: 'アイテム', rows: [
    '................', '................', '................', '..kkkk..........',
    '.kyyyyk.........', 'kyykkyyk........', 'kyk..kykkkkkkkk.', 'kyk..kyyyyyyyyyk',
    'kyykkyykkkykkyk.', '.kyyyyk...kk.kk.', '..kkkk..........', '................',
    '................', '................', '................', '................',
  ] },
  { name: 'コイン', cat: 'アイテム', m: [
    '........', '........', '.....kkk', '...kkyyy', '..kyoooo', '.kyoyyyy', '.kyoyyyo', '.kyoyyyo',
    '.kyoyyyo', '.kyoyyyo', '.kyoyyyy', '..kyoooo', '...kkyyy', '.....kkk', '........', '........',
  ] },
  { name: '宝石', cat: 'アイテム', m: [
    '........', '........', '........', '....kkkk', '...kBwBB', '..kkkkkk', '.kBBwBBB', '..kBBwBB',
    '...kBBwB', '....kBBw', '.....kBB', '......kB', '.......k', '........', '........', '........',
  ] },
  { name: '指輪', cat: 'アイテム', m: [
    '........', '......kk', '.....krr', '.....krr', '......kk', '.....kyy', '....kykk', '...kyk..',
    '..kyk...', '..kyk...', '..kyk...', '..kyk...', '...kyk..', '....kykk', '.....kyy', '......kk',
  ] },
  { name: '本', cat: 'アイテム', m: [
    '........', '........', '..kkk...', '.kwwwkk.', 'kwwwwwwk', 'kwddddwk', 'kwwwwwwk', 'kwddddwk',
    'kwwwwwwk', 'kwdddwwk', 'kwwwwwwk', 'kkkkkkkk', 'kbbbbbbk', 'kkkkkkkk', '........', '........',
  ] },
  { name: '爆弾', cat: 'アイテム', m: [
    '.......o', '......oy', '.......k', '......kd', '.....kkk', '...kknnn', '..knwnnn', '.knwnnnn',
    '.knnnnnn', '.knnnnnn', '.knnnnnn', '..knnnnn', '...kknnn', '.....kkk', '........', '........',
  ] },

  /* ---------- 食べ物 ---------- */
  { name: 'りんご', cat: '食べ物', m: [
    '........', '........', '.......k', '.....kkb', '...kkrrk', '..krwrrr', '.krwrrrr', '.krrrrrr',
    '.krrrrrr', '.krrrrrr', '.krrrrrr', '..krrrrr', '..kprrrr', '...kkrrk', '........', '........',
  ] },
  { name: 'さくらんぼ', cat: '食べ物', m: [
    '........', '.......k', '......kg', '.....kgk', '....kgk.', '...kgk..', '...kgk..', '..kkkk..',
    '.krwrrk.', 'krrrrrrk', 'krrrrrrk', 'krrrrrrk', '.krrrrk.', '..kkkk..', '........', '........',
  ] },
  { name: 'いちご', cat: '食べ物', m: [
    '........', '....kGkG', '...kGGGG', '..krkkGG', '.krrrrrr', '.krryrrr', '.krrrryr', '.kryrrrr',
    '..krrryr', '..kryrrr', '...krrry', '....krrr', '.....krr', '......kk', '........', '........',
  ] },
  { name: 'スイカ', cat: '食べ物', m: [
    '........', '........', '........', '........', 'kkkkkkkk', 'krrrrrrr', 'krkrrrkr', '.krrrrrr',
    '.krrrkrr', '..kwrrrr', '..kGwwww', '...kGGww', '....kkGG', '......kk', '........', '........',
  ] },
  { name: 'おにぎり', cat: '食べ物', m: [
    '........', '........', '.......k', '......kw', '.....kww', '....kwww', '...kwwww', '...kwwww',
    '..kwwwww', '.kwwwnnn', '.kwwwnnn', 'kwwwwnnn', 'kwwwwnnn', 'kkkkkkkk', '........', '........',
  ] },
  { name: 'ケーキ', cat: '食べ物', m: [
    '........', '.......k', '......kr', '.....krr', '..kkkkkk', '.kwwwwww', '.kwPwwPw', '.kssssss',
    '.kssssss', '.kPPPPPP', '.kssssss', '.kssssss', '.kkkkkkk', 'klllllll', '.kkkkkkk', '........',
  ] },
  { name: 'アイス', cat: '食べ物', m: [
    '........', '.....kkk', '....kPPP', '...kPwPP', '...kPPPP', '..kPPPPP', '..kPPPPP', '..kkkkkk',
    '...koooo', '...kobob', '....kooo', '....kobo', '.....koo', '......ko', '.......k', '........',
  ] },
  { name: 'ドーナツ', cat: '食べ物', m: [
    '........', '........', '.....kkk', '...kkPPP', '..kPPyPP', '.kPBPPPP', '.kPPPPkk', 'kPPrPk..',
    'kPPPPk..', '.koPPPkk', '.kooPPPP', '..koooPP', '...kkooo', '.....kkk', '........', '........',
  ] },
  { name: 'ハンバーガー', cat: '食べ物', m: [
    '........', '........', '.....kkk', '...kkooo', '..kowooo', '.kooooow', '.koooooo', '.kkkkkkk',
    'kGGGGGGG', '.kyyyyyy', '.kbbbbbb', '.kbbbbbb', '.kkkkkkk', '.koooooo', '..kkkkkk', '........',
  ] },
  { name: '目玉焼き', cat: '食べ物', m: [
    '........', '........', '........', '....kkkk', '..kkwwww', '.kwwwwww', 'kwwwwwoo', 'kwwwwoyy',
    'kwwwwoyy', 'kwwwwwoo', '.kwwwwww', '..kkwwww', '....kkkk', '........', '........', '........',
  ] },

  /* ---------- 自然 ---------- */
  { name: '木', cat: '自然', rows: [
    '................', '......kkkk......', '....kkGGGGkk....', '...kGGGGGGGGk...',
    '..kGGGwGGGGGGk..', '..kGGGGGGGGGGk..', '.kGGGGGGGGGGGGk.', '.kGGGGGGGGGgGGk.',
    '.kgGGGGGGGGgGGk.', '..kggGGGGGGggk..', '...kkggggggkk...', '......kbbk......',
    '......kbbk......', '......kbbk......', '.....kbbbbk.....', '....kkkkkkkk....',
  ] },
  { name: '花', cat: '自然', m: [
    '........', '......kk', '.....kPP', '..kk.kPP', '.kPPkkPP', '.kPPPkkk', '..kPkyyy', '...kkyyy',
    '..kPkyyy', '.kPPPkkk', '.kPPk.kg', '..kk..kg', '..kGGkkg', '...kGGkg', '....kkkg', '......kk',
  ] },
  { name: 'ひまわり', cat: '自然', m: [
    '........', '.....kkk', '...kkyyy', '..kyyyyy', '.kyyykkk', '.kyykbbb', 'kyykbdbb', 'kyykbbbb',
    'kyykbbdb', '.kyykbbb', '.kyyykkk', '..kyyyyy', '...kkyyy', '.....kkg', '......kg', '......kg',
  ] },
  { name: 'サボテン', cat: '自然', m: [
    '........', '......kk', '.....kGG', '.....kGg', '.kk..kGg', 'kGGk.kGg', 'kGgk.kGg', 'kGgkkkGg',
    '.kGGGGGg', '..kkkkGg', '.....kGg', '.....kGg', '..kkkkkk', '...kbbbb', '...kbbbb', '....kkkk',
  ] },
  { name: 'キノコ', cat: '自然', m: [
    '........', '.....kkk', '...kkrrr', '..krwwrr', '.krrwwrr', '.krrrrrw', 'krwrrrrw', 'kwwwrrrr',
    'kkkkkkkk', '...kwwww', '...kwwkw', '...kwwkw', '...kwwww', '....kwww', '.....kkk', '........',
  ] },
  { name: '星', cat: '自然', m: [
    '.......k', '......ky', '......ky', '.....kyy', '.....kyy', 'kkkkkkyy', 'kyyyyyyy', '.kyyyyyy',
    '..kyykyy', '...kyyyy', '...kyyyy', '..kyyyyy', '..kyyykk', '.kyyyk..', '.kyk....', '.kk.....',
  ] },
  { name: '月', cat: '自然', rows: [
    '................', '.....kkkkk......', '...kkyyyk.......', '..kyyyyk........',
    '.kyyyyk.........', '.kyyyk..........', 'kyyyyk..........', 'kyyyyk..........',
    'kyyyyk..........', 'kyyyyyk.........', '.kyyyyyyk.......', '..kyyyyyyykkkk..',
    '...kkyyyyyyyk...', '.....kkkkkkk....', '................', '................',
  ] },
  { name: '太陽', cat: '自然', m: [
    '...o...o', '....o...', '......kk', '....kkyy', '...kyyyy', 'o.kyyyyy', '.okyykyy', '..kyyyyy',
    '..kyyykk', '.okyyyyy', 'o.kyyyyy', '...kyyyy', '....kkyy', '......kk', '....o...', '...o...o',
  ] },
  { name: '雲', cat: '自然', m: [
    '........', '........', '........', '........', '.....kkk', '...kkwww', '..kwwwww', '.kkkwwww',
    'kwwwwwww', 'kwwwwwww', 'kwwwwwww', '.kllllll', '..kkkkkk', '........', '........', '........',
  ] },
  { name: '雪の結晶', cat: '自然', m: [
    '.......B', '.....B.B', '......BB', '.B.....B', '..B....B', 'BB.B...B', '...BB..B', 'BBBBBBBB',
    'BBBBBBBB', '...BB..B', 'BB.B...B', '..B....B', '.B.....B', '......BB', '.....B.B', '.......B',
  ] },
  { name: '炎', cat: '自然', m: [
    '........', '.......k', '......kr', '......kr', '.....kro', '..k..kro', '.krk.kro', '.krkkroo',
    'krokrooy', 'krooooyy', 'kroooyyy', 'krooyyyy', '.kroyyyy', '..kroyyy', '...kkrrr', '.....kkk',
  ] },

  /* ---------- 動物 ---------- */
  { name: 'ねこ', cat: '動物', m: [
    '........', '..k.....', '..kok...', '..kook..', '..kooook', '.koooooo', '.kookooo', '.kookooo',
    '.koooooo', '.koooooP', '.kooookk', '..kooooo', '...kkooo', '.....kkk', '........', '........',
  ] },
  { name: 'いぬ', cat: '動物', m: [
    '........', '........', '...kkkkk', '.kbkwwww', 'kbbkwwww', 'kbbkwkww', 'kbbkwkww', 'kbbkwwww',
    '.kbkwwkk', '..kkwwwk', '...kwwwr', '....kwww', '.....kkk', '........', '........', '........',
  ] },
  { name: 'うさぎ', cat: '動物', m: [
    '...kk...', '..kwPk..', '..kwPk..', '..kwPk..', '..kwPk..', '...kwkkk', '..kwwwww', '.kwwwwww',
    '.kwwkwww', '.kwwkwww', '.kPwwwwP', '.kwwwwwk', '..kwwwww', '...kkwww', '.....kkk', '........',
  ] },
  { name: 'くま', cat: '動物', m: [
    '........', '..kkk...', '.kbbbk..', '.kbobkkk', '.kbbbbbb', '..kbbbbb', '.kbbkbbb', '.kbbbbbb',
    '.kbbbsss', '.kbbsskk', '.kbbsssk', '..kbbsss', '...kkbbb', '.....kkk', '........', '........',
  ] },
  { name: 'ひよこ', cat: '動物', m: [
    '........', '........', '.....kkk', '....kyyy', '...kyyyy', '...kykyy', '...kyyyo', '..kyyyyy',
    '.kyyyyyy', 'kyyykyyy', '.kyykyyy', '.kyyyyyy', '..kyyyyy', '...kkkkk', '....ko..', '........',
  ] },
  { name: 'ペンギン', cat: '動物', m: [
    '........', '.....kkk', '....knnn', '...knnnn', '...knwkw', '...knwww', '...knwwo', '..knnwww',
    '.knknwww', '.knknwww', '..kknwww', '...knwww', '...knnww', '....knnn', '...kook.', '........',
  ] },
  { name: 'ぶた', cat: '動物', m: [
    '........', '..kk....', '..kPk...', '..kPPkkk', '.kPPPPPP', '.kPPkPPP', '.kPPPPPP', '.kPPPkkk',
    '.kPPkPkP', '.kPPPkkk', '..kPPPPP', '...kkPPP', '.....kkk', '........', '........', '........',
  ] },
  { name: 'さかな', cat: '動物', rows: [
    '................', '................', '................', '......kkkkk.....',
    '....kkBBBBBk....', '...kBBBBBBBBk.kk', '..kBkBBBBBBBBkBk', '.kBBBBBBBBBBBBBk',
    '..kwBBBBBBBBBkBk', '...kwwBBBBBBk.kk', '....kkwwwwwk....', '......kkkkk.....',
    '................', '................', '................', '................',
  ] },

  /* ---------- 記号 ---------- */
  { name: 'ハート', cat: '記号', rows: [
    '................', '................', '...kkk....kkk...', '..krrrk..krrrk..',
    '.krrwrrkkrrrrrk.', '.krwrrrrrrrrrrk.', '.krrrrrrrrrrrrk.', '.krrrrrrrrrrrrk.',
    '..krrrrrrrrrrk..', '...krrrrrrrrk...', '....krrrrrrk....', '.....krrrrk.....',
    '......krrk......', '.......kk.......', '................', '................',
  ] },
  { name: '顔アイコン', cat: '記号', rows: [
    '................', '.....kkkkkk.....', '...kkyyyyyykk...', '..kyyyyyyyyyyk..',
    '.kyyyyyyyyyyyyk.', '.kyyykyyyykyyyk.', 'kyyyykyyyykyyyyk', 'kyyyyyyyyyyyyyyk',
    'kyyPyyyyyyyyPyyk', 'kyyykyyyyyykyyyk', '.kyyykkkkkkyyyk.', '.kyyyyyyyyyyyyk.',
    '..kyyyyyyyyyyk..', '...kkyyyyyykk...', '.....kkkkkk.....', '................',
  ] },
  { name: 'はてなブロック', cat: '記号', rows: [
    'kkkkkkkkkkkkkkkk', 'kooooooooooooook', 'kokooooooooookok', 'kooooowwwwoooook',
    'koooowwooowwoook', 'koooowwooowwoook', 'koooooooowwooook', 'kooooooowwoooook',
    'koooooowwooooook', 'koooooowwooooook', 'kooooooooooooook', 'koooooowwooooook',
    'koooooowwooooook', 'kokooooooooookok', 'kooooooooooooook', 'kkkkkkkkkkkkkkkk',
  ] },
  { name: 'びっくり', cat: '記号', m: [
    '........', '.....kkk', '...kkrrr', '..krrrrr', '.krrrrrw', '.krrrrrw', 'krrrrrrw', 'krrrrrrw',
    'krrrrrrw', 'krrrrrrr', '.krrrrrw', '.krrrrrw', '..krrrrr', '...kkrrr', '.....kkk', '........',
  ] },
  { name: 'チェック', cat: '記号', rows: [
    '................', '................', '................', '............kk..',
    '...........kGGk.', '..........kGGk..', '.kk......kGGk...', 'kGGk....kGGk....',
    '.kGGk..kGGk.....', '..kGGkkGGk......', '...kGGGGk.......', '....kGGk........',
    '.....kk.........', '................', '................', '................',
  ] },
  { name: '矢印', cat: '記号', rows: [
    '................', '................', '................', '........kk......',
    '........kGk.....', '........kGGk....', 'kkkkkkkkkGGGk...', 'kGGGGGGGGGGGGk..',
    'kGGGGGGGGGGGGk..', 'kkkkkkkkkGGGk...', '........kGGk....', '........kGk.....',
    '........kk......', '................', '................', '................',
  ] },
  { name: '電球', cat: '記号', m: [
    '........', '.....kkk', '...kkyyy', '..kywyyy', '.kywyyyy', '.kyyyyyy', '.kyyyyyy', '.kyyyoyo',
    '..kyyyoy', '...kyyyo', '....kyyy', '....kkkk', '....klll', '....kddd', '....klll', '.....kkk',
  ] },
  { name: '音符', cat: '記号', rows: [
    '................', '......kkkkkkkk..', '......knnnnnnk..', '......kkkkkkkk..',
    '......k......k..', '......k......k..', '......k......k..', '......k......k..',
    '......k......k..', '...kkkk...kkkk..', '..knnnk..knnnk..', '..knnnk..knnnk..',
    '...kkk....kkk...', '................', '................', '................',
  ] },

  /* ---------- タイル ---------- */
  { name: '草のタイル', cat: 'タイル', rows: [
    'GGGGGGGGGGGGGGGG', 'GGGgGGGGGGgGGGGG', 'gGgggGGgGgggGGgG', 'gbbgggbbgbggbbgg',
    'bbbbbbbbbbbbbbbb', 'bbdbbbbbbbbdbbbb', 'bbbbbbbbbbbbbbdb', 'bbbbdbbbbbbbbbbb',
    'bbbbbbbbbdbbbbbb', 'bdbbbbbbbbbbbbbb', 'bbbbbbdbbbbbdbbb', 'bbbbbbbbbbbbbbbb',
    'bbbdbbbbbbbbbbbb', 'bbbbbbbbbdbbbbdb', 'bbbbbbbbbbbbbbbb', 'bdbbbbdbbbbbbbbb',
  ] },
  { name: 'レンガ', cat: 'タイル', rows: [
    'llllllllllllllll', 'bbbbbbblbbbbbbbl', 'bbbbbbblbbbbbbbl', 'bbbbbbblbbbbbbbl',
    'llllllllllllllll', 'bbblbbbbbbblbbbb', 'bbblbbbbbbblbbbb', 'bbblbbbbbbblbbbb',
    'llllllllllllllll', 'bbbbbbblbbbbbbbl', 'bbbbbbblbbbbbbbl', 'bbbbbbblbbbbbbbl',
    'llllllllllllllll', 'bbblbbbbbbblbbbb', 'bbblbbbbbbblbbbb', 'bbblbbbbbbblbbbb',
  ] },
  { name: '石畳', cat: 'タイル', rows: [
    'llllllldllllllld', 'lwllllldlwllllld', 'llllllldllllllld', 'dddddddddddddddd',
    'lllldllllllldlll', 'llwldlllllwldlll', 'lllldllllllldlll', 'dddddddddddddddd',
    'llllllldllllllld', 'lwllllldlwllllld', 'llllllldllllllld', 'dddddddddddddddd',
    'lllldllllllldlll', 'llwldlllllwldlll', 'lllldllllllldlll', 'dddddddddddddddd',
  ] },
  { name: '水', cat: 'タイル', rows: [
    'BBBBBBBBBBBBBBBB', 'BBwwBBBBBBBBBBBB', 'BwBBwBBBBBBwwBBB', 'BBBBBwBBBBwBBwBB',
    'BBBBBBBBBBBBBBwB', 'BBBBBBBBBBBBBBBB', 'BBBBBBwwBBBBBBBB', 'BBBBBwBBwBBBBBBB',
    'BBBBBBBBBBBBBBBB', 'BBBBBBBBBBBBwwBB', 'BBwwBBBBBBBwBBwB', 'BwBBwBBBBBBBBBBB',
    'BBBBBBBBBBBBBBBB', 'BBBBBBBwwBBBBBBB', 'BBBBBBwBBwBBBBBB', 'BBBBBBBBBBBBBBBB',
  ] },
  { name: '砂', cat: 'タイル', rows: [
    'ssssssssssssssss', 'ssosssssssssosss', 'ssssssssosssssss', 'ssssosssssssssso',
    'ssssssssssssssss', 'sosssssssssossss', 'ssssssosssssssss', 'ssssssssssssssos',
    'ssosssssssssssss', 'sssssssssossssss', 'ssssosssssssssss', 'ssssssssssssosss',
    'sossssssssssssss', 'sssssssossssssso', 'ssssssssssssssss', 'sssosssssssssoss',
  ] },
  { name: '木の床', cat: 'タイル', rows: [
    'oooooooooooooooo', 'ooobbooooooooooo', 'oooooooooobboooo', 'bbbbbbbbbbbbbbbb',
    'oooobooooooooooo', 'oooobooooobboooo', 'oooobooooooooooo', 'bbbbbbbbbbbbbbbb',
    'oooooooooooboooo', 'oobboooooooboooo', 'oooooooooooboooo', 'bbbbbbbbbbbbbbbb',
    'oooooobooooooooo', 'oooooobooooobboo', 'oooooobooooooooo', 'bbbbbbbbbbbbbbbb',
  ] },
  { name: '雪', cat: 'タイル', rows: [
    'wwwwwwwwwwwwwwww', 'wwwwwwwlwwwwwwww', 'wwlwwwwwwwwwwlww', 'wwwwwwwwwwwwwwww',
    'wwwwwlwwwwwwwwww', 'wwwwwwwwwwlwwwww', 'wlwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwlw',
    'wwwwwwwlwwwwwwww', 'wwwwwwwwwwwwwwww', 'wwwlwwwwwwwwwwww', 'wwwwwwwwwwwlwwww',
    'wwwwwwwwwwwwwwww', 'wwwwwlwwwwwwwwwl', 'wlwwwwwwwwwwwwww', 'wwwwwwwwwlwwwwww',
  ] },

  /* ---------- 乗り物・建物 ---------- */
  { name: '家', cat: '乗り物・建物', m: [
    '.......k', '......kr', '.....krr', '....krrr', '...krrrr', '..krrrrr', '.krrrrrr', 'kkkkkkkk',
    '.kwwwwww', '.kwBBwkk', '.kwBBwkb', '.kwwwwkb', '.kwwwwkb', '.kwwwwkb', '.kkkkkkk', '........',
  ] },
  { name: '城の塔', cat: '乗り物・建物', m: [
    '.kkk.kkk', '.klk.klk', '.klkkklk', '.kllllll', '..kkkkkk', '..klllll', '..klllkk', '..klllkn',
    '..klllkn', '..klllll', '..klllll', '..klllkk', '..kllkbb', '..kllkbb', '..kllkbb', '..kkkkkk',
  ] },
  { name: 'ロケット', cat: '乗り物・建物', m: [
    '.......k', '......kr', '.....krr', '.....kww', '....kwww', '....kwkk', '....kwkB', '....kwkk',
    '....kwww', '...kkwww', '..krkwww', '.krrkwww', '.krkkkkk', '.kk..koo', '......ky', '.......k',
  ] },
  { name: 'UFO', cat: '乗り物・建物', m: [
    '........', '........', '........', '.....kkk', '....kBBB', '...kBwBB', '..kkkkkk', '.kllllll',
    'kllyllyl', '.kllllll', '..kkkkkk', '....k...', '...k....', '........', '........', '........',
  ] },
  { name: '車', cat: '乗り物・建物', m: [
    '........', '........', '........', '........', '....kkkk', '...kBBBk', '..kBBBBk', '.kkkkkkk',
    'krrrrrrr', 'kyrrrrrr', 'krkkkkrr', 'kkkllkkk', '..kkkk..', '........', '........', '........',
  ] },
];

/* ---------- 人の形のキャラ（部品の組み合わせ）と色違い ---------- */
// Placeholders in the layers below are swapped for palette letters at the end of compose():
// H hair, S skin, C clothes, D trim, L legs, F feet, X hat, Y hat trim, K cape,
// I blade / held item, J sword guard, O staff orb, Q shield, R shield trim.
// In a layer, ' ' keeps what is underneath and '.' clears it; short strings are padded with ' '.
(() => {
  const T = window.CREDOT_TEMPLATES;
  const BODY = [
    '................', '.....kkkkkk.....', '....kHHHHHHk....', '....kHHHHHHk....',
    '....kSSSSSSk....', '....kSkSSkSk....', '....kSSSSSSk....', '.....kkkkkk.....',
    '....kCCCCCCk....', '...kCkCDDCkCk...', '...kSkCDDCkSk...', '....kkCCCCkk....',
    '....kLLLLLLk....', '....kLLkkLLk....', '....kLLkkLLk....', '...kFFk..kFFk...',
  ];
  const span = (from, to, s) => { const o = {}; for (let y = from; y <= to; y++) o[y] = s; return o; };
  const HAIR = {
    short: {},
    none: {},
    spiky: { 0: '.....k.kk.k.....', 1: '....kHkHHkHk....', 3: '...kHHHHHHHHk...' },
    long: { 3: '...kHHHHHHHHk...', 4: '...kH      Hk...', 5: '...kH      Hk...', 6: '...kH      Hk...', 7: '...kHk    kHk...', 8: '...kH      Hk...' },
    bob: { 3: '...kHHHHHHHHk...', 4: '...kH      Hk...', 5: '...kH      Hk...' },
    ponytail: { 2: '....kHHHHHHkk...', 3: '....kHHHHHHkHk..', 4: '           kHk..', 5: '           kHk..', 6: '            k...' },
    twin: { 3: '..kkHHHHHHHHkk..', 4: '..kHk      kHk..', 5: '..kHk      kHk..', 6: '...k        k...' },
    bald: { 2: '....kSSSSSSk....', 3: '....kSSSSSSk....' },
  };
  const BEARD = { 6: '....kHHHHHHk....', 7: '.....kHHHHk.....' };
  const HEAD = {
    wizard: { 0: '.......kk.......', 1: '......kXXk......', 2: '.....kXYYXk.....', 3: '..kkkkkkkkkkkk..' },
    hood: { 1: '.....kkkkkk.....', 2: '....kXXXXXXk....', 3: '...kXXXXXXXXk...', 4: '...kX      Xk...', 5: '...kX      Xk...', 6: '...kX      Xk...', 7: '...kXk    kXk...' },
    helmet: { 1: '.....kkkkkk.....', 2: '....kXYXXYXk....', 3: '....kXXXXXXk....', 4: '....kXkkkkXk....', 5: '....kXkYYkXk....', 6: '....kXXXXXXk....' },
    soldier: { 1: '.....kkkkkk.....', 2: '....kXXXXXXk....', 3: '...kXXYYYYXXk...', 4: '...kXk    kXk...' },
    crown: { 0: '....k.k..k.k....', 1: '....kYkYYkYk....', 2: '....kYYYYYYk....' },
    bandana: { 3: '...kXXXXXXXXk...' },
    turban: { 0: '.....kkkkkk.....', 1: '....kXXYXXXk....', 2: '...kXXXXXXXXk...', 3: '...kXXXXXXXXk...' },
    cookhat: { 0: '....kkkkkkkk....', 1: '...kwwwwwwwwk...', 2: '....kwwwwwwk....', 3: '....kkkkkkkk....' },
    veil: { 1: '.....kkkkkk.....', 2: '....kXXXXXXk....', 3: '...kXYYYYYYXk...', 4: '...kX      Xk...', 5: '...kX      Xk...', 6: '...kX      Xk...', 7: '...kXk    kXk...', 8: '...kX      Xk...' },
    nursecap: { 1: '.....kkkkkk.....', 2: '....kwwrrwwk....' },
    feather: { 0: '...........kk...', 1: '.....kkkkkkYk...', 2: '....kXXXXXXkYk..', 3: '..kkkkkkkkkkkk..' },
    horns: { 0: '..kk........kk..', 1: '...kYk    kYk...' },
    rabbit: { 0: '....kk....kk....', 1: '....kHkkkkHk....' },
    wolf: { 0: '...k........k...', 1: '...kHkkkkkkHk...' },
    dragon: { 0: '...k........k...', 1: '...kXkkkkkkXk...', 2: '....kXYXXYXk....', 3: '....kXXXXXXk....', 4: '....kX    Xk....' },
    strawhat: { 1: '.....kkkkkk.....', 2: '....kXXXXXXk....', 3: '.kkkkkkkkkkkkkk.' },
    headband: { 3: '....kwwwwwwk....' },
    goblin: { 4: '..kSk      kSk..', 5: '...k        k...' },
    mask: { 6: '    kXXXXXXk' },
  };
  const OUTFIT = {
    robe: { 12: '....kCCCCCCk....', 13: '...kCCCCCCCCk...', 14: '...kDDDDDDDDk...', 15: '...kkkkkkkkkk...' },
    armor: { 8: '...kDCCCCCCDk...', 9: '    D      D' },
    tail: { 12: '....kLLLLLLk....', 13: '.....kLLLLk.....', 14: '......kLLk......', 15: '....kLLkkLLk....' },
    cape: { 8: '...kk      kk...', 9: '..kKk      kKk..', ...span(10, 13, '..kK        Kk..'), 14: '..kkk      kkk..' },
    wings: { 7: 'kk            kk', 8: 'kwkk        kkwk', 9: 'kwwk        kwwk', 10: '.kk          kk.' },
  };
  const ITEM = {
    sword: { 2: '             k', ...span(3, 7, '            kIk'), 8: '           kJJJk', 9: '            kbk', 10: '            kbk', 11: '             k' },
    bigsword: { 1: '            kkk', 2: '           kIIIk', ...span(3, 8, '           kIwIk'), 9: '          kJJJJk', 10: '            kbk', 11: '            kbk', 12: '             k' },
    staff: { 1: '            kkk', 2: '           kOOOk', 3: '           kOwOk', 4: '            kkk', ...span(5, 13, '            kbk'), 14: '            kkk' },
    stick: { 3: '            kkk', ...span(4, 13, '            kbk'), 14: '            kkk' },
    skullstaff: { 1: '            kkk', 2: '           kwwwk', 3: '           kkwkk', 4: '            kwk', ...span(5, 13, '            kbk'), 14: '            kkk' },
    lance: { 0: '             k', 1: '            kIk', 2: '            kIk', 3: '             k', ...span(4, 13, '            kbk'), 14: '            kkk' },
    dagger: { 8: '             k', 9: '            kIk', 10: '            kbk' },
    ldagger: { 8: '  k', 9: ' kIk', 10: ' kbk' },
    shield: { 8: 'kkkk', 9: 'kQQk', 10: 'kQRk', 11: 'kQQk', 12: ' kk' },
    book: { 9: ' kkkk', 10: ' kIwk', 11: ' kkkk' },
    bow: { 4: '..kk', 5: '.kbk', 6: 'kbkl', 7: 'kbkl', 8: 'kbkl', 9: 'kbkl', 10: '.kbk', 11: '..kk' },
    lute: { 7: '   kk', 8: '  kbk', 9: ' kook', 10: 'kooook', 11: 'kookok', 12: '.kook', 13: '..kk' },
    fists: { 9: '..kk        kk..', 10: '..kIIk    kIIk..', 11: '..kkk      kkk..' },
    hourglass: { 7: 'kkkk', 8: 'kyyk', 9: ' kk', 10: 'kyyk', 11: 'kkkk' },
    gun: { 9: '             kk.', 10: '            kddd', 11: '            kbk.' },
    orb: { 9: ' kk', 10: 'kwBk', 11: 'kBBk', 12: ' kk' },
    bag: { 9: ' kk', 10: 'kbbk', 11: 'kbbk', 12: ' kk' },
    club: { 5: '            kk', 6: '           kbbk', 7: '           kbbk', 8: '            kbk', 9: '            kbk', 10: '            kbk', 11: '             k' },
    pet: { 12: ' kk', 13: 'kGwk', 14: 'kGGk', 15: ' kk' },
  };
  const DEFAULT_COLORS = { H: 'b', S: 's', C: 'B', D: 'w', L: 'n', F: 'd', X: 'r', Y: 'y', K: 'r', I: 'w', J: 'y', O: 'r', Q: 'B', R: 'y' };
  const overlay = (rows, layer) => {
    for (const [y, raw] of Object.entries(layer)) {
      const s = raw.padEnd(16, ' '), r = rows[y].split('');
      for (let x = 0; x < 16; x++) if (s[x] !== ' ') r[x] = s[x];
      rows[y] = r.join('');
    }
  };
  function compose(cfg) {
    const rows = BODY.slice();
    (cfg.outfit || []).forEach((k) => overlay(rows, OUTFIT[k]));
    overlay(rows, HAIR[cfg.hair || 'short']);
    if (cfg.beard) overlay(rows, BEARD);
    (cfg.head || []).forEach((k) => overlay(rows, HEAD[k]));
    (cfg.items || []).forEach((k) => overlay(rows, ITEM[k]));
    const map = { ...DEFAULT_COLORS, ...cfg.c };
    return rows.map((r) => r.replace(/[A-Z]/g, (ch) => map[ch] || ch));
  }
  const add = (name, cat, cfg) => T.push({ name, cat, rows: compose(cfg) });
  const toRows = (t) => t.rows || t.m.map((r) => r + [...r].reverse().join(''));
  const recolor = (name, cat, from, map) => {
    const base = T.find((t) => t.name === from);
    T.push({ name, cat, rows: toRows(base).map((r) => r.replace(/./g, (ch) => map[ch] || ch)) });
  };

  /* ジョブ：11 系統の初級と上級の見た目 */
  add('見習い剣士', 'ジョブ', { items: ['sword'], c: { H: 'b', C: 'B', D: 'w', L: 'n', F: 'b' } });
  add('魔剣士', 'ジョブ', { hair: 'spiky', outfit: ['cape'], items: ['sword'], c: { H: 'n', C: 'n', D: 'p', L: 'd', F: 'd', K: 'p', I: 'p', J: 'r' } });
  add('拳闘士', 'ジョブ', { hair: 'spiky', head: ['bandana'], items: ['fists'], c: { H: 'r', C: 'o', D: 'n', L: 'o', F: 'b', X: 'r', I: 'r' } });
  add('仙人', 'ジョブ', { hair: 'bald', beard: true, outfit: ['robe'], items: ['stick'], c: { H: 'w', C: 'o', D: 'b' } });
  add('見習い魔術師', 'ジョブ', { head: ['wizard'], outfit: ['robe'], items: ['staff'], c: { X: 'B', Y: 'y', C: 'B', D: 'y', O: 'r' } });
  add('大魔導士', 'ジョブ', { hair: 'long', beard: true, head: ['wizard'], outfit: ['robe', 'cape'], items: ['staff'], c: { H: 'w', X: 'p', Y: 'y', C: 'p', D: 'y', K: 'n', O: 'B' } });
  add('時読み', 'ジョブ', { hair: 'bob', outfit: ['robe'], items: ['hourglass'], c: { H: 'v', C: 'n', D: 'y' } });
  add('時の賢者', 'ジョブ', { hair: 'long', head: ['hood'], outfit: ['robe'], items: ['staff'], c: { H: 'w', X: 'v', C: 'v', D: 'y', O: 'y' } });
  add('霧使い', 'ジョブ', { head: ['hood'], outfit: ['robe'], items: ['staff'], c: { H: 'd', X: 'l', C: 'l', D: 'v', O: 'v' } });
  add('暗殺者', 'ジョブ', { head: ['hood', 'mask'], items: ['dagger', 'ldagger'], c: { X: 'd', C: 'd', D: 'r', L: 'd', F: 'n', I: 'l' } });
  add('楽士', 'ジョブ', { head: ['feather'], items: ['lute'], c: { H: 'o', X: 'G', Y: 'r', C: 'G', D: 'y', L: 'b', F: 'b' } });
  add('吟遊詩人', 'ジョブ', { hair: 'long', head: ['feather'], outfit: ['cape'], items: ['lute'], c: { H: 'y', X: 'p', Y: 'w', C: 'p', D: 'y', K: 'r', L: 'n', F: 'b' } });
  add('看護見習い', 'ジョブ', { hair: 'bob', head: ['nursecap'], outfit: ['robe'], items: ['book'], c: { H: 'b', C: 'w', D: 'P', I: 'r' } });
  add('聖職者', 'ジョブ', { head: ['hood'], outfit: ['robe'], items: ['staff'], c: { X: 'w', C: 'w', D: 'y', O: 'y' } });
  add('聖騎士', 'ジョブ', { hair: 'none', head: ['helmet'], outfit: ['armor', 'cape'], items: ['sword', 'shield'], c: { X: 'w', Y: 'y', C: 'w', D: 'y', L: 'l', F: 'l', K: 'B', Q: 'w', R: 'y' } });
  add('投擲手', 'ジョブ', { head: ['bandana'], items: ['dagger', 'ldagger'], c: { H: 'o', X: 'G', C: 'b', D: 'o', L: 'd', F: 'b' } });
  add('弓使い', 'ジョブ', { hair: 'ponytail', items: ['bow'], c: { H: 'o', C: 'g', D: 'b', L: 'b', F: 'b' } });
  add('砲撃士', 'ジョブ', { head: ['bandana'], items: ['gun'], c: { H: 'd', X: 'o', C: 'd', D: 'o', L: 'b', F: 'b' } });
  add('魔物使い見習い', 'ジョブ', { hair: 'twin', items: ['pet', 'stick'], c: { H: 'o', C: 'G', D: 'y', L: 'b', F: 'b' } });
  add('竜騎士', 'ジョブ', { hair: 'none', head: ['dragon'], outfit: ['armor'], items: ['lance'], c: { X: 'B', Y: 'w', C: 'B', D: 'w', L: 'n', F: 'd', I: 'l' } });
  add('ネクロマンサー', 'ジョブ', { head: ['hood'], outfit: ['robe'], items: ['skullstaff'], c: { X: 'p', C: 'n', D: 'G', S: 'l' } });
  add('無魔の者', 'ジョブ', { head: ['headband'], items: ['fists'], c: { H: 'd', C: 'l', D: 'd', L: 'd', F: 'b', I: 'w' } });
  add('封魔の剣客', 'ジョブ', { hair: 'ponytail', items: ['sword'], c: { H: 'n', C: 'w', D: 'r', L: 'n', F: 'b', I: 'l', J: 'p' } });
  add('旅人', 'ジョブ', { head: ['strawhat'], outfit: ['cape'], items: ['stick'], c: { X: 'o', C: 'b', D: 'o', K: 'G', L: 'b', F: 'b' } });
  add('冒険者', 'ジョブ', { hair: 'spiky', head: ['bandana'], items: ['sword', 'shield'], c: { H: 'b', X: 'r', C: 'G', D: 'b', L: 'b', F: 'b', Q: 'b', R: 'y' } });
  add('勇者', 'ジョブ', { hair: 'spiky', outfit: ['armor', 'cape'], items: ['sword', 'shield'], c: { H: 'b', C: 'B', D: 'y', L: 'n', F: 'b', K: 'r', Q: 'B', R: 'y' } });
  add('女勇者', 'ジョブ', { hair: 'long', outfit: ['armor', 'cape'], items: ['sword'], c: { H: 'o', C: 'r', D: 'y', L: 'n', F: 'b', K: 'B' } });

  /* 仲間 */
  add('大剣の戦士', '仲間', { head: ['soldier'], outfit: ['armor'], items: ['bigsword'], c: { X: 'l', Y: 'b', C: 'b', D: 'o', L: 'd', F: 'b' } });
  add('水の魔法使い', '仲間', { hair: 'long', outfit: ['robe'], items: ['staff'], c: { H: 'B', C: 'w', D: 'B', O: 'B' } });
  add('砂漠の弓使い', '仲間', { head: ['turban'], items: ['bow'], c: { X: 'o', Y: 'r', C: 'y', D: 'o', L: 'b', F: 'b' } });
  add('闘技場の王者', '仲間', { hair: 'spiky', outfit: ['armor', 'cape'], items: ['bigsword'], c: { H: 'r', C: 'r', D: 'y', L: 'b', F: 'b', K: 'o', I: 'l' } });
  add('霧の短剣使い', '仲間', { hair: 'bob', outfit: ['robe'], items: ['dagger'], c: { H: 'n', C: 'v', D: 'l' } });

  /* 町の人 */
  add('村の青年', '町の人', { c: { H: 'b', C: 'o', D: 'w', L: 'b', F: 'b' } });
  add('村の娘', '町の人', { hair: 'long', outfit: ['robe'], c: { H: 'b', C: 'o', D: 'w' } });
  add('村のおばさん', '町の人', { hair: 'bob', head: ['bandana'], outfit: ['robe'], items: ['bag'], c: { H: 'b', X: 'r', C: 'v', D: 'w' } });
  add('村のおじいさん', '町の人', { hair: 'bald', beard: true, items: ['stick'], c: { H: 'w', C: 'g', D: 'b', L: 'b', F: 'b' } });
  add('村の子ども', '町の人', { hair: 'spiky', c: { H: 'o', C: 'G', D: 'y', L: 'B', F: 'b' } });
  add('兵士', '町の人', { hair: 'none', head: ['soldier'], outfit: ['armor'], items: ['lance', 'shield'], c: { X: 'l', Y: 'r', C: 'r', D: 'l', L: 'n', F: 'd', I: 'l', Q: 'r', R: 'y' } });
  add('シスター', '町の人', { head: ['veil'], outfit: ['robe'], c: { X: 'n', Y: 'w', C: 'n', D: 'w' } });
  add('コック', '町の人', { head: ['cookhat'], c: { H: 'b', C: 'w', D: 'r', L: 'd', F: 'd' } });
  add('占い師', '町の人', { hair: 'long', head: ['hood'], outfit: ['robe'], items: ['orb'], c: { H: 'v', X: 'p', C: 'p', D: 'y' } });
  add('商人', '町の人', { head: ['bandana'], items: ['bag'], c: { H: 'b', X: 'G', C: 'y', D: 'b', L: 'b', F: 'b' } });
  add('盗賊', '町の人', { head: ['bandana', 'mask'], items: ['dagger'], c: { H: 'b', X: 'd', C: 'd', D: 'b', L: 'b', F: 'b', I: 'l' } });
  add('獣人（ウサギ）', '町の人', { head: ['rabbit'], c: { H: 'w', C: 'b', D: 'o', L: 'b', F: 'b' } });
  add('獣人（オオカミ）', '町の人', { hair: 'spiky', head: ['wolf'], c: { H: 'l', C: 'n', D: 'l', L: 'd', F: 'd' } });
  add('人魚', '町の人', { hair: 'long', outfit: ['tail'], c: { H: 'P', C: 'v', D: 'w', L: 'B' } });
  add('妖精', '町の人', { outfit: ['robe', 'wings'], c: { H: 'y', C: 'G', D: 'y' } });

  /* モンスター（人の形） */
  add('ゴブリン', 'モンスター', { hair: 'bald', head: ['goblin'], items: ['club'], c: { S: 'G', C: 'b', D: 'd', L: 'b', F: 'b' } });
  add('ゴブリン斥候', 'モンスター', { hair: 'bald', head: ['goblin', 'bandana'], items: ['dagger'], c: { S: 'G', X: 'r', C: 'g', D: 'b', L: 'b', F: 'b' } });
  add('狼男', 'モンスター', { hair: 'spiky', head: ['wolf'], items: ['fists'], c: { H: 'd', S: 'l', C: 'b', D: 'd', L: 'b', F: 'd', I: 'l' } });
  add('トロル', 'モンスター', { hair: 'bald', head: ['goblin'], outfit: ['armor'], items: ['club'], c: { S: 'g', C: 'b', D: 'd', L: 'd', F: 'd' } });
  add('砂賊', 'モンスター', { head: ['turban', 'mask'], items: ['dagger'], c: { X: 'd', Y: 'o', C: 'o', D: 'b', L: 'b', F: 'b', I: 'l' } });
  add('海賊兵', 'モンスター', { head: ['bandana'], items: ['sword'], c: { H: 'b', X: 'r', C: 'w', D: 'B', L: 'n', F: 'b', I: 'l' } });
  add('魔王軍の水兵', 'モンスター', { hair: 'none', head: ['soldier'], items: ['lance'], c: { S: 'B', X: 'n', Y: 'B', C: 'n', D: 'B', L: 'n', F: 'd', I: 'l' } });
  add('吸血鬼', 'モンスター', { outfit: ['cape'], c: { H: 'n', S: 'w', C: 'n', D: 'r', L: 'n', F: 'd', K: 'r' } });

  /* モンスター（手描き） */
  T.push({ name: 'カエル', cat: 'モンスター', m: [
    '........', '........', '........', '........', '..kkk...', '.kwkwk..', '.kwwwkkk', '.kGGGGGG',
    'kGGGGGGG', 'kGkkkkkk', 'kGGGGGGG', '.kGGyyyy', 'kGGkyyyy', 'kGkkkkkk', '.kk.....', '........',
  ] });
  T.push({ name: '魔獣ウルフ', cat: 'モンスター', m: [
    '........', '..k.....', '..kk....', '..kdk...', '..kddkkk', '.kdddddd', '.kdykddd', '.kdddddd',
    '..kdddll', '..kddlll', '...kdlkk', '...kdwkw', '....kddd', '.....kkk', '........', '........',
  ] });
  T.push({ name: '人食い花', cat: 'モンスター', m: [
    '........', '.....kkk', '...kkrrr', '..krrrrr', '.krrkkkk', '.krkwkwk', '.krkkkkk', '.krkwkwk',
    '.krrkkkk', '..krrrrr', '...kkrrr', '.....kkg', '.kk...kg', 'kGGk..kg', '.kGGkkkg', '..kkkkkk',
  ] });
  T.push({ name: 'ゴーレム', cat: 'モンスター', m: [
    '........', '....kkkk', '...kllll', '...kllll', '...klyll', '...kllll', '.kkkkkkk', 'kllkllll',
    'kllkldll', 'kllkllll', 'kllklldl', 'kkkkllll', '...kllkk', '...kllk.', '..klllk.', '..kkkkk.',
  ] });
  T.push({ name: 'サンドワーム', cat: 'モンスター', m: [
    '........', '....kkkk', '..kkbbbb', '.kbbkkkk', '.kbkwkwk', 'kbbkkkkk', 'kbbkwkwk', 'kbbbkkkk',
    '.kbbbbbb', '..kdbbbb', '...kbbbb', '...kdddd', '...kbbbb', '.kssssss', 'kssossss', 'kkkkkkkk',
  ] });
  T.push({ name: 'サソリ', cat: 'モンスター', m: [
    '......kk', '......ky', '.......k', '.kk...kr', 'krrk..kr', 'krrk..kr', '.krk.kkr', '..krkrrr',
    '...krrrr', '...krkrr', '..kkrrrr', '.k.kkrrr', 'k.k.kkkk', '..k.....', '........', '........',
  ] });
  T.push({ name: 'トカゲ', cat: 'モンスター', m: [
    '......kk', '.....kyy', '.....kky', '.....kyy', '..k...ky', '..kkkkyy', '.....kyo', '.....kyy',
    '..kkkkyy', '..k...ky', '......ky', '......ky', '.......k', '........', '........', '........',
  ] });
  T.push({ name: '海鳥', cat: 'モンスター', m: [
    '........', '........', '........', '........', 'kk......', 'kwk.....', 'kwwk.kkk', '.kwwkwww',
    '..kwwwkw', '...kwwwo', '....kwww', '.....kll', '.....ko.', '........', '........', '........',
  ] });
  T.push({ name: 'ガーゴイル', cat: 'モンスター', m: [
    '..k.....', '..kk....', 'k..kkkkk', 'kk.kvvvv', 'kvkkvrvv', 'kvvkvvvv', 'kvvkvkkk', 'kvvvkvvv',
    '.kvvkvvv', '..kvkvvv', '...kkvvv', '....kvvk', '...kvvk.', '...kkk..', '........', '........',
  ] });

  /* モンスター（色違い） */
  recolor('溶岩スライム', 'モンスター', 'スライム', { B: 'o', n: 'r', w: 'y' });
  recolor('氷の狼', 'モンスター', '魔獣ウルフ', { d: 'B', l: 'w', y: 'r' });
  recolor('黒竜', 'モンスター', 'ドラゴン', { g: 'n', G: 'd', y: 'r', o: 'l' });
  recolor('魔導機兵', 'モンスター', 'ロボット', { l: 'd', B: 'r', d: 'n', r: 'y' });
  recolor('蜃気楼の精', 'モンスター', 'ゴースト', { w: 'y' });
  recolor('影', 'モンスター', 'ゴースト', { w: 'd' });
  recolor('ウィスプ', 'モンスター', '炎', { r: 'n', o: 'B', y: 'w' });

  /* ボス */
  add('ライバル剣士', 'ボス', { hair: 'spiky', outfit: ['cape'], items: ['sword'], c: { H: 'n', C: 'd', D: 'r', L: 'n', F: 'd', K: 'r', I: 'l', J: 'r' } });
  add('闇騎士', 'ボス', { hair: 'none', head: ['helmet'], outfit: ['armor', 'cape'], items: ['sword'], c: { X: 'd', Y: 'r', C: 'd', D: 'p', L: 'd', F: 'n', K: 'p', I: 'p' } });
  add('炎の将軍', 'ボス', { hair: 'spiky', head: ['horns'], outfit: ['armor', 'cape'], items: ['bigsword'], c: { H: 'r', Y: 'y', C: 'r', D: 'o', L: 'b', F: 'b', K: 'o', I: 'o' } });
  add('海の将軍', 'ボス', { hair: 'long', head: ['crown'], outfit: ['tail'], items: ['lance'], c: { H: 'B', Y: 'y', C: 'n', D: 'B', L: 'B', I: 'y' } });
  add('嵐の将軍', 'ボス', { hair: 'spiky', head: ['horns'], outfit: ['cape'], items: ['dagger', 'ldagger'], c: { H: 'G', Y: 'w', C: 'g', D: 'G', L: 'g', F: 'd', K: 'G' } });
  add('雷の将軍', 'ボス', { hair: 'spiky', head: ['horns'], outfit: ['robe', 'cape'], items: ['staff'], c: { H: 'y', Y: 'w', C: 'n', D: 'y', K: 'y', O: 'y' } });
  add('魔王', 'ボス', { hair: 'long', head: ['horns'], outfit: ['robe', 'cape'], items: ['staff'], c: { H: 'd', Y: 'l', S: 'v', C: 'p', D: 'r', K: 'r', O: 'r' } });
  T.push({ name: '魔王（真の姿）', cat: 'ボス', m: [
    'k.......', 'kk......', 'klk.kkkk', '.klkpppp', '..kppppp', '.kpppppp', 'kpyykppp', 'kppkkppp',
    'kppppppp', 'kppkkkkk', 'kppkwkwk', 'kppkkkkk', '.kpkwkwk', '..kkkkkk', '.krrrrrr', 'kkkkkkkk',
  ] });

  /* 属性：1 暗い色、2 基本の色、3 明るい色。テンプレートを選ぶ画面で選んだ属性の色になる */
  add('属性の剣士', '属性', { hair: 'spiky', items: ['sword'], c: { H: 'b', C: '2', D: '3', L: 'n', F: 'b', I: '3', J: '1' } });
  add('属性の魔法使い', '属性', { head: ['wizard'], outfit: ['robe'], items: ['staff'], c: { X: '2', Y: '3', C: '2', D: '3', O: '3' } });
  add('属性の魔女', '属性', { hair: 'long', head: ['wizard'], outfit: ['robe', 'cape'], items: ['staff'], c: { H: '1', X: '1', Y: '3', C: '1', D: '3', K: '2', O: '3' } });
  add('属性の騎士', '属性', { hair: 'none', head: ['helmet'], outfit: ['armor', 'cape'], items: ['sword', 'shield'], c: { X: 'l', Y: '2', C: 'l', D: '2', L: 'd', F: 'd', K: '2', I: '3', Q: '2', R: '3' } });
  add('属性の拳闘士', '属性', { hair: 'spiky', head: ['bandana'], items: ['fists'], c: { H: '1', X: '2', C: '2', D: 'n', L: '1', F: 'b', I: '3' } });
  add('属性の弓使い', '属性', { hair: 'ponytail', items: ['bow'], c: { H: '1', C: '2', D: '3', L: 'b', F: 'b' } });
  add('属性の精霊使い', '属性', { hair: 'long', outfit: ['robe'], items: ['book'], c: { H: '3', C: '2', D: '3', I: '2' } });
  add('属性の勇者', '属性', { hair: 'spiky', outfit: ['armor', 'cape'], items: ['sword', 'shield'], c: { H: 'b', C: '2', D: '3', L: 'n', F: 'b', K: '1', I: '3', Q: '2', R: '3' } });
  add('属性の女勇者', '属性', { hair: 'long', outfit: ['armor', 'cape'], items: ['sword'], c: { H: '1', C: '2', D: '3', L: 'n', F: 'b', K: '1', I: '3' } });
  add('属性の竜騎士', '属性', { hair: 'none', head: ['dragon'], outfit: ['armor'], items: ['lance'], c: { X: '2', Y: '3', C: '2', D: '3', L: 'n', F: 'd', I: '3' } });
  add('属性の妖精', '属性', { outfit: ['robe', 'wings'], c: { H: '3', C: '2', D: '3' } });
  add('属性の将軍', '属性', { hair: 'spiky', head: ['horns'], outfit: ['armor', 'cape'], items: ['bigsword'], c: { H: '2', Y: '3', C: '1', D: '2', L: 'd', F: 'd', K: '2', I: '3' } });
  recolor('属性スライム', '属性', 'スライム', { B: '2', n: '1', w: '3' });
  recolor('属性ドラゴン', '属性', 'ドラゴン', { g: '1', G: '2', o: '3' });
  recolor('属性の狼', '属性', '魔獣ウルフ', { d: '2', l: '3' });
  recolor('属性ゴーレム', '属性', 'ゴーレム', { l: '2', d: '1', y: '3' });
  recolor('属性のコウモリ', '属性', 'コウモリ', { p: '2', r: '3' });
  recolor('属性ゴースト', '属性', 'ゴースト', { w: '3' });
  recolor('属性の魂', '属性', '炎', { r: '1', o: '2', y: '3' });
  recolor('属性の剣', '属性', '剣', { w: '3', l: '2' });
  recolor('属性の杖', '属性', '杖', { B: '2', w: '3' });
  recolor('属性の魔石', '属性', '宝石', { B: '2', w: '3' });
  recolor('属性の薬', '属性', '薬びん', { r: '2', p: '1' });
  recolor('属性の盾', '属性', '盾', { B: '2', y: '3' });
  recolor('属性の指輪', '属性', '指輪', { r: '2' });
  recolor('属性の魔導書', '属性', '本', { b: '2', d: '1' });
  T.push({ name: '属性のオーブ', cat: '属性', rows: [
    '................', '.....kkkkkk.....', '...kk222222kk...', '..k2332222222k..',
    '.k233322222222k.', '.k223222222222k.', 'k22222222222221k', 'k22222222222221k',
    'k22222222222211k', 'k12222222222211k', '.k112222222211k.', '.k111122221111k.',
    '..k1111111111k..', '...kk111111kk...', '....kkkkkkkk....', '...kbbbbbbbbk...',
  ] });
  T.push({ name: '魔法弾', cat: '属性', rows: [
    '................', '................', '................', '..........kkkk..',
    '........kk3332k.', '...1..kk3333322k', '.12.2k333333322k', '122222k33333322k',
    '.12222k33333221k', '..1.2.k3332221k.', '.......k22211k..', '........kkkkk...',
    '................', '................', '................', '................',
  ] });
  T.push({ name: '魔法陣', cat: '属性', m: [
    '........', '.....222', '...22...', '..2.....', '..2...11', '.2...1..', '.2..1..3', '.2..1.33',
    '.2..1.33', '.2..1..3', '.2...1..', '..2...11', '..2.....', '...22...', '.....222', '........',
  ] });
  T.push({ name: '爆発', cat: '属性', m: [
    '........', '..k....k', '..kk..k1', '..k1kk12', 'kk.k1122', '.k112222', '..k12233', '.k122333',
    'k1122333', '.k122233', '..k12222', '.k11k122', 'kk.kk112', '..k..kk1', '.......k', '........',
  ] });
  T.push({ name: '結晶', cat: '属性', m: [
    '.......k', '......k3', '......k3', '...k..k3', '..k3k.k3', '..k32kk3', '..k32k23', '..k32k23',
    '..k32k23', '..k32k23', '.kk32k23', 'k3k32k23', 'k32k1k23', 'k21kk123', 'kkkkkkkk', '.kdddddd',
  ] });

  // 種類ボタンの並び順
  const ORDER = ['キャラ', 'ジョブ', '仲間', '町の人', '属性', 'モンスター', 'ボス', 'アイテム', '食べ物', '自然', '動物', '記号', 'タイル', '乗り物・建物'];
  T.sort((a, b) => ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat));
})();

// 「属性」のテンプレートで 1・2・3 の字に入る色（暗い・基本・明るい）。RPG の 5 属性と光・闇
window.CREDOT_ELEMENTS = [
  { name: '火', c: ['#b3141e', '#ff5a1f', '#ffd23c'] },
  { name: '水', c: ['#1d4fa8', '#3aa0ff', '#a8e4ff'] },
  { name: '風', c: ['#16784a', '#3ed67a', '#c2f7cf'] },
  { name: '土', c: ['#5c3a1e', '#a8743c', '#e3bd7a'] },
  { name: '雷', c: ['#7a5a00', '#ffcc00', '#fff6a8'] },
  { name: '光', c: ['#b89a3a', '#fff0b0', '#ffffff'] },
  { name: '闇', c: ['#24103a', '#6b2fa0', '#b98ae6'] },
];

// テンプレートの英字 1 文字と色の対応（ツールの 16 色パレットと同じ）
window.CREDOT_LEGEND = { k: '#000000', n: '#1d2b53', p: '#7e2553', g: '#008751', b: '#ab5236', d: '#5f574f', l: '#c2c3c7', w: '#fff1e8', r: '#ff004d', o: '#ffa300', y: '#ffec27', G: '#00e436', B: '#29adff', v: '#83769c', P: '#ff77a8', s: '#ffccaa' };
