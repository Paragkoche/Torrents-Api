const scrap1337x = require('./1337x');
const scrapNyaa = require('./nyaaSI');
const scrapYts = require('./yts');
const scrapPirateBay = require('./pirateBay');
const scrapTorLock = require('./torLock');

const torrentGalaxy = require('./torrentGalaxy');
const rarbg = require('./rarbg');

async function combo(query, page) {
    let comboTorrent = []
    await Promise.all([
        torrentGalaxy(query, page),
        scrapNyaa.nyaaSI(query, page),
        scrapYts.yts(query, page),
        scrapPirateBay.pirateBay(query, page),
        scrapTorLock.torLock(query, page),

        scrap1337x.torrent1337x(query, page),
        rarbg(query, page)
    ])
        .then(([tgx, nyaasi, yts, piratebay, torlock, x1337, rarbg]) => {

            if (tgx !== null && tgx.length > 0) {
                comboTorrent.push(tgx);
            }
            if (nyaasi !== null && nyaasi.length > 0) {
                comboTorrent.push(nyaasi);
            }
            if (yts !== null && yts.length > 0) {
                comboTorrent.push(yts);
            }
            if (piratebay !== null && piratebay.length > 0) {
                comboTorrent.push(piratebay);
            }
            if (torlock !== null && torlock.length > 0) {
                comboTorrent.push(torlock);
            }

            if (x1337 !== null && x1337.length > 0) {
                comboTorrent.push(x1337);
            }
            if (rarbg !== null && rarbg.length > 0) {
                comboTorrent.push(rarbg);
            }
        })
    return comboTorrent;
}
module.exports = combo;