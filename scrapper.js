const axios = require("axios");
const cheerio = require("cheerio");

const name = "Beifeng"
const hashtag= "1800"

console.log(process.env.POSTGRES_DB_HOST)
async function trackerScrapper(name, hashtag) {
    const url = `https://tracker.gg/valorant/profile/riot/${name}%23${hashtag}/overview`;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const ratingEntry = $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.highlighted.highlighted--giants > div.highlighted__content > div > div.valorant-highlighted-content__stats > div:nth-child(2) > span.valorant-highlighted-stat__value').text()
        console.log(ratingEntry)

    } catch (e) {
        console.error(e);
    }
};

trackerScrapper(name,hashtag);


