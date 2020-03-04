const users = require("../../../public/users.json");

// START... "массивы в массиве по 15 строк, отрисовка всех юзеров, поиск по id"
// request example 1: localhost:5000/api/user?id=all
// request example 2: http://localhost:5000/api/user?id=23
//
const user = function(req, res) {
  const { id } = req.query;

  if (id === "all") {
    return res.status(200).json({
      user: id ? users : null
    });
  }

  const query = {
    id: null
  };

  if (id) {
    query.id = id;
  }

  const checkid = users.find(elem => elem.id === Number(query.id));

  if (!checkid) {
    return res.status(422).json({
      message: "id are missing"
    });
  }

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunksUsers = chunk(users, 15);

  let fileUsers;
  for (let i = 0; i < chunksUsers.length; i++) {
    let res = chunksUsers[i].find(elem => elem.id === Number(query.id));
    if (res !== undefined) {
      fileUsers = res;
    }
  }

  res.status(200).json({
    user: id ? fileUsers : users
  });
};

module.exports = user;
