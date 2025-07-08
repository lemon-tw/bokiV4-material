import React from "react";
import { Checkbox } from "./Checkbox";
import { TreeNode, CheckboxTreeProps } from "../../../types/checkboxExtends";

// 遞迴勾選框樹狀元件
// @param {CheckboxTreeProps} props - 元件屬性
// @returns {JSX.Element} 樹狀結構勾選框元件
export const CheckboxTree: React.FC<CheckboxTreeProps> = ({
    data,
    checkedKeys = [],
    onChecked,
}) => {
    // 處理節點勾選狀態變化
    // @param {TreeNode} node - 當前節點
    // @param {boolean} isChecked - 新的勾選狀態
    const handleCheck = (node: TreeNode, isChecked: boolean) => {
        const allKeys = getAllNodeKeys(node);
        const newChecked = isChecked
            ? [...new Set([...checkedKeys, ...allKeys])]
            : checkedKeys.filter(key => !allKeys.includes(key));

        onChecked?.(newChecked);
    };

    // 正確的 isChecked 邏輯
    const isChecked = (node: TreeNode): boolean => {
        // 如果是葉子節點，直接檢查是否在 checkedKeys 中
        if (!node.children || node.children.length === 0) {
            return checkedKeys.includes(node.id);
        }

        // 如果是父節點，檢查所有直接子節點是否都被勾選
        return node.children.every(child => isChecked(child));
    };

    // 正確的 isIndeterminate 邏輯
    const isIndeterminate = (node: TreeNode): boolean => {
        // 葉子節點不會有 indeterminate 狀態
        if (!node.children || node.children.length === 0) {
            return false;
        }

        // 檢查直接子節點的狀態
        const childStates = node.children.map(child => ({
            checked: isChecked(child),
            indeterminate: isIndeterminate(child)
        }));

        // 如果任何子節點處於 indeterminate 狀態，父節點也應該是 indeterminate
        if (childStates.some(state => state.indeterminate)) {
            return true;
        }

        // 檢查是否有部分子節點被勾選
        const checkedCount = childStates.filter(state => state.checked).length;
        return checkedCount > 0 && checkedCount < childStates.length;
    };

    // 遞迴取得節點及其所有子節點ID
    // @param {TreeNode} node - 起始節點
    // @returns {string[]} 所有節點ID陣列 
    const getAllNodeKeys = (node: TreeNode): string[] => {
        let keys = [node.id];
        node.children?.forEach(child => {
            keys = [...keys, ...getAllNodeKeys(child)];
        });
        return keys;
    };

    // 遞迴渲染樹狀結構
    // @param {TreeNode[]} nodes - 要渲染的節點陣列
    // @returns {JSX.Element[]} 渲染結果
    // 在 renderTree 中，動態傳入 checked 和 indeterminate
    const renderTree = (nodes: TreeNode[]): React.JSX.Element[] => {
        return nodes.map(node => (
            <div key={node.id} style={{ marginLeft: '24px' }}>
                <Checkbox
                    label={node.label}
                    checked={isChecked(node)}
                    indeterminate={isIndeterminate(node)}
                    onChange={(e) => handleCheck(node, e.target.checked)}
                />
                {node.children && renderTree(node.children)}
            </div>
        ));
    };

    return <div>{renderTree(data)}</div>;
};
