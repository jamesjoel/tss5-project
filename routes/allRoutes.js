const routes = require("express").Router();

// localhost:8080/api/teacher
routes.use("/api/teacher", require("../controllers/TeacherController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/adminauth", require("../controllers/AdminAuthController"));
routes.use("/api/profile", require("../controllers/ProfileController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/sub-category", require("../controllers/SubCategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/demo", require("../controllers/DemoController"));

module.exports = routes;