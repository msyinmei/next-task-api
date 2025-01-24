import { PrismaClient } from "@prisma/client";

const taskClient = new PrismaClient().task;

// getAllTasks
export const getAllTasks = async (req, res) => {
    try {
        const allTasks = await taskClient.findMany({

        })
        res.status(200).json({ data: allTasks });
    } catch (e) {
        console.log(e)
    }
}

// getTaskByID
export const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskClient.findUnique({
            where: {
                id: taskId,
            }
        })

        res.status(200).json({ data: task });
    } catch (e) {
        console.log(e)
    }
}

// createTask
export const createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const task = await taskClient.create({
            data: taskData
        })

        res.status(201).json({ data: task });
    } catch (e) {
        console.log(e)
    }
}

// updateTask
export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;
        const task = await taskClient.update({
            where: {
                id: taskId,
            },
            data: taskData
        })

        res.status(204).json({ data: task });
    } catch (e) {
        console.log(e)
    }
}

// deleteTask
export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskClient.delete({
            where: {
                id: taskId,
            },
        });

        res.status(204).json({ data: {} });
    } catch(e) {
        console.log(e)
    }
}