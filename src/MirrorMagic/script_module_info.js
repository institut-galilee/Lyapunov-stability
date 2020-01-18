{
  module: "newsfeed",
  position: "bottom_bar",
  config: {
    feeds: [
      {
        title: "Le Monde",
        url: "https://www.lemonde.fr/rss/une.xml",
      },					{
        title: "France Info",
        url: "https://www.francetvinfo.fr/titres.rss",
      },
      {
        // title: "New York Times",
        // url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
      }
    ],
    showSourceTitle: true,
    showPublishDate: true,
    broadcastNewsFeeds: true,
    broadcastNewsUpdates: true
  }
},
