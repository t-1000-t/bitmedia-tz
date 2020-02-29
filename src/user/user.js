if (id === "all") {
  res.status(200).json({
    user: id ? users : null
  });
  return;
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
