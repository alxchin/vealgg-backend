const axios = require("axios");
const cheerio = require("cheerio");

async function trackerScrapper(names, hashtag) {
    const data = []
    for (var i = 0; i < names.length; i++) {
        const url = `https://tracker.gg/valorant/profile/riot/${names[i]}%23${hashtag[i]}/overview`;
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            const ratingEntry = $('#app > div.trn-wrapper > div.trn-container > div > main > div.content.no-card-margin > div.site-container.trn-grid.trn-grid--vertical.trn-grid--small > div.trn-grid.container > div.segment-stats.area-main-stats.card.bordered.header-bordered.responsive > div.highlighted.highlighted--giants > div.highlighted__content > div > div.valorant-highlighted-content__stats > div:nth-child(2) > span.valorant-highlighted-stat__value').text()
            console.log(ratingEntry)
            data.push(ratingEntry)
        } catch (e) {
            console.error(e);
        }
    }
    console.log(data)
};


module.exports = trackerScrapper
