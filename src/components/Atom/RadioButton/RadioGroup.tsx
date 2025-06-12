import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButton from './RadioButton'; // 你先前自訂的 RadioButton 元件
import type { CustomRadioGroupProps } from '../../../types/radioButtonExtends';

export const RadioGroup: React.FC<CustomRadioGroupProps> = ({
    options,
    color = 'primary',
    label,
    value,
    onChange,
    ...rest
}) => {
    return (
        <FormControl component="fieldset">
            {label && <FormLabel component="legend">{label}</FormLabel>}
            <MuiRadioGroup value={value} onChange={onChange} {...rest}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<RadioButton color={color} />}
                        label={option.label}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};

// export default RadioGroup;
