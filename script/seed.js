'use strict'

const userArray = [
  {
    name: 'Darlleen Domnick',
    imageUrl: 'http://dummyimage.com/249x226.png/cc0000/ffffff',
    email: 'ddomnick0@fotki.com',
    isInstructor: true,
    isAdmin: true,
    password: '05xqDN'
  },
  {
    name: 'Chrissy Sandeford',
    imageUrl: 'http://dummyimage.com/159x217.bmp/5fa2dd/ffffff',
    email: 'csandeford1@bandcamp.com',
    isInstructor: true,
    isAdmin: false,
    password: 'XL2rVWW0g9k'
  },
  {
    name: 'Warren Waszkiewicz',
    imageUrl: 'http://dummyimage.com/110x175.bmp/cc0000/ffffff',
    email: 'wwaszkiewicz2@ameblo.jp',
    isInstructor: true,
    isAdmin: true,
    password: 'b4zL2H'
  },
  {
    name: 'Mara Dimitrov',
    imageUrl: 'http://dummyimage.com/169x201.png/dddddd/000000',
    email: 'mdimitrov3@tiny.cc',
    isInstructor: false,
    isAdmin: true,
    password: 'xxXO0Qr9WnVq'
  },
  {
    name: 'Harald Thorold',
    imageUrl: 'http://dummyimage.com/245x235.bmp/ff4444/ffffff',
    email: 'hthorold4@scientificamerican.com',
    isInstructor: true,
    isAdmin: false,
    password: 'FHXoTqLg60'
  },
  {
    name: 'Zondra Risman',
    imageUrl: 'http://dummyimage.com/128x223.jpg/ff4444/ffffff',
    email: 'zrisman5@godaddy.com',
    isInstructor: true,
    isAdmin: true,
    password: 'WhQBbFnTdgAL'
  },
  {
    name: 'Fitz Eddleston',
    imageUrl: 'http://dummyimage.com/126x119.bmp/dddddd/000000',
    email: 'feddleston6@google.cn',
    isInstructor: false,
    isAdmin: true,
    password: '7z8KZaZZCk'
  },
  {
    name: 'Meredith Kirtland',
    imageUrl: 'http://dummyimage.com/125x125.png/5fa2dd/ffffff',
    email: 'mkirtland7@nytimes.com',
    isInstructor: true,
    isAdmin: true,
    password: 'C1jwLmCZ'
  },
  {
    name: 'Brandon Seczyk',
    imageUrl: 'http://dummyimage.com/191x111.png/ff4444/ffffff',
    email: 'bseczyk8@cpanel.net',
    isInstructor: true,
    isAdmin: true,
    password: 'uNR4RZLQ'
  },
  {
    name: 'Gabrielle Oki',
    imageUrl: 'http://dummyimage.com/186x115.bmp/5fa2dd/ffffff',
    email: 'goki9@domainmarket.com',
    isInstructor: false,
    isAdmin: false,
    password: 'soPdzyQXH5yo'
  },
  {
    name: 'Drew Ballin',
    imageUrl: 'http://dummyimage.com/198x182.png/cc0000/ffffff',
    email: 'dballina@vistaprint.com',
    isInstructor: true,
    isAdmin: false,
    password: 'hnoesxg5DzPB'
  },
  {
    name: 'Brandon Stenhouse',
    imageUrl: 'http://dummyimage.com/162x181.bmp/cc0000/ffffff',
    email: 'bstenhouseb@plala.or.jp',
    isInstructor: true,
    isAdmin: false,
    password: 'DkqbHQLpMUs2'
  },
  {
    name: 'Rosy Inns',
    imageUrl: 'http://dummyimage.com/124x121.jpg/ff4444/ffffff',
    email: 'rinnsc@loc.gov',
    isInstructor: false,
    isAdmin: true,
    password: 'f2qMR6'
  },
  {
    name: 'Cornie Cudihy',
    imageUrl: 'http://dummyimage.com/144x122.bmp/ff4444/ffffff',
    email: 'ccudihyd@wisc.edu',
    isInstructor: false,
    isAdmin: false,
    password: 'LQfMQnCF'
  },
  {
    name: 'Brita Bernaciak',
    imageUrl: 'http://dummyimage.com/119x182.png/5fa2dd/ffffff',
    email: 'bbernaciake@deviantart.com',
    isInstructor: false,
    isAdmin: true,
    password: 'kZnUCbUpDpVg'
  },
  {
    name: 'Codi Ferrai',
    imageUrl: 'http://dummyimage.com/117x210.bmp/ff4444/ffffff',
    email: 'cferraif@theatlantic.com',
    isInstructor: false,
    isAdmin: true,
    password: 'FZmbBFPMREgo'
  },
  {
    name: 'Carolyne Botright',
    imageUrl: 'http://dummyimage.com/179x113.png/5fa2dd/ffffff',
    email: 'cbotrightg@upenn.edu',
    isInstructor: false,
    isAdmin: false,
    password: '5tPLgrdSENz'
  },
  {
    name: 'Cristabel Northcliffe',
    imageUrl: 'http://dummyimage.com/203x148.png/dddddd/000000',
    email: 'cnorthcliffeh@salon.com',
    isInstructor: true,
    isAdmin: false,
    password: '0DpZpQnA'
  },
  {
    name: 'Illa Keatley',
    imageUrl: 'http://dummyimage.com/156x192.png/5fa2dd/ffffff',
    email: 'ikeatleyi@engadget.com',
    isInstructor: false,
    isAdmin: true,
    password: 'bgHLxWxrG'
  },
  {
    name: 'Kelcie Acome',
    imageUrl: 'http://dummyimage.com/177x141.png/dddddd/000000',
    email: 'kacomej@utexas.edu',
    isInstructor: false,
    isAdmin: true,
    password: 'mZqzQn'
  },
  {
    name: 'Meara Bellelli',
    imageUrl: 'http://dummyimage.com/170x203.png/ff4444/ffffff',
    email: 'mbellellik@thetimes.co.uk',
    isInstructor: true,
    isAdmin: false,
    password: 'utMWZSbkiz1T'
  },
  {
    name: 'Deerdre Decourt',
    imageUrl: 'http://dummyimage.com/236x162.jpg/5fa2dd/ffffff',
    email: 'ddecourtl@samsung.com',
    isInstructor: false,
    isAdmin: false,
    password: 'cT8O2lY'
  },
  {
    name: 'Herschel Ludovici',
    imageUrl: 'http://dummyimage.com/203x203.png/ff4444/ffffff',
    email: 'hludovicim@patch.com',
    isInstructor: true,
    isAdmin: false,
    password: '70mNDqgD'
  },
  {
    name: 'Nedda Gilberthorpe',
    imageUrl: 'http://dummyimage.com/182x113.jpg/5fa2dd/ffffff',
    email: 'ngilberthorpen@seesaa.net',
    isInstructor: true,
    isAdmin: false,
    password: 'SETNtuKm2gX5'
  },
  {
    name: 'Barbra Aurelius',
    imageUrl: 'http://dummyimage.com/166x232.bmp/ff4444/ffffff',
    email: 'baureliuso@360.cn',
    isInstructor: true,
    isAdmin: true,
    password: '2bKCWixC'
  },
  {
    name: 'Fayette Howler',
    imageUrl: 'http://dummyimage.com/209x178.jpg/5fa2dd/ffffff',
    email: 'fhowlerp@oakley.com',
    isInstructor: false,
    isAdmin: false,
    password: 'ydjzdNbM'
  },
  {
    name: 'Calli Rollett',
    imageUrl: 'http://dummyimage.com/162x114.jpg/dddddd/000000',
    email: 'crollettq@hubpages.com',
    isInstructor: true,
    isAdmin: false,
    password: 'AyrBNFHh'
  },
  {
    name: 'Talyah Camps',
    imageUrl: 'http://dummyimage.com/229x237.jpg/ff4444/ffffff',
    email: 'tcampsr@xrea.com',
    isInstructor: true,
    isAdmin: false,
    password: 'LcYnsP79s6uw'
  },
  {
    name: 'Herculie Scantlebury',
    imageUrl: 'http://dummyimage.com/206x120.png/ff4444/ffffff',
    email: 'hscantleburys@opera.com',
    isInstructor: true,
    isAdmin: false,
    password: '9MqRt5FtILcA'
  },
  {
    name: 'Kit Bridell',
    imageUrl: 'http://dummyimage.com/138x194.bmp/dddddd/000000',
    email: 'kbridellt@jimdo.com',
    isInstructor: true,
    isAdmin: false,
    password: 's1S7KbaWr'
  },
  {
    name: 'Barbara Avramovic',
    imageUrl: 'http://dummyimage.com/220x107.png/5fa2dd/ffffff',
    email: 'bavramovicu@facebook.com',
    isInstructor: true,
    isAdmin: false,
    password: 'MwuqXrDbXvKl'
  },
  {
    name: 'Maison Rontree',
    imageUrl: 'http://dummyimage.com/121x236.bmp/ff4444/ffffff',
    email: 'mrontreev@nifty.com',
    isInstructor: false,
    isAdmin: true,
    password: '7YPdc4ndJY'
  },
  {
    name: 'Carlie Toland',
    imageUrl: 'http://dummyimage.com/184x133.png/5fa2dd/ffffff',
    email: 'ctolandw@sakura.ne.jp',
    isInstructor: true,
    isAdmin: false,
    password: '5U5dVnQ'
  },
  {
    name: 'Marilyn Caudell',
    imageUrl: 'http://dummyimage.com/135x224.jpg/5fa2dd/ffffff',
    email: 'mcaudellx@skype.com',
    isInstructor: false,
    isAdmin: true,
    password: 'ULipgd06j'
  },
  {
    name: 'Monro Camili',
    imageUrl: 'http://dummyimage.com/129x234.bmp/ff4444/ffffff',
    email: 'mcamiliy@state.gov',
    isInstructor: true,
    isAdmin: false,
    password: 'XGWOapECN'
  },
  {
    name: 'Anthe Grube',
    imageUrl: 'http://dummyimage.com/159x105.png/ff4444/ffffff',
    email: 'agrubez@livejournal.com',
    isInstructor: true,
    isAdmin: true,
    password: 'gpBYBS'
  },
  {
    name: 'Jerrine Mordy',
    imageUrl: 'http://dummyimage.com/134x225.jpg/5fa2dd/ffffff',
    email: 'jmordy10@dailymail.co.uk',
    isInstructor: false,
    isAdmin: false,
    password: '26IBRHxzsh'
  },
  {
    name: 'Kahaleel Chaffe',
    imageUrl: 'http://dummyimage.com/226x239.bmp/ff4444/ffffff',
    email: 'kchaffe11@google.cn',
    isInstructor: false,
    isAdmin: false,
    password: 'l2ZCYZLiFF'
  },
  {
    name: 'Marcille Bosanko',
    imageUrl: 'http://dummyimage.com/126x238.png/5fa2dd/ffffff',
    email: 'mbosanko12@ted.com',
    isInstructor: false,
    isAdmin: false,
    password: '2sQ6pMdfc4'
  },
  {
    name: 'Fielding Ramelot',
    imageUrl: 'http://dummyimage.com/234x239.png/cc0000/ffffff',
    email: 'framelot13@comcast.net',
    isInstructor: true,
    isAdmin: true,
    password: 'WJmXriZqOKJq'
  },
  {
    name: 'Rodrigo Cooper',
    imageUrl: 'http://dummyimage.com/201x242.bmp/dddddd/000000',
    email: 'rcooper14@github.io',
    isInstructor: true,
    isAdmin: false,
    password: '2jr7iJv'
  },
  {
    name: 'Sonny Hehl',
    imageUrl: 'http://dummyimage.com/174x141.jpg/5fa2dd/ffffff',
    email: 'shehl15@abc.net.au',
    isInstructor: false,
    isAdmin: true,
    password: '4TqozZJcp6n'
  },
  {
    name: 'Vevay Porch',
    imageUrl: 'http://dummyimage.com/115x198.bmp/ff4444/ffffff',
    email: 'vporch16@over-blog.com',
    isInstructor: false,
    isAdmin: false,
    password: 'X3x4KtL9m'
  },
  {
    name: 'Myrwyn Zanolli',
    imageUrl: 'http://dummyimage.com/153x169.bmp/dddddd/000000',
    email: 'mzanolli17@diigo.com',
    isInstructor: false,
    isAdmin: true,
    password: '5Tj1wE41OMlX'
  },
  {
    name: 'Tiertza Ayre',
    imageUrl: 'http://dummyimage.com/207x142.png/cc0000/ffffff',
    email: 'tayre18@so-net.ne.jp',
    isInstructor: true,
    isAdmin: false,
    password: 'G1DXuBF'
  },
  {
    name: 'Bartie Catcherside',
    imageUrl: 'http://dummyimage.com/161x126.jpg/dddddd/000000',
    email: 'bcatcherside19@github.com',
    isInstructor: false,
    isAdmin: true,
    password: '4P0hzg3Ut'
  },
  {
    name: 'Berke Alchin',
    imageUrl: 'http://dummyimage.com/125x177.jpg/dddddd/000000',
    email: 'balchin1a@earthlink.net',
    isInstructor: true,
    isAdmin: false,
    password: 'dYybrbHQ6fIu'
  },
  {
    name: 'Anthiathia Deedes',
    imageUrl: 'http://dummyimage.com/165x159.png/5fa2dd/ffffff',
    email: 'adeedes1b@google.de',
    isInstructor: false,
    isAdmin: true,
    password: 'iJAYMavTVP3w'
  },
  {
    name: 'Alfie Muggach',
    imageUrl: 'http://dummyimage.com/239x215.jpg/dddddd/000000',
    email: 'amuggach1c@accuweather.com',
    isInstructor: false,
    isAdmin: true,
    password: 'itx4otpF'
  },
  {
    name: 'Sebastien Di Angelo',
    imageUrl: 'http://dummyimage.com/114x240.jpg/dddddd/000000',
    email: 'sdi1d@t.co',
    isInstructor: true,
    isAdmin: false,
    password: 'LBwBqyyDQ2d'
  },
  {
    name: 'Hercules Tombs',
    imageUrl: 'http://dummyimage.com/170x236.png/dddddd/000000',
    email: 'htombs1e@npr.org',
    isInstructor: true,
    isAdmin: false,
    password: 'Fqb3NvgqbAYw'
  },
  {
    name: 'Annaliese Jervis',
    imageUrl: 'http://dummyimage.com/237x119.jpg/dddddd/000000',
    email: 'ajervis1f@g.co',
    isInstructor: false,
    isAdmin: false,
    password: 'PNHz8s'
  },
  {
    name: 'Maurene Coggell',
    imageUrl: 'http://dummyimage.com/110x132.jpg/ff4444/ffffff',
    email: 'mcoggell1g@joomla.org',
    isInstructor: true,
    isAdmin: true,
    password: 'NAa1MMmH'
  },
  {
    name: 'Maressa Bumford',
    imageUrl: 'http://dummyimage.com/220x224.jpg/dddddd/000000',
    email: 'mbumford1h@home.pl',
    isInstructor: true,
    isAdmin: true,
    password: 'b5S8TxWQq3k'
  },
  {
    name: 'Jessy Belsham',
    imageUrl: 'http://dummyimage.com/134x222.bmp/5fa2dd/ffffff',
    email: 'jbelsham1i@apple.com',
    isInstructor: true,
    isAdmin: false,
    password: 'C4Clil'
  },
  {
    name: 'Alwin Itzchaky',
    imageUrl: 'http://dummyimage.com/185x208.jpg/dddddd/000000',
    email: 'aitzchaky1j@google.ca',
    isInstructor: true,
    isAdmin: false,
    password: '4TKaN7L9xa'
  },
  {
    name: 'Yvon Kenyam',
    imageUrl: 'http://dummyimage.com/239x196.bmp/ff4444/ffffff',
    email: 'ykenyam1k@sun.com',
    isInstructor: false,
    isAdmin: true,
    password: 'ETw63H6'
  },
  {
    name: 'Rodolph Chapleo',
    imageUrl: 'http://dummyimage.com/177x164.png/5fa2dd/ffffff',
    email: 'rchapleo1l@dagondesign.com',
    isInstructor: false,
    isAdmin: true,
    password: 'HUwR5W'
  },
  {
    name: 'Lise Locksley',
    imageUrl: 'http://dummyimage.com/160x120.bmp/dddddd/000000',
    email: 'llocksley1m@wordpress.com',
    isInstructor: false,
    isAdmin: false,
    password: 'F4gfXth'
  },
  {
    name: 'Casandra Patching',
    imageUrl: 'http://dummyimage.com/192x147.jpg/ff4444/ffffff',
    email: 'cpatching1n@amazonaws.com',
    isInstructor: false,
    isAdmin: false,
    password: 'l1CfhtHPmAhH'
  },
  {
    name: 'Corbie Hare',
    imageUrl: 'http://dummyimage.com/155x155.png/dddddd/000000',
    email: 'chare1o@virginia.edu',
    isInstructor: false,
    isAdmin: false,
    password: 'u3TdmFJV'
  },
  {
    name: 'Almira Rubinsohn',
    imageUrl: 'http://dummyimage.com/113x163.bmp/ff4444/ffffff',
    email: 'arubinsohn1p@topsy.com',
    isInstructor: true,
    isAdmin: true,
    password: '4lcPPOaS'
  },
  {
    name: 'Romain Slade',
    imageUrl: 'http://dummyimage.com/115x224.bmp/cc0000/ffffff',
    email: 'rslade1q@aol.com',
    isInstructor: false,
    isAdmin: true,
    password: 'qxRHydcNp'
  },
  {
    name: 'Brianna Washbrook',
    imageUrl: 'http://dummyimage.com/207x169.bmp/cc0000/ffffff',
    email: 'bwashbrook1r@loc.gov',
    isInstructor: true,
    isAdmin: false,
    password: 'a9Bu3Wr'
  },
  {
    name: 'Whitby Tillerton',
    imageUrl: 'http://dummyimage.com/191x206.bmp/ff4444/ffffff',
    email: 'wtillerton1s@unesco.org',
    isInstructor: false,
    isAdmin: false,
    password: 'mAnvLtxLYhjA'
  },
  {
    name: 'Wynne Sawl',
    imageUrl: 'http://dummyimage.com/159x215.bmp/5fa2dd/ffffff',
    email: 'wsawl1t@sourceforge.net',
    isInstructor: true,
    isAdmin: false,
    password: 'NG9sKpvXN'
  },
  {
    name: 'Clyde Shelmardine',
    imageUrl: 'http://dummyimage.com/190x227.bmp/dddddd/000000',
    email: 'cshelmardine1u@sfgate.com',
    isInstructor: true,
    isAdmin: true,
    password: 'TITUdKSo0r'
  },
  {
    name: 'Artie Elcocks',
    imageUrl: 'http://dummyimage.com/138x165.jpg/cc0000/ffffff',
    email: 'aelcocks1v@blogger.com',
    isInstructor: false,
    isAdmin: true,
    password: 'PxmkeHoJpa'
  },
  {
    name: 'Harland Cicccitti',
    imageUrl: 'http://dummyimage.com/175x187.jpg/dddddd/000000',
    email: 'hcicccitti1w@google.com',
    isInstructor: true,
    isAdmin: true,
    password: 'rbk3B4zajbi1'
  },
  {
    name: 'Fredrika Moulton',
    imageUrl: 'http://dummyimage.com/106x142.bmp/dddddd/000000',
    email: 'fmoulton1x@fda.gov',
    isInstructor: true,
    isAdmin: true,
    password: 'yklsoZloA20C'
  },
  {
    name: 'Fanchon Faughey',
    imageUrl: 'http://dummyimage.com/112x227.bmp/5fa2dd/ffffff',
    email: 'ffaughey1y@shop-pro.jp',
    isInstructor: true,
    isAdmin: true,
    password: '6C7AUaje'
  },
  {
    name: 'Karlis Comfort',
    imageUrl: 'http://dummyimage.com/179x241.png/dddddd/000000',
    email: 'kcomfort1z@freewebs.com',
    isInstructor: true,
    isAdmin: true,
    password: '1uV6FFRkc1'
  },
  {
    name: 'Zacharias Veitch',
    imageUrl: 'http://dummyimage.com/111x196.jpg/cc0000/ffffff',
    email: 'zveitch20@phoca.cz',
    isInstructor: true,
    isAdmin: false,
    password: 'UPQgY79'
  },
  {
    name: 'Korrie Tappor',
    imageUrl: 'http://dummyimage.com/133x144.jpg/dddddd/000000',
    email: 'ktappor21@elegantthemes.com',
    isInstructor: false,
    isAdmin: false,
    password: 'REhI9P1'
  },
  {
    name: 'Bree De Bellis',
    imageUrl: 'http://dummyimage.com/209x168.jpg/dddddd/000000',
    email: 'bde22@sina.com.cn',
    isInstructor: true,
    isAdmin: false,
    password: 'mSW6uSQmd'
  },
  {
    name: 'Regine Brighouse',
    imageUrl: 'http://dummyimage.com/215x119.png/5fa2dd/ffffff',
    email: 'rbrighouse23@comsenz.com',
    isInstructor: false,
    isAdmin: false,
    password: 'bBXLa1z'
  },
  {
    name: 'Heall Barbary',
    imageUrl: 'http://dummyimage.com/179x164.png/5fa2dd/ffffff',
    email: 'hbarbary24@gmpg.org',
    isInstructor: false,
    isAdmin: true,
    password: 'IOjw76xn'
  },
  {
    name: 'Jean Tebbet',
    imageUrl: 'http://dummyimage.com/188x237.jpg/5fa2dd/ffffff',
    email: 'jtebbet25@cisco.com',
    isInstructor: true,
    isAdmin: false,
    password: 'xuBGaMd27'
  },
  {
    name: 'Siward Dalgardno',
    imageUrl: 'http://dummyimage.com/166x228.bmp/dddddd/000000',
    email: 'sdalgardno26@nih.gov',
    isInstructor: false,
    isAdmin: false,
    password: '2Lkx4i'
  },
  {
    name: 'Clint Maseres',
    imageUrl: 'http://dummyimage.com/152x108.bmp/cc0000/ffffff',
    email: 'cmaseres27@shutterfly.com',
    isInstructor: false,
    isAdmin: true,
    password: 'E50zzQ3nP37'
  },
  {
    name: 'Thom Book',
    imageUrl: 'http://dummyimage.com/197x248.jpg/dddddd/000000',
    email: 'tbook28@shinystat.com',
    isInstructor: false,
    isAdmin: true,
    password: 'FmsVZhS7to8'
  },
  {
    name: 'Cordie Snadden',
    imageUrl: 'http://dummyimage.com/191x245.bmp/5fa2dd/ffffff',
    email: 'csnadden29@fotki.com',
    isInstructor: true,
    isAdmin: true,
    password: '8QlhQWV'
  },
  {
    name: 'Artair Badland',
    imageUrl: 'http://dummyimage.com/103x133.jpg/dddddd/000000',
    email: 'abadland2a@slate.com',
    isInstructor: false,
    isAdmin: true,
    password: 'fgcNpTa'
  },
  {
    name: 'Teodor Fippe',
    imageUrl: 'http://dummyimage.com/112x200.bmp/cc0000/ffffff',
    email: 'tfippe2b@123-reg.co.uk',
    isInstructor: false,
    isAdmin: true,
    password: 'DJMnAvHoh'
  },
  {
    name: 'Herminia Purselow',
    imageUrl: 'http://dummyimage.com/107x184.bmp/ff4444/ffffff',
    email: 'hpurselow2c@vimeo.com',
    isInstructor: false,
    isAdmin: true,
    password: 'xMCx0pt'
  },
  {
    name: 'Margalit Sellers',
    imageUrl: 'http://dummyimage.com/159x137.jpg/cc0000/ffffff',
    email: 'msellers2d@businessinsider.com',
    isInstructor: false,
    isAdmin: true,
    password: 'UpIKAGkOQ'
  },
  {
    name: 'Orin Feitosa',
    imageUrl: 'http://dummyimage.com/216x212.jpg/5fa2dd/ffffff',
    email: 'ofeitosa2e@issuu.com',
    isInstructor: false,
    isAdmin: false,
    password: 'gwyL58jg'
  },
  {
    name: 'Ros Petracchi',
    imageUrl: 'http://dummyimage.com/241x195.bmp/cc0000/ffffff',
    email: 'rpetracchi2f@blogger.com',
    isInstructor: true,
    isAdmin: true,
    password: 'OJSmzu'
  },
  {
    name: 'Haroun Milner',
    imageUrl: 'http://dummyimage.com/233x231.png/cc0000/ffffff',
    email: 'hmilner2g@ted.com',
    isInstructor: false,
    isAdmin: true,
    password: 'znyEEDG'
  },
  {
    name: 'Germaine Draper',
    imageUrl: 'http://dummyimage.com/205x230.jpg/dddddd/000000',
    email: 'gdraper2h@biglobe.ne.jp',
    isInstructor: false,
    isAdmin: false,
    password: 'dkk2qjD'
  },
  {
    name: 'Thane Swynley',
    imageUrl: 'http://dummyimage.com/245x112.png/dddddd/000000',
    email: 'tswynley2i@diigo.com',
    isInstructor: true,
    isAdmin: true,
    password: 'xMEeYtmC'
  },
  {
    name: 'Laurence Slyman',
    imageUrl: 'http://dummyimage.com/209x185.jpg/5fa2dd/ffffff',
    email: 'lslyman2j@comcast.net',
    isInstructor: true,
    isAdmin: true,
    password: 'VJOZQ2zHqf'
  },
  {
    name: 'Brander Spurryer',
    imageUrl: 'http://dummyimage.com/149x163.bmp/ff4444/ffffff',
    email: 'bspurryer2k@guardian.co.uk',
    isInstructor: true,
    isAdmin: true,
    password: 'jJcZpIs'
  },
  {
    name: 'Delphine Sahlstrom',
    imageUrl: 'http://dummyimage.com/195x231.bmp/cc0000/ffffff',
    email: 'dsahlstrom2l@utexas.edu',
    isInstructor: false,
    isAdmin: false,
    password: 'lLg6uB6'
  },
  {
    name: 'Bree Feedome',
    imageUrl: 'http://dummyimage.com/123x234.jpg/5fa2dd/ffffff',
    email: 'bfeedome2m@google.ca',
    isInstructor: false,
    isAdmin: false,
    password: 'yxtPnycUJ'
  },
  {
    name: 'Isidore Arnoll',
    imageUrl: 'http://dummyimage.com/196x244.bmp/ff4444/ffffff',
    email: 'iarnoll2n@godaddy.com',
    isInstructor: true,
    isAdmin: false,
    password: 'klNLURcPKdj'
  },
  {
    name: 'Delmar Foro',
    imageUrl: 'http://dummyimage.com/162x195.bmp/dddddd/000000',
    email: 'dforo2o@privacy.gov.au',
    isInstructor: false,
    isAdmin: false,
    password: 'TkeJY0'
  },
  {
    name: 'Vivia Paulsen',
    imageUrl: 'http://dummyimage.com/214x174.bmp/dddddd/000000',
    email: 'vpaulsen2p@angelfire.com',
    isInstructor: true,
    isAdmin: true,
    password: 'IbJJiIxZQz'
  },
  {
    name: 'Daryn Charon',
    imageUrl: 'http://dummyimage.com/246x165.bmp/5fa2dd/ffffff',
    email: 'dcharon2q@cisco.com',
    isInstructor: false,
    isAdmin: false,
    password: 'BXo7EMZv'
  },
  {
    name: 'Marian Avrahm',
    imageUrl: 'http://dummyimage.com/128x105.bmp/cc0000/ffffff',
    email: 'mavrahm2r@gov.uk',
    isInstructor: true,
    isAdmin: true,
    password: 'VxPqxIf'
  }
]

