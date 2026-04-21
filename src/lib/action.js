'use server'

import { revalidatePath } from "next/cache";
import { postTask } from "./taskData";
import { redirect } from "next/navigation";

export const addATask = async (formData) => {
    const name = formData.get('name');

    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/task')
    }
    return res;

}

export const newAction = async (formData) => {
    const taskData = Object.fromEntries(formData.entries());
    const res = await postTask(taskData);
    if(res.ok){
        revalidatePath('/task');
        redirect('/task');
    }
    return res;
}