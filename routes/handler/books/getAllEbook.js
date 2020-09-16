const apiAdapter = require('../../apiAdapter');

const {
  BOOKS_EB_NYT
} = process.env;

const api = apiAdapter(BOOKS_EB_NYT);

module.exports = async (req, res) => {
  try {
    const booksEb = await api.get(BOOKS_EB_NYT, {
      params: {
        ...req.query
      }
    });
    return res.json(booksEb.data);

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: 'error', message: ' service unavailable' });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
}