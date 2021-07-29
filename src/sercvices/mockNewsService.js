export default class MockNewsService {
  articles = [
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Richard Lawler",
      "title": "Kaseya ransomware attackers demand $70 million, claim they infected over a milli" +
          "on devices",
      "description": "Three days after ransomware attackers hijacked a managed services platform, reco" +
          "very efforts continued. The REvil group is reportedly asking for as much as $70 " +
          "million in Bitcoin to unlock the more than 1 million devices infected.",
      "url": "https://www.theverge.com/2021/7/5/22564054/ransomware-revil-kaseya-coop",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/nk-drxT0WYuHTTAQw6MhPgi4LK8=/0x146:2040x1214/fit" +
          "-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8792137/acastro_170629_17" +
          "77_0008_v2.jpg",
      "publishedAt": "2021-07-05T19:45:10Z",
      "content": "Filed under:\r\nThe supply chain attack has reached over a thousand organization" +
          "s.\r\nIllustration by Alex Castro / The Verge\r\nThree days after ransomware att" +
          "ackers started the holiday weekend by comprom… [+3376 chars]"
    }, {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Gang behind huge cyber-attack demands $70m in Bitcoin",
      "description": "The authors of a \"colossal\" ransomware attack demand the sum in Bitcoin in ret" +
          "urn for a key to unlock all files.",
      "url": "https://www.bbc.co.uk/news/technology-57719820",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4532/production/_119241771_getty" +
          "images-645051326.jpg",
      "publishedAt": "2021-07-05T12:14:34Z",
      "content": "image copyrightGetty Images\r\nThe gang behind a \"colossal\" ransomware attack " +
          "has demanded $70m (£50.5m) paid in Bitcoin in return for a \"universal decryptor" +
          "\" that it says will unlock the files of all … [+4140 chars]"
    }, {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lucas Matney",
      "title": "Crypto startup Phantom banks funding from Andreessen Horowitz to scale its multi" +
          "-chain wallet",
      "description": "While retail investors grew more comfortable buying cryptocurrencies like Bitcoi" +
          "n and Ethereum in 2021, the decentralized application world still has a lot of w" +
          "ork to do when it comes to onboarding a mainstream user base. Phantom is part of" +
          " a new class of cry…",
      "url": "http://techcrunch.com/2021/07/14/crypto-startup-phantom-banks-funding-from-andre" +
          "essen-horowitz-to-scale-its-multi-chain-wallet/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/07/Phantom-Founders-01.jpg?w=600",
      "publishedAt": "2021-07-14T19:09:01Z",
      "content": "While retail investors grew more comfortable buying cryptocurrencies like Bitcoi" +
          "n and Ethereum in 2021, the decentralized application world still has a lot of w" +
          "ork to do when it comes to onboarding a… [+2288 chars]"
    }
  ]
  getNews = async() => {
    return this.articles.map(art=>this.trasnsformData(art))
  }

  getTopHeadlines = async () => {
    return this.articles.map(art=>this.trasnsformData(art))
  }
  idGen() {
    //генерит id
    return Math.floor(Math.random() * 198654) + Math.ceil(Math.random() * 1998543)
  }

  trasnsformData = (data) => {
    return {
      author: data.author,
      content: data.content,
      description: data.description,
      publishedAt: data.publishedAt,
      title: data.title,
      url: data.url,
      urlToImage: data.urlToImage,
      id: this.idGen()
    }
  }
}
