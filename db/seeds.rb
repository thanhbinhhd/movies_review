# frozen_string_literal: true

# Movie data seeder
Movie.create([
  {
    name: '“それ”がいる森',
    thumbnail: 'https://eiga.k-img.com/images/movie/96728/photo/0d717a5bf97a872c/160.jpg?1658793018',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'マイ・ブロークン・マリコ',
    thumbnail: 'https://eiga.k-img.com/images/movie/96450/photo/1844613d8a424af8/160.jpg?1660021008',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2022,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'アイ・アム まきもと',
    thumbnail: 'https://eiga.k-img.com/images/movie/96689/photo/5088c7dfa2e001e4/160.jpg?1655296874',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2020,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'まだまだ序章',
    thumbnail: 'https://eiga.k-img.com/images/movie/96862/photo/889248fc11fcfbff/160.jpg?1661989480',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'もっと超越した所へ',
    thumbnail: 'https://eiga.k-img.com/images/movie/96022/photo/e5634eddb8c39a9f/320.jpg?1662974442',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: '“それ”がいる森2',
    thumbnail: 'https://eiga.k-img.com/images/movie/95577/photo/ac8d356527a454e4/320.jpg?1660264018',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'マイ・ブロークン・マリコ2',
    thumbnail: 'https://eiga.k-img.com/images/movie/96903/photo/be97daa4240fb283/320.jpg?1661386593',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2022,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'アイ・アム まきもと2',
    thumbnail: 'https://eiga.k-img.com/images/movie/95392/photo/228ede61f7070384/320.jpg?1655338620',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2020,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'まだまだ序章2',
    thumbnail: 'https://eiga.k-img.com/images/movie/96234/photo/0f7cea36022494be/320.jpg?1659601834',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
  {
    name: 'もっと超越した所へ2',
    thumbnail: 'https://eiga.k-img.com/images/movie/95719/photo/4bf1e5c0e0fe6df4/320.jpg?1653981022',
    director: "タイン　ビン",
    actor: "タイン、ビン、レ",
    year: 2021,
    description: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。"
  },
])

# User data seeder
5.times do |i|
  User.create({ name: "username_#{i + 1}", password: "123456"})
end

# Admin user
admin = User.create({ name: "admin", password: "admin"})

# Movie review data seeder
5.times do |i|
  MovieReview.create({
    content: "私は一遍どうもその講演人というのの時に思いないた。もっとも今を出入りめはもっとそんな安心たんまでを留めてくれましをは使用突き破るたでから、とてもにも起るですだですです。去就に合っですのはついほかがもしたませだ。どうしても大森さんに講義泰平どう推察が見えな個性この自信それか料簡にとしてご使用なけれですですたから、こういう当時はこれか方向シャツが迂ば、木下君のもので世の中のあれにもちろんご自覚と廻っと私間接をご横着に焼いようにとにかくごぼんやりをしますましから、多分なお希望にしよですのでいないのをしただろ。

    だからけれどもご根柢を済んものは全く迷惑としですので、その口調をもよっんがについて敵に云えて始めたな。そのうち日数の日その個人は私上が防いないかと大森さんになさなくなら、価値の場合ますに対してご関係たんないて、義務の時のいが一部かもの習慣を大体進みているて、なぜの前がさばその後に現に行かですうとありませのですから、ないますたてそれほど同事通り過ぎたくのでまします。それで自分か共通か説明を生れませて、次第上個人をなるて得で時で大誤解の今朝を思わなけれませ。今とももし構わけれどもあるですですあったて、そのうちいよいよありと誤認もそれほどなくで方だろ。またご危くがすれからはいけらしのでし、地位にも、いやしくも私かまかり出て解られるですし出せよですうとはおりて、国家はしからいるたべき。
    
    とうてい余計も大分時代っておらんて、あなたをは元来中くらいそれの大撲殺もない出しまいんたい。私はどうしても活動の方へお自覚はしてしまっですんないなて、二二の松山にまだするなけれという蹂躙ますで、けれどもどんな詫の犠牲にいうれるから、私かをこれの筋が乱暴で越していだ事ませですと関係もって奔走受けるやったらです。
    
    腹をただ大森さんをただ全く終りたらものたですまし。岩崎さんはこれから下働きをして直ったものありたん。",
    movie_id: i,
    user_id: admin.id
  })
end