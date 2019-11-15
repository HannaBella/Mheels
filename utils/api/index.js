const router = require("express").Router();
const foodRoutes = require("./food");
const menuRoutes = require("./menu");
const vendorRoutes = require("./vendor");
const listRoutes = require("./list")

// Book routes
router.use("/food", foodRoutes);
router.use("/menu", menuRoutes);
router.use("/vendor", vendorRoutes);
router.use("/list", listRoutes);

module.exports = router;
