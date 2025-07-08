import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useTheme } from "@mui/material";

import { MobileStepper } from "../../components/Modules/Stepper/MobileStepper";
import Box from "@mui/material/Box";
import { Button } from "../../components/Atom/Button/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CaretLeft, CaretRight } from "phosphor-react";

const meta: Meta<typeof MobileStepper> = {
  title: "components/Modules/Stepper/MobileStepper",
  component: MobileStepper,
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

type Story = StoryObj<typeof MobileStepper>;

export const Text: Story = {
  render: (args) => {
    const steps = [
      {
        label: "Select campaign settings",
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
      },
      {
        label: "Create an ad group",
        description:
          "An ad group contains one or more ads which target a shared set of keywords.",
      },
      {
        label: "Create an ad",
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
      },
    ];
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              variant="text"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? <CaretLeft /> : <CaretRight />}
            </Button>
          }
          backButton={
            <Button
              variant="text"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? <CaretRight /> : <CaretLeft />}
              Back
            </Button>
          }
        />
      </Box>
    );
  },
};

export const Dots: Story = {
  render: (args) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
            variant="text"
            onClick={handleNext}
            disabled={activeStep === 5}
          >
            Next
            {theme.direction === "rtl" ? <CaretLeft /> : <CaretRight />}
          </Button>
        }
        backButton={
          <Button
            variant="text"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? <CaretRight /> : <CaretLeft />}
            Back
          </Button>
        }
      />
    );
  },
};
export const Progress: Story = {
  render: (args) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 800, flexGrow: 1 }}
        nextButton={
          <Button
            variant="text"
            onClick={handleNext}
            disabled={activeStep === 5}
            sx={{ width: "140px" }}
          >
            Next
            {theme.direction === "rtl" ? <CaretLeft /> : <CaretRight />}
          </Button>
        }
        backButton={
          <Button
            variant="text"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ width: "140px" }}
          >
            {theme.direction === "rtl" ? <CaretRight /> : <CaretLeft />}
            Back
          </Button>
        }
      />
    );
  },
};
