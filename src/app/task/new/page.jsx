'use client'
import { newAction } from '@/lib/action';
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from '@heroui/react';
import React from 'react';

const NewPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl text-center'>new task add koro</h1>
            <div className="">
                <Form action={newAction} className="flex flex-col gap-4">
                    <TextField isRequired 
                    validate={(value)=>{
                        if(value.length < 5){
                            return 'title must be at last 5 words or longer'
                        }
                    }}
                    className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your Task Title" />
                        <FieldError/>
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your Task Description" />
                    </TextField>
                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full" name="assignedTo">
                        <Label>Assigned To</Label>
                        <Input placeholder="Task Assigned To" />
                    </TextField>

                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot="close" type="submit">Submit Task</Button>

                </Form>
            </div>
        </div>
    );
};

export default NewPage;