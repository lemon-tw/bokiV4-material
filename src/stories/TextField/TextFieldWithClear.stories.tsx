import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ClearTextField } from "../../components/Atom/TextField/TextField";
import { MagnifyingGlass } from "phosphor-react";
import { InputAdornment } from "@mui/material";

const meta: Meta<typeof ClearTextField> = {
  title: "components/Atoms/TextField/ClearTextField",
  component: ClearTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
    error: {
      control: "boolean",
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof ClearTextField>;

export const Normal: Story = {
  args: {
    error: false,
    label: "label",
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    defaultValue: "Placeholder",
    slotProps: {
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <MagnifyingGlass />
          </InputAdornment>
        ),
      },
    },
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("Placeholder");
    return (
      <ClearTextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
    );
  },
  args: {
    error: false,
    label: "label",
  },
  parameters: {
    docs: {
      source: {
        code: `
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState("Placeholder");

  <ClearTextField
    value={value}
    label: "label"
    onChange={(e) => setValue(e.target.value)}
  />
`.trim(),
      },
    },
  },
};
