import taskData from '../data/task.json'

const getTask = async () => {
    return taskData;
};

export default getTask;

export const postTask = async (newTask) => {
    newTask.id = taskData.length + 1;
    taskData.push(newTask);
    return { ok: true, message: 'task added successfully' }
}