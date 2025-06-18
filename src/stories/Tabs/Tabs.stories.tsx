import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomTabs } from '../../components/Atom/Tabs/Tabs';
import type { CustomTabsProps } from '../../types/tabs';
import { FcSteam, FcStart, FcCamera, FcAdvertising, FcAlphabeticalSortingAz } from "react-icons/fc";

const textAndIcon = [
    { label: '影片', value: 'video', icon: <FcStart size={32} /> },
    { label: '相片', value: 'photos', icon: <FcCamera size={32} /> },
    { label: '音訊', value: 'audio', icon: <FcAdvertising size={32} /> },
    { label: '遊戲', value: 'game', icon: <FcSteam size={32} /> },
    { label: '文字', value: 'text', icon: <FcAlphabeticalSortingAz size={32} />, disabled: true },
]

const onlyIcon = [
    { label: '', value: 'video', icon: <FcStart size={32} /> },
    { label: '', value: 'photos', icon: <FcCamera size={32} /> },
    { label: '', value: 'audio', icon: <FcAdvertising size={32} /> },
    { label: '', value: 'game', icon: <FcSteam size={32} /> },
    { label: '', value: 'text', icon: <FcAlphabeticalSortingAz size={32} />, disabled: true },
]

const onlyText = [
    { label: '影片', value: 'video' },
    { label: '相片', value: 'photos' },
    { label: '音訊', value: 'audio' },
    { label: '遊戲', value: 'game' },
    { label: '文字', value: 'text', disabled: true },
]

const meta: Meta<typeof CustomTabs> = {
    title: 'components/tabs/Tabs',
    component: CustomTabs,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ["autodocs"],
    argTypes: {
        indicatorColor: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
        },
        variant: {
            control: { type: 'select' },
            options: ['standard', 'fullWidth'],
        },
        iconPosition: {
            control: { type: 'select' },
            options: ['start', 'end', 'top', 'bottom'],
        },
        value: { control: 'text' },
        options: {
            control: { type: 'select' },
            options: {
                '文字+icon': textAndIcon,
                '只有icon': onlyIcon,
                '只有文字': onlyText,
            },
        }
    },
    args: {
        indicatorColor: 'primary',
        variant: 'standard',
        options: [
            { label: '', value: 'video', icon: <FcStart size={32} /> },
            { label: '', value: 'photos', icon: <FcCamera size={32} /> },
            { label: '', value: 'audio', icon: <FcAdvertising size={32} /> },
            { label: '', value: 'game', icon: <FcSteam size={32} /> },
            { label: '', value: 'text', icon: <FcAlphabeticalSortingAz size={32} />, disabled: true },
        ],
        value: 'video',
        onChange: () => { },
    },
};

export default meta;

type Story = StoryObj<typeof CustomTabs>;

const InteractiveTemplate = (args: CustomTabsProps) => {
    const [value, setValue] = React.useState(args.value);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        args.onChange?.(newValue);
    };

    return (
        <div style={{ width: '100%' }}>
            <CustomTabs {...args} value={value} onChange={handleChange} />
        </div>
    );
};

export const Standard: Story = {
    render: (args) => <InteractiveTemplate {...args} />,
    parameters: {
        docs: {
            source: {
                code: `
// icon 可任意替換
import { 
  FcSteam, 
  FcStart, 
  FcCamera, 
  FcAdvertising, 
  FcAlphabeticalSortingAz } 
from "react-icons/fc";

const data = [
  { label: '影片', value: 'video', icon: <FcStart size={32} /> },
  { label: '相片', value: 'photos', icon: <FcCamera size={32} /> },
  { label: '音訊', value: 'audio', icon: <FcAdvertising size={32} /> },
  { label: '遊戲', value: 'game', icon: <FcSteam size={32} /> },
  { label: '文字', value: 'text', icon: <FcAlphabeticalSortingAz size={32} />, disabled: true },
]

<CustomTabs
  options={data}
  value={value}
  onChange={setValue}
  indicatorColor="primary"
  variant="standard"
  iconPosition="start"
/>

                `.trim(),
            },
        },
    },
};
