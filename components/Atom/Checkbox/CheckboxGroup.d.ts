import { default as React } from '../../../../node_modules/react';
import { CheckboxGroupProps } from '../../../types/checkboxExtends';
interface CheckboxGroupRenderProps extends Omit<CheckboxGroupProps, 'parentLabel'> {
    renderParent?: (props: {
        label: string;
        checked: boolean;
        indeterminate: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
    renderChild?: (props: {
        label: string;
        checked: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        index: number;
    }) => React.ReactNode;
    parentLabel?: string;
}
export declare const CheckboxGroup: React.FC<CheckboxGroupRenderProps>;
export default CheckboxGroup;
