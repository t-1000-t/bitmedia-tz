const users_statistic = require("../../../public/users_statistic.json");

// START module... "сумма кликов по id"
// example: http://localhost:5000/api/total_clicks?user_id=34
// example: http://localhost:5000/api/total_clicks?user_id=all
//
const total_clicks = function(req, res, next) {
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
};

module.exports = total_clicks;
