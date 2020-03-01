const users_statistic = require("../../../public/users_statistic.json");

// START... сумма views по id
// example: http://localhost:5000/api/total_page_views?user_id=3
// example: http://localhost:5000/api/total_page_views?user_id=all
// example: http://localhost:5000/api/total_page_views?user_id=33&start_date=2019-10-05&end_date=2019-10-25
//
const total_page_views = function(req, res, next) {
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

  // фильтруем по дате
  const userFilter = users_statistic.filter(
    elem => elem.user_id === Number(search.id)
  );

  const startDate = start_date;
  const endDate = end_date;

  const resultProductData = userFilter.filter(el => {
    return el.date >= startDate && el.date <= endDate;
  });

  res.status(200).json({
    user_view: user_id ? userViews : null,
    user_date: user_id ? resultProductData : null
  });
};

module.exports = total_page_views;
