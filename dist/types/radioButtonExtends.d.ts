import { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
export type CustomRadioColor = "primary";
export interface CustomRadioProps extends Omit<MuiRadioProps, 'color'> {
    color?: CustomRadioColor;
    label?: string;
}
export interface CustomRadioGroupProps extends Omit<MuiRadioGroupProps, 'color'> {
    options: {
        label: string;
        value: string;
    }[];
    color?: 'primary';
    label?: string;
}
