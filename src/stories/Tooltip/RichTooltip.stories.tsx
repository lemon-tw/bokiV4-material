import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

import { RichTooltip } from "../../components/Atom/Tooltip/RichTooltip";
import { Button } from "../../components/Atom/Button/Button";

const meta: Meta<typeof RichTooltip> = {
  title: "components/Atoms/Tooltip/RichTooltip",
  component: RichTooltip,
  parameters: {
    docs: {
      description: {
        component:
          "因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
    },
    actions: {
      control: "text",
    },
    disableInteractive: {
      control: "boolean",
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof RichTooltip>;

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const localActions = (
      <>
        <Button
          variant="text"
          color="primary"
          sx={{ width: 80, height: 30, padding: 0 }}
          onClick={() => {
            alert("learn more clicked");
          }}
        >
          learn more
        </Button>
        <Button
          variant="text"
          color="primary"
          sx={{ width: 80, height: 30, padding: 0 }}
          onClick={() => setOpen(false)}
        >
          close
        </Button>
      </>
    );

    return (
      <RichTooltip
        placement="right-start"
        {...args}
        open={open}
        onOpen={handleOpen}
        // onClose={() => setOpen(false)}
        actions={localActions}
      >
        <Button>Hover to open</Button>
      </RichTooltip>
    );
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true,
  },
};

export const Uncontrolled: Story = {
  render: (args) => {
    const localActions = (
      <>
        <Button
          variant="text"
          color="primary"
          sx={{ width: 80, height: 30, padding: 0 }}
          onClick={() => {
            alert("learn more clicked");
          }}
        >
          learn more
        </Button>
      </>
    );

    return (
      <RichTooltip placement="right-start" {...args} actions={localActions}>
        <Button>Hover to open</Button>
      </RichTooltip>
    );
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true,
    disableInteractive: false,
  },
};
