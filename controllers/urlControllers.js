const validUrl = require("valid-url");
const Url = require("../models/url");

const postUrl = (req, res) => {
  const { originalUrl } = req.body;

  if (validUrl.isHttpsUri(originalUrl)) {
    const url = new Url({ originalUrl });
    url.shortUrl = url.id;
    url.save()
      .then(() => {
        res.json({ original_url: url.originalUrl, short_url: url.shortUrl });
      })
      .catch((err) => {
        res.json({ oops: err });
      });
  } else {
    res.json({ error: "invalid URL" });
  }
};

const getUrl = (req, res) => {
  const { id } = req.params;
  Url.findById(id)
    .then((result) => {
      res.redirect(result.originalUrl);
    })
    .catch((err) => {
      res.json({ oops: err });
    });
};

module.exports = {
  postUrl,
  getUrl,
};
