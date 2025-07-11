import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../../components/Atom/DatePicker/DatePicker";

// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

const meta: Meta<typeof DatePicker> = {
  title: "components/Atoms/DatePicker/DatePicker",
  component: DatePicker,
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

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    return (
      <DatePicker
        defaultValue={dayjs()}
        slotProps={{
          textField: {
            helperText: "MM/DD/YYYY",
          },
        }}
      />
    );
  },
};
