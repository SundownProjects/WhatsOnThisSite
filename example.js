const WhatsOnThisSite = require('WhatsOnThisSite');

const options = {
  debug: false, // verbose output
  batchSize: 5, // number of links to process at once
  delay: 500, // milliseconds to wait before requesting a new page
  headers: {}, // set request headers
  storage: {
    local: {}, // set puppeteer local storage items
    session: {}, // set puppeteer session storage items
  },
  maxDepth: 3, // may number of paths before stopping.
  maxUrls: 10, // max number of URLs to search before stopping
  maxWait: 30000, // the max TTL for the http request
  recursive: true, // traverse the site?
  probe: false, // 'basic' | 'full' == false
  proxy: false, // proxy the puppeteer requests
  userAgent: 'WhatsOnThisSite', // puppeteer user agent
  htmlMaxCols: 2000, // max html columns to find technologies
  htmlMaxRows: 2000, // max html rows to find technologies
  noScripts: false, // block scripts in puppeteer
  noRedirect: false, // do not redirect puppeteer
  extended: false, // provides extended information in the results
};

const wots = new WhatsOnThisSite(options);
// Anon function so we can use async
(async () => {
  try {
    await wots.init();
    const url = 'https://example.com';

    const site = await wots.open(url);

    // Optionally capture and output errors
    site.on('error', console.error);

    const results = await site.analyze();

    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error(error);
  }

  await wots.destroy();
})();