const hobbies = [
  {
    name: 'HR Metrics',
    description:
      'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet',
    price: 3247,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 30
  },
  {
    name: 'Dog Training',
    description:
      'vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    price: 6075,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Miscellaneous',
    openSeats: 15
  },
  {
    name: 'IKB',
    description:
      'rutrum nulla nunc purus phasellus in felis donec semper sapien a libero',
    price: 7602,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 28
  },
  {
    name: 'Research',
    description:
      'sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum',
    price: 1640,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Technology',
    openSeats: 9
  },
  {
    name: 'Eye Treatments',
    description:
      'amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum',
    price: 2261,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Finance',
    openSeats: 25
  },
  {
    name: 'VFX Supervision',
    description:
      'in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus',
    price: 3201,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Basic Industries',
    openSeats: 29
  },
  {
    name: 'Emergency Services',
    description:
      'sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis',
    price: 5727,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Basic Industries',
    openSeats: 12
  },
  {
    name: 'Drafting Agreements',
    description:
      'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
    price: 7242,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 29
  },
  {
    name: 'Food &amp; Beverage',
    description:
      'sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo',
    price: 4110,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Capital Goods',
    openSeats: 13
  },
  {
    name: 'Internal Audit',
    description:
      'pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst',
    price: 2866,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Miscellaneous',
    openSeats: 13
  },
  {
    name: 'Full-life Cycle Recruiting',
    description:
      'justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget',
    price: 9806,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 27
  },
  {
    name: 'Farms',
    description:
      'convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas',
    price: 2864,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 29
  },
  {
    name: 'Numerical Simulation',
    description:
      'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non',
    price: 2773,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 7
  },
  {
    name: 'Lifestyle',
    description:
      'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie',
    price: 3680,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 13
  },
  {
    name: 'GPIB',
    description:
      'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    price: 95,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 14
  },
  {
    name: 'Group Work',
    description: 'mi integer ac neque duis bibendum morbi non quam nec',
    price: 5685,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Miscellaneous',
    openSeats: 14
  },
  {
    name: 'BPWin',
    description:
      'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida',
    price: 1959,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'n/a',
    openSeats: 8
  },
  {
    name: 'PTP',
    description:
      'sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede',
    price: 60,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 17
  },
  {
    name: 'Cisco UCS',
    description:
      'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus',
    price: 1071,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'n/a',
    openSeats: 26
  },
  {
    name: 'NGP',
    description:
      'tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in',
    price: 5400,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Technology',
    openSeats: 14
  },
  {
    name: 'International Business',
    description:
      'id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac',
    price: 8756,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Transportation',
    openSeats: 5
  },
  {
    name: 'Oracle VM',
    description:
      'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
    price: 9136,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Energy',
    openSeats: 17
  },
  {
    name: 'PowerPoint',
    description:
      'amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed',
    price: 2506,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 9
  },
  {
    name: 'DG Sets',
    description:
      'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna',
    price: 2748,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 5
  },
  {
    name: 'Slide Shows',
    description:
      'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus',
    price: 8710,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Energy',
    openSeats: 22
  },
  {
    name: 'Corporate Law',
    description:
      'etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
    price: 4260,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Public Utilities',
    openSeats: 10
  },
  {
    name: 'Kindergarten',
    description:
      'suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
    price: 3706,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Health Care',
    openSeats: 10
  },
  {
    name: 'FW',
    description:
      'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
    price: 5043,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 30
  },
  {
    name: 'HTC',
    description:
      'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin',
    price: 6462,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 19
  },
  {
    name: 'Canon DSLR',
    description:
      'pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
    price: 3287,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 17
  },
  {
    name: 'Virtual PC',
    description:
      'ligula vehicula consequat morbi a ipsum integer a nibh in quis',
    price: 5360,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 29
  },
  {
    name: 'Church Events',
    description:
      'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    price: 6005,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 12
  },
  {
    name: 'FMA',
    description:
      'nunc proin at turpis a pede posuere nonummy integer non velit donec diam',
    price: 2044,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 16
  },
  {
    name: 'ISO 27001',
    description:
      'nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et',
    price: 7620,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 19
  },
  {
    name: 'UK Employment Law',
    description:
      'odio consequat varius integer ac leo pellentesque ultrices mattis odio',
    price: 6581,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 5
  },
  {
    name: 'QuickBooks',
    description:
      'arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam',
    price: 3927,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 12
  },
  {
    name: 'Vector Illustration',
    description:
      'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse',
    price: 1452,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 12
  },
  {
    name: 'OGC',
    description:
      'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
    price: 6280,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Basic Industries',
    openSeats: 13
  },
  {
    name: 'Quantitative Finance',
    description:
      'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
    price: 2002,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 13
  },
  {
    name: 'Generators',
    description:
      'sapien quis libero nullam sit amet turpis elementum ligula vehicula',
    price: 2929,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 16
  },
  {
    name: 'Motivational Interviewing',
    description:
      'enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
    price: 7793,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 11
  },
  {
    name: 'EPiServer',
    description:
      'dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac',
    price: 5759,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'n/a',
    openSeats: 18
  },
  {
    name: 'PPPoE',
    description:
      'lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu',
    price: 1828,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Health Care',
    openSeats: 30
  },
  {
    name: 'Drama',
    description:
      'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum',
    price: 4189,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 5
  },
  {
    name: 'RCRA',
    description:
      'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum',
    price: 4980,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 10
  },
  {
    name: 'Federal Law Enforcement',
    description:
      'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
    price: 2065,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 15
  },
  {
    name: 'HR Solutions',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae',
    price: 3856,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 20
  },
  {
    name: 'Yacht Deliveries',
    description:
      'enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
    price: 4628,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 17
  },
  {
    name: 'Hyperion Reports',
    description:
      'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta',
    price: 2880,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Technology',
    openSeats: 5
  },
  {
    name: 'Xilinx',
    description:
      'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque',
    price: 6282,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 28
  },
  {
    name: 'TI DSPs',
    description:
      'nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
    price: 6092,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Miscellaneous',
    openSeats: 18
  },
  {
    name: 'Eye Treatments',
    description:
      'non velit donec diam neque vestibulum eget vulputate ut ultrices',
    price: 5683,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'n/a',
    openSeats: 16
  },
  {
    name: 'Guided Reading',
    description: 'ipsum aliquam non mauris morbi non lectus aliquam sit amet',
    price: 3688,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Capital Goods',
    openSeats: 21
  },
  {
    name: 'QlikView',
    description:
      'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam',
    price: 6326,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 14
  },
  {
    name: 'NMLS',
    description:
      'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed',
    price: 8730,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Health Care',
    openSeats: 29
  },
  {
    name: 'Zope',
    description:
      'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse',
    price: 9908,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Consumer Durables',
    openSeats: 21
  },
  {
    name: 'UL',
    description:
      'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
    price: 2211,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 28
  },
  {
    name: 'Strategy',
    description:
      'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante',
    price: 6428,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 18
  },
  {
    name: 'Mac OS X Server',
    description:
      'diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    price: 1834,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 14
  },
  {
    name: 'Security Audits',
    description:
      'hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla',
    price: 9900,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Health Care',
    openSeats: 20
  },
  {
    name: 'FpML',
    description:
      'sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in',
    price: 1087,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 21
  },
  {
    name: 'Global Strategy',
    description:
      'ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id',
    price: 2950,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'n/a',
    openSeats: 7
  },
  {
    name: 'ATG CSC',
    description:
      'mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula',
    price: 9313,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 23
  },
  {
    name: 'Xoops',
    description:
      'iaculis diam erat fermentum justo nec condimentum neque sapien placerat',
    price: 9383,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Health Care',
    openSeats: 13
  },
  {
    name: 'MS Integration Services',
    description:
      'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus',
    price: 2034,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Public Utilities',
    openSeats: 19
  },
  {
    name: 'BTEQ',
    description:
      'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
    price: 3040,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Transportation',
    openSeats: 24
  },
  {
    name: 'Observational Astronomy',
    description:
      'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing',
    price: 2655,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 20
  },
  {
    name: 'Reverse Logistics',
    description:
      'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue',
    price: 5100,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 11
  },
  {
    name: 'Human Capital',
    description:
      'ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat',
    price: 9609,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 23
  },
  {
    name: 'iPhone Application Development',
    description:
      'eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
    price: 1877,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 13
  },
  {
    name: 'PPAPs',
    description: 'ac nulla sed vel enim sit amet nunc viverra dapibus',
    price: 5518,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 14
  },
  {
    name: 'MMIC',
    description:
      'aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra',
    price: 6554,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 10
  },
  {
    name: 'ICT Consultancy',
    description:
      'elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel',
    price: 3152,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Miscellaneous',
    openSeats: 8
  },
  {
    name: 'Snowmobile',
    description:
      'turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at',
    price: 2793,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 16
  },
  {
    name: 'Smoking Cessation',
    description:
      'lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus',
    price: 1535,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 6
  },
  {
    name: 'Ultimate Frisbee',
    description:
      'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
    price: 4692,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Health Care',
    openSeats: 30
  },
  {
    name: 'International Logistics',
    description:
      'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque',
    price: 6507,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 24
  },
  {
    name: 'Food Safety',
    description:
      'id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
    price: 9064,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 30
  },
  {
    name: 'Year-end Close',
    description:
      'tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique',
    price: 2885,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Technology',
    openSeats: 8
  },
  {
    name: 'HSE Management Systems',
    description:
      'metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna',
    price: 5772,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'n/a',
    openSeats: 14
  },
  {
    name: 'LLC',
    description:
      'molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
    price: 7242,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 13
  },
  {
    name: 'JUNOS',
    description:
      'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non',
    price: 6368,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Consumer Durables',
    openSeats: 22
  },
  {
    name: 'Ruby on Rails',
    description:
      'duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit',
    price: 1253,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Miscellaneous',
    openSeats: 30
  },
  {
    name: 'QI',
    description:
      'donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id',
    price: 1180,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 9
  },
  {
    name: 'JRuby',
    description:
      'nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla',
    price: 4620,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Energy',
    openSeats: 12
  },
  {
    name: 'UHV',
    description:
      'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla',
    price: 6080,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Capital Goods',
    openSeats: 19
  },
  {
    name: 'Sports Management',
    description:
      'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio',
    price: 1571,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Health Care',
    openSeats: 17
  },
  {
    name: 'Analytical Chemistry',
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan',
    price: 57,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 18
  },
  {
    name: 'Social Media Outreach',
    description:
      'parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id',
    price: 6940,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Technology',
    openSeats: 17
  },
  {
    name: 'Korean Culture',
    description:
      'nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
    price: 9949,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 17
  },
  {
    name: 'Nickel',
    description:
      'nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus',
    price: 4251,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Energy',
    openSeats: 15
  },
  {
    name: 'uClinux',
    description:
      'diam in magna bibendum imperdiet nullam orci pede venenatis non',
    price: 1976,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 22
  },
  {
    name: 'Document Management',
    description:
      'erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
    price: 3332,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Basic Industries',
    openSeats: 13
  },
  {
    name: 'ProSystem fx Engagement',
    description:
      'posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel',
    price: 7010,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 19
  },
  {
    name: 'HMO',
    description:
      'ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem',
    price: 4910,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Capital Goods',
    openSeats: 15
  },
  {
    name: 'HSRP',
    description: 'erat curabitur gravida nisi at nibh in hac habitasse platea',
    price: 8912,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 24
  },
  {
    name: 'Ffmpeg',
    description:
      'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
    price: 8787,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Capital Goods',
    openSeats: 8
  },
  {
    name: 'Published Author',
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
    price: 3560,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Capital Goods',
    openSeats: 29
  },
  {
    name: 'NYSE',
    description:
      'eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus',
    price: 2792,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 22
  },
  {
    name: 'RNA',
    description:
      'ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et',
    price: 3356,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Consumer Durables',
    openSeats: 10
  },
  {
    name: 'PDM',
    description:
      'porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in',
    price: 3880,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Health Care',
    openSeats: 28
  },
  {
    name: 'General Aviation',
    description:
      'morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus',
    price: 2113,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Capital Goods',
    openSeats: 29
  },
  {
    name: 'EEOC',
    description:
      'consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum',
    price: 7597,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Miscellaneous',
    openSeats: 16
  },
  {
    name: 'NSE',
    description:
      'euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at',
    price: 5403,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 7
  },
  {
    name: 'Aqualogic',
    description:
      'consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id',
    price: 6120,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Consumer Services',
    openSeats: 11
  },
  {
    name: 'Project Portfolio Management',
    description:
      'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus',
    price: 5304,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 9
  },
  {
    name: 'Rolling Stock',
    description:
      'luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et',
    price: 2180,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 16
  },
  {
    name: 'Korean',
    description:
      'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna',
    price: 4377,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Health Care',
    openSeats: 30
  },
  {
    name: 'Gas Turbines',
    description:
      'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
    price: 8876,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 24
  },
  {
    name: 'CWSP',
    description:
      'quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi',
    price: 5239,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Public Utilities',
    openSeats: 7
  },
  {
    name: 'GCIA',
    description:
      'justo morbi ut odio cras mi pede malesuada in imperdiet et commodo',
    price: 8467,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Transportation',
    openSeats: 29
  },
  {
    name: 'OEM Management',
    description:
      'cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet',
    price: 7480,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Energy',
    openSeats: 28
  },
  {
    name: 'HSI',
    description:
      'vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
    price: 4190,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 22
  },
  {
    name: 'ICH Guidelines',
    description:
      'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo',
    price: 2448,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 17
  },
  {
    name: 'Geomatics',
    description:
      'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu',
    price: 9036,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Miscellaneous',
    openSeats: 19
  },
  {
    name: 'FFA',
    description:
      'dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at',
    price: 5985,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 24
  },
  {
    name: 'Petrochemical',
    description:
      'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien',
    price: 8534,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 26
  },
  {
    name: 'uDig',
    description:
      'facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit',
    price: 5741,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 11
  },
  {
    name: 'DH+',
    description:
      'quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum',
    price: 1331,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 19
  },
  {
    name: 'SWIFT Payments',
    description:
      'id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla',
    price: 3724,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Public Utilities',
    openSeats: 11
  },
  {
    name: 'Zillow',
    description:
      'sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui',
    price: 5870,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Public Utilities',
    openSeats: 27
  },
  {
    name: 'Ultrafiltration',
    description: 'eu massa donec dapibus duis at velit eu est congue elementum',
    price: 2986,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 11
  },
  {
    name: 'Architectural Drawings',
    description:
      'nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
    price: 8090,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'n/a',
    openSeats: 11
  },
  {
    name: 'MVNE',
    description:
      'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    price: 3995,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 16
  },
  {
    name: 'Business Journalism',
    description:
      'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
    price: 2841,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Health Care',
    openSeats: 23
  },
  {
    name: 'Hydropower',
    description:
      'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy',
    price: 3726,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 7
  },
  {
    name: 'FFT',
    description:
      'orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna',
    price: 7216,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Consumer Services',
    openSeats: 10
  },
  {
    name: 'Sound FX Editing',
    description:
      'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque',
    price: 7122,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Transportation',
    openSeats: 28
  },
  {
    name: 'Awesomeness',
    description:
      'ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
    price: 7914,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 9
  },
  {
    name: 'Bonds',
    description:
      'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut',
    price: 9387,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 19
  },
  {
    name: 'UltraTax',
    description:
      'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur',
    price: 5099,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Energy',
    openSeats: 29
  },
  {
    name: 'Computer System Validation',
    description:
      'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo',
    price: 6737,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 7
  },
  {
    name: 'HSP',
    description:
      'molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
    price: 9318,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 15
  },
  {
    name: 'OAuth',
    description:
      'nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci',
    price: 5189,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 13
  },
  {
    name: 'GPS',
    description:
      'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar',
    price: 6540,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 5
  },
  {
    name: 'Quantitative Research',
    description:
      'porttitor lorem id ligula suspendisse ornare consequat lectus in est',
    price: 7054,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 27
  },
  {
    name: 'MYOB',
    description:
      'sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes',
    price: 5500,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Technology',
    openSeats: 16
  },
  {
    name: 'TMJ Dysfunction',
    description:
      'luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    price: 7,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Miscellaneous',
    openSeats: 10
  },
  {
    name: 'JScript',
    description:
      'pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean',
    price: 9811,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 11
  },
  {
    name: 'Ocean Freight',
    description:
      'et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
    price: 1010,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 29
  },
  {
    name: 'Joint Ventures',
    description:
      'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus',
    price: 4597,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Consumer Non-Durables',
    openSeats: 16
  },
  {
    name: 'AMI',
    description:
      'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue',
    price: 5074,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 8
  },
  {
    name: 'Psychopharmacology',
    description:
      'quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero',
    price: 6481,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Health Care',
    openSeats: 26
  },
  {
    name: 'Signal Processing',
    description:
      'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus',
    price: 2481,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Health Care',
    openSeats: 20
  },
  {
    name: 'Zynx',
    description:
      'commodo placerat praesent blandit nam nulla integer pede justo lacinia eget',
    price: 7810,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 25
  },
  {
    name: 'RVM',
    description:
      'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
    price: 9544,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Miscellaneous',
    openSeats: 18
  },
  {
    name: 'TL1',
    description:
      'eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus',
    price: 6260,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Capital Goods',
    openSeats: 27
  },
  {
    name: 'Design for Manufacturing',
    description:
      'montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et',
    price: 6849,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 20
  },
  {
    name: 'Yield Management',
    description:
      'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus',
    price: 5003,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 7
  },
  {
    name: 'Yachting',
    description:
      'nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
    price: 2273,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 12
  },
  {
    name: 'Aquatics',
    description:
      'venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
    price: 6734,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 12
  },
  {
    name: 'Httpd',
    description:
      'duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti',
    price: 1044,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Energy',
    openSeats: 29
  },
  {
    name: 'Distribution Center Operations',
    description: 'non mauris morbi non lectus aliquam sit amet diam in',
    price: 3596,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Basic Industries',
    openSeats: 29
  },
  {
    name: 'Olefins',
    description:
      'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer',
    price: 7444,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Transportation',
    openSeats: 11
  },
  {
    name: 'DFD',
    description:
      'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
    price: 3034,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Health Care',
    openSeats: 29
  },
  {
    name: 'LLQP',
    description:
      'nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
    price: 3509,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 28
  },
  {
    name: 'Stage Make-up',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
    price: 2259,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 14
  },
  {
    name: 'Two-phase Flow',
    description:
      'vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
    price: 6150,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Basic Industries',
    openSeats: 25
  },
  {
    name: 'Vulcan',
    description:
      'aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula',
    price: 8418,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 25
  },
  {
    name: 'MPages',
    description:
      'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue',
    price: 8353,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 22
  },
  {
    name: 'IEC 62304',
    description:
      'nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit',
    price: 6939,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Consumer Services',
    openSeats: 6
  },
  {
    name: 'OS/400',
    description:
      'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt',
    price: 6344,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Technology',
    openSeats: 5
  },
  {
    name: 'MPLS',
    description:
      'non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem',
    price: 4210,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 26
  },
  {
    name: 'KOL Development',
    description:
      'quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
    price: 2343,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Consumer Durables',
    openSeats: 19
  },
  {
    name: 'PDCA',
    description:
      'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar',
    price: 8328,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 27
  },
  {
    name: 'TDP',
    description:
      'consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus',
    price: 64,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 19
  },
  {
    name: 'Video Editing',
    description:
      'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et',
    price: 1893,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 24
  },
  {
    name: 'Google Adwords',
    description:
      'bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
    price: 3401,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 27
  },
  {
    name: 'JTIDS',
    description:
      'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
    price: 9854,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Public Utilities',
    openSeats: 28
  },
  {
    name: 'ISO 22000',
    description:
      'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis',
    price: 2620,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 7
  },
  {
    name: 'Glaucoma',
    description:
      'eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum',
    price: 7236,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 9
  },
  {
    name: 'RCS Master Control',
    description:
      'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec',
    price: 9047,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 6
  },
  {
    name: 'EIGRP',
    description:
      'at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna',
    price: 2987,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 8
  },
  {
    name: 'CWSP',
    description:
      'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
    price: 7927,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Energy',
    openSeats: 12
  },
  {
    name: 'CNC',
    description: 'at turpis a pede posuere nonummy integer non velit donec',
    price: 5330,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 20
  },
  {
    name: 'Ninja Skills',
    description:
      'duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu',
    price: 7074,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 11
  },
  {
    name: 'Systems Design',
    description:
      'at ipsum ac tellus semper interdum mauris ullamcorper purus sit',
    price: 7931,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Basic Industries',
    openSeats: 16
  },
  {
    name: 'Easements',
    description:
      'tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis',
    price: 9523,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 17
  },
  {
    name: 'RSVP-TE',
    description:
      'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
    price: 3374,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 8
  },
  {
    name: 'NIST',
    description:
      'dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis',
    price: 4371,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Miscellaneous',
    openSeats: 19
  },
  {
    name: 'NSS',
    description:
      'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum',
    price: 1049,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Technology',
    openSeats: 30
  },
  {
    name: 'Classical',
    description:
      'etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius',
    price: 1276,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Miscellaneous',
    openSeats: 15
  },
  {
    name: 'Following Up',
    description:
      'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
    price: 3574,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Basic Industries',
    openSeats: 20
  },
  {
    name: 'eWFM',
    description:
      'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
    price: 6944,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Capital Goods',
    openSeats: 6
  },
  {
    name: 'CBRN',
    description:
      'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
    price: 8334,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Basic Industries',
    openSeats: 17
  },
  {
    name: 'Music Theory',
    description:
      'in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
    price: 3044,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 7
  },
  {
    name: 'xPression',
    description:
      'ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
    price: 2080,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 29
  },
  {
    name: 'Oleochemicals',
    description:
      'accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus',
    price: 9620,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 21
  },
  {
    name: 'Job Costing',
    description:
      'praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    price: 1898,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Public Utilities',
    openSeats: 11
  },
  {
    name: 'Unfair Competition',
    description:
      'vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus',
    price: 4981,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 26
  },
  {
    name: 'Teaching Writing',
    description:
      'eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue',
    price: 2000,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Consumer Non-Durables',
    openSeats: 21
  },
  {
    name: 'First Time Home Buyers',
    description:
      'quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum',
    price: 1249,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 28
  },
  {
    name: 'Sales Operations',
    description:
      'sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium',
    price: 4763,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Health Care',
    openSeats: 26
  },
  {
    name: 'Broadcast Television',
    description:
      'nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium',
    price: 5050,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 25
  },
  {
    name: 'RCT',
    description:
      'ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
    price: 4690,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Finance',
    openSeats: 17
  },
  {
    name: 'Power Generation',
    description:
      'quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst',
    price: 6657,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Energy',
    openSeats: 30
  },
  {
    name: 'ICT',
    description:
      'mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
    price: 4276,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Health Care',
    openSeats: 21
  },
  {
    name: 'Logic Pro',
    description:
      'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc',
    price: 5333,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 16
  },
  {
    name: 'NBFC',
    description:
      'lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui',
    price: 3661,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Basic Industries',
    openSeats: 13
  },
  {
    name: 'Aerial Lifts',
    description:
      'nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros',
    price: 4344,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 6
  },
  {
    name: 'IBM Tivoli',
    description:
      'pede posuere nonummy integer non velit donec diam neque vestibulum eget',
    price: 7742,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 9
  },
  {
    name: 'MRB',
    description:
      'platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat',
    price: 6940,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Technology',
    openSeats: 24
  },
  {
    name: 'SAP ERP',
    description:
      'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc',
    price: 8619,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Health Care',
    openSeats: 17
  },
  {
    name: 'DNA quantification',
    description:
      'ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum',
    price: 9157,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Public Utilities',
    openSeats: 15
  },
  {
    name: 'E-on Vue',
    description:
      'nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo',
    price: 8436,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Miscellaneous',
    openSeats: 12
  },
  {
    name: 'On Location',
    description:
      'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh',
    price: 4370,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Basic Industries',
    openSeats: 5
  },
  {
    name: 'Driven By Results',
    description: 'duis aliquam convallis nunc proin at turpis a pede posuere',
    price: 8979,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 7
  },
  {
    name: 'ICH Guidelines',
    description:
      'sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales',
    price: 8760,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Public Utilities',
    openSeats: 12
  },
  {
    name: 'Requirements Gathering',
    description:
      'aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus',
    price: 3457,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 7
  },
  {
    name: 'Hybrid Cloud',
    description:
      'congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam',
    price: 8544,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 26
  },
  {
    name: 'JScript',
    description:
      'tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc',
    price: 7607,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 23
  },
  {
    name: 'Emergency Management',
    description:
      'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
    price: 6513,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 9
  },
  {
    name: 'Non-profit Volunteering',
    description:
      'sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
    price: 6600,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Public Utilities',
    openSeats: 14
  },
  {
    name: 'Pinterest',
    description: 'sapien cursus vestibulum proin eu mi nulla ac enim in tempor',
    price: 4170,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Capital Goods',
    openSeats: 17
  },
  {
    name: 'PVC',
    description:
      'convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
    price: 9451,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'n/a',
    openSeats: 21
  },
  {
    name: 'eBusiness Suite',
    description:
      'nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat',
    price: 2748,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 25
  },
  {
    name: 'Iyengar Yoga',
    description:
      'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet',
    price: 7012,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 8
  },
  {
    name: 'PDS Frameworks',
    description:
      'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien',
    price: 3745,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 6
  },
  {
    name: 'Molecular Biology',
    description:
      'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
    price: 4320,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Basic Industries',
    openSeats: 14
  },
  {
    name: 'Xplan',
    description: 'mauris enim leo rhoncus sed vestibulum sit amet cursus id',
    price: 3473,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Consumer Services',
    openSeats: 27
  },
  {
    name: 'JES2',
    description:
      'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc',
    price: 7932,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 28
  },
  {
    name: 'LDS',
    description:
      'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus',
    price: 6290,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 23
  },
  {
    name: 'IUI',
    description: 'ac nibh fusce lacus purus aliquet at feugiat non pretium',
    price: 5117,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Miscellaneous',
    openSeats: 19
  },
  {
    name: 'What-if Analysis',
    description:
      'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus',
    price: 1360,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Finance',
    openSeats: 18
  },
  {
    name: 'SFTP',
    description:
      'in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo',
    price: 5187,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 12
  },
  {
    name: 'Pygame',
    description:
      'luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo',
    price: 3941,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 24
  },
  {
    name: 'OTL',
    description:
      'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est',
    price: 7059,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Consumer Services',
    openSeats: 21
  },
  {
    name: 'US Tax',
    description:
      'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
    price: 1745,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Energy',
    openSeats: 22
  },
  {
    name: 'Umbraco',
    description:
      'pede lobortis ligula sit amet eleifend pede libero quis orci nullam',
    price: 3374,
    imageUrl: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    subject: 'Finance',
    openSeats: 27
  },
  {
    name: 'Boilers',
    description:
      'interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique',
    price: 4720,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Health Care',
    openSeats: 29
  },
  {
    name: 'NYISO',
    description:
      'amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus',
    price: 9872,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Finance',
    openSeats: 25
  },
  {
    name: 'Kickstart',
    description:
      'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia',
    price: 3029,
    imageUrl: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 16
  },
  {
    name: 'MQL4',
    description:
      'felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis',
    price: 4360,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Consumer Services',
    openSeats: 17
  },
  {
    name: 'EBITDA Growth',
    description:
      'vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis',
    price: 3190,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Health Care',
    openSeats: 20
  },
  {
    name: 'Ext JS',
    description:
      'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus',
    price: 4532,
    imageUrl: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
    subject: 'Technology',
    openSeats: 20
  },
  {
    name: 'Klout',
    description:
      'posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus',
    price: 3120,
    imageUrl: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    subject: 'Consumer Non-Durables',
    openSeats: 28
  },
  {
    name: 'Alternative Medicine',
    description:
      'urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium',
    price: 5039,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Consumer Services',
    openSeats: 6
  },
  {
    name: 'FCNSA',
    description:
      'tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla',
    price: 3198,
    imageUrl: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    subject: 'Finance',
    openSeats: 14
  },
  {
    name: 'International Law',
    description:
      'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam',
    price: 6052,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 27
  },
  {
    name: 'PGA',
    description:
      'aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero',
    price: 3903,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'n/a',
    openSeats: 27
  },
  {
    name: 'BSF',
    description:
      'consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam',
    price: 7360,
    imageUrl: 'http://dummyimage.com/100x100.png/dddddd/000000',
    subject: 'Consumer Non-Durables',
    openSeats: 29
  },
  {
    name: 'Unfair Competition',
    description:
      'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in',
    price: 2817,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'n/a',
    openSeats: 25
  },
  {
    name: 'LPIC',
    description:
      'rutrum rutrum neque aenean auctor gravida sem praesent id massa',
    price: 1133,
    imageUrl: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    subject: 'Transportation',
    openSeats: 30
  },
  {
    name: 'CDMA2000',
    description:
      'montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et',
    price: 8797,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'n/a',
    openSeats: 16
  },
  {
    name: 'Multi-channel Retail',
    description:
      'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
    price: 8480,
    imageUrl: 'http://dummyimage.com/100x100.bmp/dddddd/000000',
    subject: 'Finance',
    openSeats: 7
  },
  {
    name: 'Continuous Improvement',
    description:
      'nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
    price: 2790,
    imageUrl: 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
    subject: 'Consumer Services',
    openSeats: 22
  },
  {
    name: 'Electric Power',
    description:
      'aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget',
    price: 1310,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Finance',
    openSeats: 5
  },
  {
    name: 'Video Production',
    description:
      'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien',
    price: 9768,
    imageUrl: 'http://dummyimage.com/100x100.bmp/ff4444/ffffff',
    subject: 'Energy',
    openSeats: 22
  },
  {
    name: 'Visual Merchandising',
    description:
      'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci',
    price: 1460,
    imageUrl: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
    subject: 'Technology',
    openSeats: 27
  },
  {
    name: 'Food &amp; Beverage',
    description:
      'ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci',
    price: 8178,
    imageUrl: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
    subject: 'Public Utilities',
    openSeats: 18
  }
]

