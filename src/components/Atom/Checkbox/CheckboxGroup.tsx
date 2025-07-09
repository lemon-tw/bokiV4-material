import React from "react";
import Checkbox from "./Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckboxGroupProps } from "../../../types/checkboxExtends";

// 定義 Render Props 的類型
interface CheckboxGroupRenderProps extends Omit<CheckboxGroupProps, 'parentLabel'> {
    // 自定義父層渲染函式 (可選)
    renderParent?: (props: {
        label: string;                    // 父層標籤文字
        checked: boolean;                 // 是否全選
        indeterminate: boolean;           // 是否為部分選取狀態
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 父層變更回調
    }) => React.ReactNode;

    // 自定義子層渲染函式 (可選)
    renderChild?: (props: {
        label: string;                    // 子項目標籤文字
        checked: boolean;                 // 子項目是否被選取
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 子項目變更回調
        index: number;                    // 子項目索引
    }) => React.ReactNode;

    parentLabel?: string;               // 父層標籤文字 (預設值)
}

export const CheckboxGroup: React.FC<CheckboxGroupRenderProps> = ({
    labels,                             // 子項目標籤陣列
    parentLabel = "全選",               // 父層標籤預設值
    renderParent,                       // 自定義父層渲染函式
    renderChild                         // 自定義子層渲染函式
}) => {
    // 狀態管理：用布林陣列管理每個子項目的選取狀態
    const [checked, setChecked] = React.useState<boolean[]>(
        Array(labels.length).fill(false)
    );

    // 計算父層狀態
    const allChecked = checked.every(Boolean);        // 是否全選
    const someChecked = checked.some(Boolean);        // 是否有部分選取
    const indeterminate = someChecked && !allChecked; // 是否為 indeterminate 狀態

    // 父層切換處理函式
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 根據父層勾選狀態，設定所有子項目為相同狀態
        setChecked(Array(labels.length).fill(e.target.checked));
    };

    // 子層切換處理函式 (使用閉包返回特定索引的處理函式)
    const handleChildChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        // 複製當前狀態陣列
        const newChecked = [...checked];
        // 更新指定索引的狀態
        newChecked[idx] = e.target.checked;
        // 設定新的狀態
        setChecked(newChecked);
    };

    // 預設父層渲染邏輯 (如果沒有提供 renderParent 時使用)
    const defaultParentRender = (props: {
        label: string;
        checked: boolean;
        indeterminate: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => (
        <FormControlLabel
            label={props.label}
            control={
                <Checkbox
                    checked={props.checked}
                    indeterminate={props.indeterminate}
                    onChange={props.onChange}
                />
            }
        />
    );

    // 預設子層渲染邏輯 (如果沒有提供 renderChild 時使用)
    const defaultChildRender = (props: {
        label: string;
        checked: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        index: number;
    }) => (
        <FormControlLabel
            key={props.label}
            label={props.label}
            control={
                <Checkbox
                    style={{ marginLeft: "48px" }}  // 預設左邊距
                    checked={props.checked}
                    onChange={props.onChange}
                />
            }
        />
    );

    // 渲染父層元件 (優先使用自定義渲染函式，否則使用預設)
    const parentComponent = renderParent ? renderParent({
        label: parentLabel,
        checked: allChecked,
        indeterminate,
        onChange: handleParentChange
    }) : defaultParentRender({
        label: parentLabel,
        checked: allChecked,
        indeterminate,
        onChange: handleParentChange
    });

    // 渲染子層元件陣列 (優先使用自定義渲染函式，否則使用預設)
    const childComponents = labels.map((label, idx) => {
        const childProps = {
            label,
            checked: checked[idx],
            onChange: handleChildChange(idx),
            index: idx
        };

        return renderChild ? renderChild(childProps) : defaultChildRender(childProps);
    });

    // 返回完整的元件結構
    return (
        <>
            {parentComponent}
            {childComponents}
        </>
    );
};

export default CheckboxGroup;
