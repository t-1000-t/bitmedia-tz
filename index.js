const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const users_statistic = require("./public/users_statistic.json");
const users = require("./public/users.json");

require("dotenv").config();

const app = express();

app.use(morgan("tyni"));
app.use(cors());

// START ... функция выпонления для всех
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// FINISH

// START ... "страница /home.html"
// example: http://localhost:5000/
app.get("/", function(req, res, next) {
  res.sendFile("./public/home.html", { root: __dirname });
});
// FINISH

// START... "массивы в массиве по 15 строк, отрисовка всех юзеров, поиск по id"
// request example 1: localhost:5000/user?id=all
// request example 2: http://localhost:5000/user?id=23
app.get("/user", function(req, res, next) {
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
});
// FINISH

// START... "отрисовка страниц по номеру, 15 строк в старнице"
// example: http://localhost:5000/pages?num=4
app.get("/pages", function(req, res, next) {
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
});
// FINISH

// START module... "сумма кликов по id"
// example: http://localhost:5000/total_clicks?user_id=34
// example: http://localhost:5000/total_clicks?user_id=all
app.get("/total_clicks", function(req, res, next) {
  const { user_id } = req.query;

  const search = {
    id: null
  };

  if (user_id === undefined) {
    return res.status(404).json({
      message: "Your request is incorrect."
    });
  }

  if (user_id === "all") {
    total_clicks = users_statistic.reduce(
      (total, user) => total + user.clicks,
      0
    );
    return res.status(200).json({
      user: user_id ? "All clicks: " + total_clicks : null
    });
  }

  if (user_id) {
    search.id = user_id;
  }

  const checkid = users_statistic.find(
    elem => elem.user_id === Number(search.id)
  );

  if (!checkid) {
    return res.status(422).json({
      message: "id are missing"
    });
  }

  userStat = users_statistic
    .filter(us => us.user_id === Number(search.id))
    .reduce((total, elem) => total + elem.clicks, 0);

  res.status(200).json({
    ustat: user_id ? userStat : users_statistic
  });
});
// FINISH module...

// START... сумма views по id
// example: http://localhost:5000/total_page_views?user_id=3
// example: http://localhost:5000/total_page_views?user_id=all
// example: localhost:5000/total_page_views?user_id=33&start_date=2019-10-05&end_date=2019-10-25
app.get("/total_page_views", function(req, res, next) {
  const { user_id, start_date, end_date } = req.query;

  const search = {
    id: null
  };

  if (user_id === undefined) {
    return res.status(404).json({
      message: "Your request is incorrect."
    });
  }

  if (user_id === "all") {
    total_page_views = users_statistic.reduce(
      (total, user) => total + user.page_views,
      0
    );
    return res.status(200).json({
      user: user_id ? "All page views: " + total_page_views : null
    });
  }

  if (user_id) {
    search.id = user_id;
  }

  const checkid = users_statistic.find(
    elem => elem.user_id === Number(search.id)
  );

  if (!checkid) {
    return res.status(422).json({
      message: "id are missing"
    });
  }

  // общее число прсомотров за все время
  const userViews = users_statistic
    .filter(elem => elem.user_id === Number(search.id))
    .reduce((total, user) => total + user.page_views, 0);

  //фильтруем по дате
  const userFilter = users_statistic.filter(
    elem => elem.user_id === Number(search.id)
  );

  const startDate = start_date;
  const endDate = end_date;

  const resultProductData = userFilter.filter(el => {
    return el.date >= startDate && el.date <= endDate;
  });

  console.log(resultProductData);

  res.status(200).json({
    user_view: user_id ? userViews : users_statistic
  });
});
// FINISH

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listen port on", port);
});
