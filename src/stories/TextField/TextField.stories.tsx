import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TextField } from "../../components/Atom/TextField/TextField";
// import { TextField } from "@mui/material";

const meta: Meta<typeof TextField> = {
  title: "components/Atoms/TextField/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Horizontal: Story = {
  // render: (args) => {
  //   return (

  //   );
  // },
  args: {
    error: true,
    label: "label",
    color: "primary",
  },
};
