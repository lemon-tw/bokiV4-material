import MuiStepper, { StepperProps } from "@mui/material/Stepper";

export const Stepper = ({ children, ...rest }: StepperProps) => (
  <MuiStepper {...rest}>{children}</MuiStepper>
);
