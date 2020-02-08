'use strict';

const fs = require('fs');
const fetch = require('node-fetch');

const JWT_TOKEN = '';
const SERIES_IS = 72514;

let promiseArray = [];
let out = [];

for (let i = 1; i <= 12; i++) {
  promiseArray[i] = fetch(`https://api.thetvdb.com/series/72514/episodes/query?page=${i}`, {
    headers: {
      'Authorization': `Bearer ${JWT_TOKEN}`
    }
  })
  .then( res => res.json()  )
  .then((json) => {   
    json.data.forEach(row => {
      out.push({
          season: row.airedSeason,
          episode: row.airedEpisodeNumber,
          name: row.episodeName,
          plexName: `S${row.airedSeason}E${row.airedEpisodeNumber} - ${row.episodeName}`,
          normalizedName: row.episodeName.toLowerCase().replace(/[^a-z0-9]/gi, '')
      })
    });
  });
}

Promise.all(promiseArray).then(a => {
    fs.writeFileSync('episode-reference.json', JSON.stringify(out));
});
