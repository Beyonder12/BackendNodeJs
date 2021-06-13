const axios = require('axios'); // data scrapper
const cheerio = require('cheerio'); // to manipulate data structure of result data of scrapping
const express = require('express'); // route to the browser

async function getPriceFeed() {
  try {
    const siteUrl = 'https://coinmarketcap.com/'

    const {data} = await axios({
      method: "GET",
      url: siteUrl,
    })

    const $ = cheerio.load(data);
    const elemSelector = '#__next > div > div.main-content > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr'

    const keys = [
      'rank',
      'name',
      'price',
      '24h',
      '7d',
      'marketCap',
      'volume',
      'circulatingSupply'
    ]
    const coinArr = [];

    $(elemSelector).each((parentIdx, parentElem) => {
      let keyIndex = 0;
      const coinObj = {};

      if(parentIdx <= 9) {
        $(parentElem).children().each((childIdx, childElem) => {
          let tdValue = $(childElem).text();

          if (keyIndex === 1 || keyIndex === 5) {
            tdValue = ($('p:first-child', $(childElem).html()).text());
          }

          if(tdValue) {
            coinObj[keys[keyIndex]] = tdValue
            keyIndex++;
          }
        })
        coinArr.push(coinObj)
      }
    })
  } catch (err) {
    console.log(err);s
  }
}

const app = express();

app.get('/api/price-feed', async (req, res) => {
  try {
    const priceFeed = await getPriceFeed()

    return res.status(200).json({
      result: priceFeed
    })
  } catch(err) {
    return res.status(500).json({
      err : err.toString(),
    })
  }
})

app.listen(3001, () => {
  console.log('running port on port 3001')
})
