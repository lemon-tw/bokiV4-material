import React from "react";
import { Checkbox } from "./Checkbox"; // 根據實際路徑調整
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

    // 判斷節點是否處於部分選中狀態(indeterminate)
    // @param {TreeNode} node - 要檢查的節點
    // @returns {boolean} 是否為部分選中狀態
    const isIndeterminate = (node: TreeNode): boolean => {
        const childKeys = getAllNodeKeys(node).slice(1);
        const hasChecked = childKeys.some(k => checkedKeys.includes(k));
        const allChecked = childKeys.every(k => checkedKeys.includes(k));
        return hasChecked && !allChecked;
    };

    // 遞迴渲染樹狀結構
    // @param {TreeNode[]} nodes - 要渲染的節點陣列
    // @returns {JSX.Element[]} 渲染結果
    const renderTree = (nodes: TreeNode[]): React.JSX.Element[] => {
        return nodes.map(node => (
            <div key={node.id} style={{ marginLeft: '24px' }}>
                <Checkbox
                    label={node.label}
                    checked={checkedKeys.includes(node.id)}
                    indeterminate={isIndeterminate(node)}
                    onChange={(e) => handleCheck(node, e.target.checked)}
                />
                {node.children && renderTree(node.children)}
            </div>
        ));
    };
    return <div>{renderTree(data)}</div>;
};
