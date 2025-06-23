import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from './Radio'; // 你先前自訂的 Radio 元件
import type { CustomRadioGroupProps } from '../../../types/radioExtends';

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
                        control={<Radio color={color} />}
                        label={option.label}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};
