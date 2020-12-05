const express = require("express")
const router = express.Router()
const userController = require("../controllers/user-controller")

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.post("/", userController.insert)
router.patch("/:id", userController.update)
router.delete("/api/users/:id", userController.delete)

module.exports = router