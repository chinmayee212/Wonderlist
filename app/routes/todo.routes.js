module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new todos
  router.post("/", todos.create);

  // Retrieve all todos
  router.get("/", todos.findAll);

  // Retrieve all published todos
  router.get("/status", todos.findAllPublished);
    //count cards
  router.get("/label",todos.findAllLabel);
  router.get("/personal",todos.findAllLabelPersonal);
  router.get("/work",todos.findAllLabelWork);
  router.get("/others",todos.findAllLabelOthers);


  // Retrieve a single todos with id
  router.get("/:id", todos.findOne);

  // Update a todos with id
  router.put("/:id", todos.update);

  // Delete a todos with id
  router.delete("/:id", todos.delete);

  // Create a new todos
  router.delete("/", todos.deleteAll);

  //count

  app.use('/api/todos', router);
};
