import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Tooltip } from "../../components/Atom/Tooltip/Tooltip";
import { IconButton } from "../../components/Atom/Button/IconButton";
import { Taxi } from "phosphor-react";

const meta: Meta<typeof Tooltip> = {
  title: "components/Atoms/Tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    arrow: {
      control: "boolean",
    },
  },
  args: {
    // onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Label: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <IconButton>
        <Taxi />
      </IconButton>
    </Tooltip>
  ),
  args: {
    arrow: true,
    title: "Label",
    placement: "bottom",
  },
};
