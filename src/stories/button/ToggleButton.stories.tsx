import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { ToggleButton } from "../../components/Atom/Button/ToggleButton";
import { ToggleButtonGroup } from "@mui/material";
import {
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  CaretLeft,
  CaretRight,
  ArrowCounterClockwise,
} from "phosphor-react";

const meta: Meta<typeof ToggleButton> = {
  title: "components/Atoms/Button/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      table: { disable: true },
    },
    disabled: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    children: {
      table: { disable: true },
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Surface: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: "20px" }}>
        <ToggleButton {...args} value="left">
          <CaretLeft />
        </ToggleButton>
        <ToggleButton {...args} value="right">
          <CaretRight />
        </ToggleButton>
      </div>
    );
  },
  args: {
    size: "medium",
  },
};

export const ToggleButtonsGroup: Story = {
  render: (args) => {
    const [alignment, setAlignment] = React.useState("left");
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          //   backgroundColor: "#1E1E1E",
          "&.Mui-selected": {
            backgroundColor: "#1E1E1E",
          },
        }}
        onChange={(event, newAlignment) => {
          setAlignment(newAlignment);
        }}
      >
        <ToggleButton {...args} value="left">
          <MagnifyingGlassPlus />
        </ToggleButton>
        <ToggleButton {...args} value="center">
          <MagnifyingGlassMinus />
        </ToggleButton>
        <ToggleButton {...args} value="right">
          <ArrowCounterClockwise />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  args: {
    size: "small",
  },
};
