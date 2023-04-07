const ToDoModel = require("../models/TaskModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.send(todo);
  } catch (error) {
    res.send("Something went wrong with getting all todo");
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  try {
    const todo = await ToDoModel.create({ text });
    console.log("Added Successfully...");
    res.send(todo);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong with adding a todo");
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.set(201).send("Deleted Successfully...");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong with deleting a todo");
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  try {
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.set(201).send("Updated Successfully...");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong with updating a todo");
  }
};
