import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DraggableChips } from "../../components/Atom/Chip/DraggableChips";
import { Avatar } from "../../components/Atom/Avatar/Avatar";
import { Chip } from "../../components/Atom/Chip/Chip";
import { SmileySticker } from "phosphor-react";

type ChipItem = { id: string; name: string };

const meta: Meta<typeof DraggableChips> = {
  title: "components/Atoms/Chip/DraggableChips",
  component: DraggableChips,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    chips: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    getKey: {
      table: { disable: true },
    },
    getLabel: {
      table: { disable: true },
    },
    renderChip: {
      table: { disable: true },
    },
    draggingStyle: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DraggableChips>;

export const Draggablechips: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const [list, setList] = useState<ChipItem[]>([
      { id: "1", name: "Apple" },
      { id: "2", name: "Banana" },
      { id: "3", name: "Orange" },
    ]);
    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <DraggableChips
        chips={list}
        onChange={setList}
        getKey={(item) => item.id}
        getLabel={(item) => item.name}
        renderChip={(item) => (
          <Chip
            selected
            label={item.name}
            icon={<FaceIcon />}
            onDelete={() => handleDelete()}
          />
        )}
      />
        `.trim(),
      },
    },
  },
  render: (args) => {
    const [list, setList] = useState<ChipItem[]>([
      { id: "1", name: "Apple" },
      { id: "2", name: "Banana" },
      { id: "3", name: "Orange" },
    ]);
    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <DraggableChips
        chips={list}
        onChange={setList}
        getKey={(item) => item.id}
        getLabel={(item) => item.name}
        renderChip={(item) => (
          <Chip
            selected
            label={item.name}
            icon={<SmileySticker />}
            onDelete={() => handleDelete()}
          />
        )}
      />
    );
  },
};

export const DraggableAvatarChips: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const [list, setList] = useState<ChipItem[]>([
      { id: "1", name: "Apple" },
      { id: "2", name: "Banana" },
      { id: "3", name: "Orange" },
    ]);
    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <DraggableChips
        chips={list}
        onChange={setList}
        getKey={(item) => item.id}
        getLabel={(item) => item.name}
        renderChip={(item) => (
          <Chip
            label={item.name}
            avatar={<Avatar>{item.name[0]}</Avatar>}
            onDelete={() => handleDelete()}
          />
        )}
      />
        `.trim(),
      },
    },
  },
  render: (args) => {
    const [list, setList] = useState<ChipItem[]>([
      { id: "1", name: "Apple" },
      { id: "2", name: "Banana" },
      { id: "3", name: "Orange" },
    ]);
    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    return (
      <DraggableChips
        chips={list}
        onChange={setList}
        getKey={(item) => item.id}
        getLabel={(item) => item.name}
        renderChip={(item) => (
          <Chip
            label={item.name}
            avatar={<Avatar>{item.name[0]}</Avatar>}
            onDelete={() => handleDelete()}
          />
        )}
      />
    );
  },
};
