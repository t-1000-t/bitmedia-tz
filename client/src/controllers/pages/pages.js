const users = require("../../../public/users.json");

// START... "отрисовка страниц по номеру, 15 строк в старнице"
// example: http://localhost:5000/api/pages?num=4
//
const pages = function(req, res, next) {
  const { num } = req.query;

  const query = {
    num: null
  };

  if (num) {
    query.num = num - 1;
  }

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunksUsers = chunk(users, 15);

  if (num > chunksUsers.length || num <= 0) {
    return res.status(422).json({
      message:
        "Number page are missing, max number page is " + chunksUsers.length
    });
  }

  let numPage;
  for (let i = 0; i < chunksUsers.length; i++) {
    if (i === Number(query.num)) {
      numPage = chunksUsers[i];
    }
  }

  res.status(200).json({
    pages: num ? numPage : null
  });
};

module.exports = pages;
