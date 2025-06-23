import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/Atom/Alert/Alert";
import { Button } from "../../components/Atom/Button/Button";
import { BsBox } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const meta: Meta<typeof Alert> = {
  title: "components/Alert/Alert",
  component: Alert,
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
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertFloating: Story = {
  render: (args) => {
    return (
      <Alert onClose={() => {}} {...args} sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="text">Close</Button>
          <Button variant="text">Retry</Button>
        </div>
      </Alert>
    );
  },
  args: {
    severity: "success",
    alertTitle: "Alert title here",
  },
};

export const AlertSticky: Story = {
  render: (args) => {
    return (
      <Alert
        icon={<BsBox />}
        onClose={() => {}}
        action={
          <div>
            <Button variant="text" sx={{ height: "35px" }}>
              Close
            </Button>
            <Button sx={{ height: "35px" }}>Retry</Button>
            <IconButton color="inherit" size="small">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
        }
        {...args}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Alert>
    );
  },
  args: {
    severity: "info",
  },
};

export const CloseableAlert: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    return (
      <div>
        {open && (
          <Alert
            icon={<BsBox />}
            action={
              <div>
                <Button
                  variant="text"
                  sx={{ height: "35px" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Close
                </Button>
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </div>
            }
            {...args}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Alert>
        )}
        {!open && (
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            re-open
          </Button>
        )}
      </div>
    );
  },
  args: {
    severity: "error",
  },
};
