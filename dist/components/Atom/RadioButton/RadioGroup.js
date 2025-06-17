import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButton from './RadioButton'; // 你先前自訂的 RadioButton 元件
export const RadioGroup = ({ options, color = 'primary', label, value, onChange, ...rest }) => {
    return (_jsxs(FormControl, { component: "fieldset", children: [label && _jsx(FormLabel, { component: "legend", children: label }), _jsx(MuiRadioGroup, { value: value, onChange: onChange, ...rest, children: options.map((option) => (_jsx(FormControlLabel, { value: option.value, control: _jsx(RadioButton, { color: color }), label: option.label }, option.value))) })] }));
};
