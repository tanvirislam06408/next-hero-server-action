'use server'

import { revalidatePath } from "next/cache";
import { postTask } from "./taskData";

export const addATask = async (formData) => {
    const name = formData.get('name');

    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/task')
    }
    return res;

}