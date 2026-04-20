import TaskCard from '@/Components/TaskCard';
import getTask from '@/lib/taskData';
import React from 'react';

const TaskPage = async () => {
    const task = await getTask();


    return (
        <div className='container mx-auto'>
            <h1> task data{task.tasks.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    task.tasks.map(taskCard => <TaskCard taskCard={taskCard} key={taskCard.id} />)
                }
            </div>
        </div>
    );
};

export default TaskPage;