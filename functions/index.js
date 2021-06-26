const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const cors = require('cors')({origin : true});

const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');

const scrapeMetatags = (text) => {

    const urls = Array.from(getUrls(text));

    const requests = urls.map(async url =>{

        const res = await fetch(url);

        const html = await res.text();

        const $ = cheerio.load(html);

        const getMetatag = (name) => 
                                $(`meta[name = ${name}]`).attr('content') ||
                                $(`meta[property = "og:${name}"]`).attr('content')||
                                $(`meta[property = "twitter:${name}"]`).attr('content')

        return{

            url, 
            title : $('title').text(),
            favicon : $('link[rel = shortcut icon]').attr('href'),
            // description : $('meta[name = description]').attr('content'),
            description : getMetatag('description'),
            image: getMetatag('image'),
            author: getMetatag('author'),
        }

    });

    return Promise.all(requests);

}