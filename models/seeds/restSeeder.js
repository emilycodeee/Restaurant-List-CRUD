const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
db.once('open', () => {
  Restaurant.create({
    "id": 1,
    "name": "Sababa 沙巴巴中東美食",
    "name_en": "Sababa Pita Bar",
    "category": "中東料理",
    "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
    "location": "台北市羅斯福路三段 283 巷 17 號",
    "phone": "02 2363 8009",
    "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
    "rating": 4.1,
    "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。"
  },
    {
      "id": 2,
      "name": "梅子鰻蒲燒專賣店",
      "name_en": "Umeko Japanese Unagi House",
      "category": "日本料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg",
      "location": "台北市中山區林森北路 107 巷 8 號",
      "phone": " 02 2521 2813",
      "google_map": "https://goo.gl/maps/cUJEmFSRKyH2",
      "rating": 4.3,
      "description": "鰻魚、鰻魚飯、真空鰻魚"
    },
    {
      "id": 3,
      "name": "ZIGA ZIGA",
      "name_en": "Ziga Zaga",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg",
      "location": "台北市信義區松壽路 2 號",
      "phone": "02 2720 1230",
      "google_map": "https://goo.gl/maps/bnZKC2YjYZp",
      "rating": 4.2,
      "description": "以頂級食材與料理技法完美呈現各類經典義式料理，獅頭造型烤爐現作pizza與開放式廚房現作龍蝦茄汁雞蛋銀絲麵是不可錯過的必嚐推薦！夜間國際級樂團的熱力演出，感受活力四射的現場魅力。"
    },
    {
      "id": 4,
      "name": "艾朋牛排餐酒館",
      "name_en": "A Point Steak & Bar",
      "category": "美式",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg",
      "location": "110 台北市信義區忠孝東路五段 139 號 2 樓",
      "phone": "02 2756 7788",
      "google_map": "https://goo.gl/maps/6Lq7U2ahp152",
      "rating": 4.2,
      "description": "從味蕾開始，重拾美味感動。艾朋牛排餐酒館對高級料理的細選珍饌堅持，更勇於翻脫新意，要以平易親人的親切風格，同時不失料理獨家精髓，成功打動每吋挑剔味蕾，讓每位顧客享用鮮嫩Steak牛排風采，咀嚼Pasta義大利麵層次風味！"
    },
    {
      "id": 5,
      "name": "Gusto Pizza",
      "name_en": "Gusto Pizza",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg",
      "location": "北市中正區連雲街 74 號",
      "phone": "02 2358 7001",
      "google_map": "https://goo.gl/maps/rqzbVyrR9Gp",
      "rating": 4.7,
      "description": "我們的披薩師傅從倫敦帶來別於一般口味的經典義大利披薩，而且披薩麵團至少發酵24小時。同時我們也窯烤麵包及甜點，但披薩才是GUSTO最強項。我們製做的每一份餐點，都充滿飽飽的口味及香氣。除此之外，遵循純手工及傳統方式製作是我們的堅持。"
    },
    {
      "id": 6,
      "name": "WXYZ Bar",
      "name_en": "WXYZ Bar",
      "category": "酒吧",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg",
      "location": "台北市中山區雙城街",
      "phone": "02 7743 9999",
      "google_map": "https://goo.gl/maps/rFLNu87ruBM2",
      "rating": 4.3,
      "description": "紅酒吧，現代創意料理，開胃小館。提供純素選擇，提供無麩質選擇，提供素食選擇。"
    },
    {
      "id": 7,
      "name": "Fika Fika Cafe",
      "name_en": "Fika Fika Cafe",
      "category": "咖啡",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg",
      "location": "台北市中山區伊通街 33 號",
      "phone": "02 2507 0633",
      "google_map": "https://goo.gl/maps/Y1iyiSK7EeR2",
      "rating": 4.3,
      "description": "我們在乎每一位顧客、賣出去的每一滴咖啡、每一粒咖啡豆。而今，「Fika Fika Cafe Online Store」更期望把如此美好的體驗，分享給喜歡我們的每一位顧客，希望您無論在世界的哪一個角落，都能與我們一起享受「Fika Fika」的美好時光。"
    },
    {
      "id": 8,
      "name": "布娜飛比利時啤酒餐廳",
      "name_en": "Bravo Beer",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg",
      "location": "台北市松山區市民大道四段 185 號",
      "phone": "02 2570 1255",
      "google_map": "https://goo.gl/maps/V9mKwVJ4s5v",
      "rating": 4.7,
      "description": "我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了..."
    })
  console.log('all done!')
})