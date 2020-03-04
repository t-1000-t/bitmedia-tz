const router = require("express").Router();
const user = require("../controllers/user/user");
const pages = require("../controllers/pages/pages");
const total_clicks = require("../controllers/total_clicks/total_clicks");
const total_page_views = require("../controllers/total_page_views/total_page_views");

router.get("/user", user);

router.get("/pages", pages);

router.get("/total_clicks", total_clicks);

router.get("/total_page_views", total_page_views);

router.all("/", (req, res) => {
  res.status(404).json({ error: "request not found" });
});

module.exports = router;
