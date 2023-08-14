const express = require('express');
const path = require('path');
const fs = require('fs');
const { getMetaData } = require('./Metadata');
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3005;
const indexPath = path.resolve(__dirname, './build', 'index.html');

// here we serve the static build folder

// homepage route
app.get('/', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }
    let page;

    try {
      const { data } = await axios.get(
        `https://seo-apis.ajnalens.com/api/seo-data${req.path === '/' ? '/home' : req.path}`
      );
      page = data?.data ? data?.data : getMetaData(req.path)[0];
    } catch (e) {
      page = getMetaData(req.path)[0];
    }

    console.log('page');

    // get meta info
    // console.log(page[0]?.title);

    // inject meta tags
    htmlData = htmlData
      .replace(`__title__`, page?.title)
      .replace('<title>__title__</title>', page?.title)
      .replace(
        `__image__`,
        page?.image ? page?.image : 'https://s3.ajnavidya.com/ajnalens/media/ajna-logo/AjnaLens_Logo%20Lockup-13-13.png'
      )
      .replace(`__description__`, page?.description)
      .replace('__keywords__', page?.keywords)
      .replace('__title__', page?.title)
      .replace(
        '<meta name="twitter:title" content="__title__"/>',
        `<meta name="twitter:title" content="${page?.title}"/>`
      )
      .replace(
        '<meta property="og:description" content="__description__"/>',
        `<meta property="og:description" content="${page?.description}"/>`
      )
      .replace("AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device", page?.title);
    return res.send(htmlData);
  });
});

// static resources should just be served as they are

// here we serve the index.html page

app.get('/sitemap.xml', (req, res, next) => {
  // generate code for read sitemap.xml
  fs.readFile(path.resolve(__dirname, './build', 'sitemap.xml'), async (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }
    // console.log(htmlData);
    // buffer to sitemap.xml
    const buffer = Buffer.from(htmlData);
    // set content type
    res.set('Content-Type', 'text/xml');
    // send buffer to client
    return res.send(buffer);
  });
});

app.get('/:page', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }
    let page;

    try {
      const { data } = await axios.get(
        `https://seo-apis.ajnalens.com/api/seo-data${req.path === '/' ? '/home' : req.path}`
      );
      page = data?.data ? data?.data : getMetaData(req.path)[0];
    } catch (e) {
      page = getMetaData(req.path)[0];
    }

    // get meta info
    // console.log(page[0]?.title);

    // inject meta tags
    htmlData = htmlData
      .replace(`__title__`, page?.title)
      .replace('<title>__title__</title>', page?.title)
      .replace(
        `__image__`,
        page?.image ? page?.image : 'https://s3.ajnavidya.com/ajnalens/media/ajna-logo/AjnaLens_Logo%20Lockup-13-13.png'
      )
      .replace(`__description__`, page?.description)
      .replace(
        '<meta property="og:title" content="__title__"/>',
        `<meta property="og:title" content="${page?.title}"/>`
      )
      .replace('__keywords__', page?.keywords)
      .replace('OG:TITLE', page?.title)
      .replace("AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device", page?.title);

    return res.send(htmlData);
  });
});

// listening...

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log('listening on ' + PORT + '...');
});
