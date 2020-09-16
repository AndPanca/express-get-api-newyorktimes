const apiAdapter = require('../../apiAdapter');

const {
  BOOKS_HC_NYT
} = process.env;

const api = apiAdapter(BOOKS_HC_NYT);

module.exports = async (req, res) => {
  try {
    const booksHc = await api.get(BOOKS_HC_NYT, {
      params: {
        ...req.query
      }
    });
    return res.json(booksHc.data);

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: 'error', message: ' service unavailable' });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
}