const subjects = [
  {subject: 'Cooking', imageUrl: '/subjectsLogos/cooking.png'},
  {subject: 'Crafts', imageUrl: '/subjectsLogos/crafts.png'},
  {subject: 'Garden', imageUrl: '/subjectsLogos/garden.png'},
  {subject: 'Technology', imageUrl: '/subjectsLogos/laptop.png'},
  {subject: 'Mind and Body', imageUrl: '/subjectsLogos/mindful.png'},
  {subject: 'Outdoors', imageUrl: '/subjectsLogos/outdoors.png'},
  {subject: 'Academic', imageUrl: '/subjectsLogos/scholar.png'},
  {subject: 'Science', imageUrl: '/subjectsLogos/science.png'},
  {subject: 'Home Improvement', imageUrl: '/subjectsLogos/tools.png'}
]

const db = require('../server/db')
const {User, Hobby, Order} = require('../server/db/models')
console.log('db synced!')
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive}
}
async function seed() {
  await db.sync({force: true})

  let createdHobbies = await Hobby.bulkCreate(hobbies, {returning: true})

  for (let i = 0; i < createdHobbies.length; i++) {
    let num = getRandomInt(0, 9)
    await createdHobbies[i].update(subjects[num])
  }

  for (let i = 0; i < userArray.length; i++) {
    const newUser = await User.create(userArray[i])
    let hobbiesToSlice = [...createdHobbies]
    const randomOrderNum = Math.floor(Math.random() * 9) + 1
    const randomHobbyNum = Math.floor(Math.random() * 9) + 1
    for (let j = 0; j <= randomOrderNum; j++) {
      let newOrder = await Order.create(
        {},
        {
          include: [Hobby]
        }
      )
      for (let k = 0; k < randomHobbyNum; k++) {
        await newOrder.addHobby(hobbiesToSlice[0])
        hobbiesToSlice.shift()
      }
      await newOrder.reload()
      await newOrder.getPrice()
      if (j < randomOrderNum) {
        await newOrder.checkoutOrder()
      }
      await newUser.addOrder(newOrder)
    }
  }

  // console.log(`seeded ${models.length} models`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
