"use client";

import { CirclePlus, Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField ,ListBox, Select} from "@heroui/react";

export function AddTask({ addATask }) {
  return (
    <Modal>
      <Button variant="secondary">AddTask</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={addATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>

                  {/* select field */}
                  <Select name="priority" className="w-[256px]" placeholder="Select one">
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="normal" textValue="normal">
                          Normal
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Height" textValue="Height">
                          Height
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Add A Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}