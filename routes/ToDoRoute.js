const { Router } = require("express");
const { getToDo, saveToDO, updateToDo ,deleteToDo} = require("../controllers/ToDoController");


const router = Router()

router.get("/", getToDo)
router.post("/update", updateToDo)
router.post("/save", saveToDO)
router.post("/delete", deleteToDo)

module.exports = router;