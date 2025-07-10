import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../../components/Atom/TextField/TextField";
import { MenuItem } from "../../components/Modules/Menu/MenuItem";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import { InputAdornment } from "@mui/material";

const meta: Meta<typeof TextField> = {
  title: "components/Atoms/TextField/TextField",
  component: TextField,
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
    variant: {
      control: {
        type: "radio",
      },
      options: ["outlined", "filled", "standard"],
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Normal: Story = {
  args: {
    error: false,
    label: "label",
    variant: "outlined",
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
  parameters: {
    docs: {
      source: {
        code: `
<TextField
  defaultValue="Placeholder"
  label="With Icon"
  slotProps={{
    input: {
      startAdornment:
        <InputAdornment position="start">
          <MagnifyingGlass />
        </InputAdornment>
    }
  }}
/>
`.trim(),
      },
    },
  },
};

export const Select: Story = {
  render: (args) => {
    const currencies = [
      {
        value: "1audult1room",
        label: "一間房 一位成人",
      },
      {
        value: "2audult1room",
        label: "一間房 兩位成人",
      },
      {
        value: "1audult4room",
        label: "一間房 四位成人",
      },
      {
        value: "4audult2room",
        label: "兩間房 四位成人",
      },
    ];
    return (
      <TextField
        {...args}
        slotProps={{
          input: { disableUnderline: true },
        }}
        helperText="Please select your currency"
        sx={{
          "& .MuiFilledInput-root": {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            border: "1px solid",
            borderColor: "#E0E3E7",
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  },
  args: {
    label: "Select",
    defaultValue: "1audult1room",
    variant: "filled",
    select: true,
  },
};
