/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Loc8R' });
  };

  module.exports = {
    index
  };