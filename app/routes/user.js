const express = require('express')

const controller = require('../controllers/user')

const router = express.Router();

const path = "/user"

router.get(
    `${path}`,
    controller.getData
)
router.post(
    `${path}`,
    controller.inserData
)
router.put(
    `${path}/:id`,
    controller.updateOne
)
router.delete(
    `${path}/:id`,
    controller.delete
)
module.exports = router;