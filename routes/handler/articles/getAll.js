const apiAdapter = require('../../apiAdapter');

const {
  ARTICLES_NYT
} = process.env;

const api = apiAdapter(ARTICLES_NYT);

module.exports = async (req, res) => {
  try {
    const articles = await api.get(ARTICLES_NYT, {
      params: {
        ...req.query
      }
    });
    return res.json(articles.data);

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: 'error', message: ' service unavailable' });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
}