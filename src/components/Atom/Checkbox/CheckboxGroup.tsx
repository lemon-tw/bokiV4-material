import React from "react";
import Checkbox from "./Checkbox"; // 你的自定義 Checkbox 元件
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckboxGroupProps } from "../../../types/checkboxExtends";



export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    labels,
    parentLabel = "全選",
}) => {
    // 用陣列管理子項目勾選狀態
    const [checked, setChecked] = React.useState<boolean[]>(
        Array(labels.length).fill(false)
    );

    // 父層狀態計算
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;

    // 父層切換
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(Array(labels.length).fill(e.target.checked));
    };

    // 子層切換
    const handleChildChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = [...checked];
        newChecked[idx] = e.target.checked;
        setChecked(newChecked);
    };

    return (
        <ul style={{ listStyle: "none" }}>
            <li>
                <FormControlLabel
                    label={parentLabel}
                    control={
                        <Checkbox
                            checked={allChecked}
                            indeterminate={indeterminate}
                            onChange={handleParentChange}
                        />
                    }
                />
            </li>
            {labels.map((label, idx) => (
                <li key={label}>
                    <FormControlLabel
                        label={label}
                        control={
                            <Checkbox
                                style={{ marginLeft: "48px" }}
                                checked={checked[idx]}
                                onChange={handleChildChange(idx)}
                            />
                        }
                    />
                </li>
            ))}
        </ul>
    );
};

export default CheckboxGroup;
