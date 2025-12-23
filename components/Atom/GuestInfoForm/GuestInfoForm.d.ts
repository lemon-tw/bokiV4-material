import { default as React } from '../../../../node_modules/react';
export type GuestInfoValues = {
    lastName: string;
    firstName: string;
    salute: string;
    dialCode: string;
    phone: string;
    email: string;
    country: string;
    city: string;
    idType: string;
    idNumber: string;
};
export type FrequentOption = {
    id: string;
    label: string;
};
type GuestInfoFormProps = {
    title: string;
    values: GuestInfoValues;
    onChange: (field: keyof GuestInfoValues, value: string) => void;
    showValidation?: boolean;
    renderErrorIcon?: (show: boolean) => React.ReactNode;
    extraHeaderContent?: React.ReactNode;
    showBirthDate?: boolean;
    birthDate?: string;
    onBirthDateChange?: (value: string) => void;
    showUpdateMember?: boolean;
    updateMemberChecked?: boolean;
    onUpdateMemberChange?: (checked: boolean) => void;
    updateMemberHelperText?: string;
    showSaveFrequent?: boolean;
    saveFrequentChecked?: boolean;
    onSaveFrequentChange?: (checked: boolean) => void;
    saveFrequentHelperText?: string;
};
export declare const GuestInfoForm: React.FC<GuestInfoFormProps>;
export default GuestInfoForm;
