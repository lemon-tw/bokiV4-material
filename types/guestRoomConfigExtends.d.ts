import { PopoverProps } from '@mui/material';
export interface GuestRoomConfigProps extends PopoverProps {
    /** 是否顯示包棟選項   */
    showMultiRoomPackage?: boolean;
    isMultiRoomPackage?: boolean;
    setIsMultiRoomPackage?: React.Dispatch<React.SetStateAction<boolean>>;
    numRooms: number;
    setNumRooms: React.Dispatch<React.SetStateAction<number>>;
    /** 是否顯示長青者選項   */
    showSeniors?: boolean;
    seniors?: number;
    setSeniors?: React.Dispatch<React.SetStateAction<number>>;
    /** 長青者年齡層標準   */
    seniorsAge?: number;
    seniorsArray?: number[];
    setSeniorsArray?: React.Dispatch<React.SetStateAction<number[]>>;
    /** 是否顯示孩童選項   */
    showChildrens?: boolean;
    childrens?: number;
    setChildrens?: React.Dispatch<React.SetStateAction<number>>;
    /** 孩童年齡層標準   */
    childrensAge?: number;
    /** 孩童身高標準   */
    childrensHeight?: number;
    /** 孩童評斷標準   */
    childrensSelectorType?: "age" | "height";
    childrensArray?: (number | boolean)[];
    setChildrensArray?: React.Dispatch<React.SetStateAction<(number | boolean)[]>>;
    adults: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    /** 是否顯示各選項年齡層   */
    showAge?: boolean;
    withPet: boolean;
    setWithPet: React.Dispatch<React.SetStateAction<boolean>>;
    accessibleRoom: boolean;
    setAccessibleRoom: React.Dispatch<React.SetStateAction<boolean>>;
}
