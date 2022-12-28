const Task = require("../models/Tasks");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("all items Rayyy");
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("updateTask");
};
const deleteTask = (req, res) => {
  res.send("deleteTask");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
