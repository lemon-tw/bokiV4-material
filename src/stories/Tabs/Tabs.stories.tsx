import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components/Modules/Tabs/Tabs";
import type { CustomTabsProps } from "../../types/tabsExtends";
// import {
//   FcSteam,
//   FcStart,
//   FcCamera,
//   FcAdvertising,
//   FcAlphabeticalSortingAz,
// } from "react-icons/fc";
import {
  YoutubeLogo,
  GameController,
  Camera,
  SpotifyLogo,
  SortAscending,
} from "phosphor-react";

const textAndIcon = [
  { label: "影片", value: "video", icon: <YoutubeLogo size={32} /> },
  { label: "相片", value: "photos", icon: <Camera size={32} /> },
  { label: "音訊", value: "audio", icon: <SpotifyLogo size={32} /> },
  { label: "遊戲", value: "game", icon: <GameController size={32} /> },
  {
    label: "文字",
    value: "text",
    icon: <SortAscending size={32} />,
    disabled: true,
  },
];

const onlyIcon = [
  { label: "", value: "video", icon: <YoutubeLogo size={32} /> },
  { label: "", value: "photos", icon: <Camera size={32} /> },
  { label: "", value: "audio", icon: <SpotifyLogo size={32} /> },
  { label: "", value: "game", icon: <GameController size={32} /> },
  {
    label: "",
    value: "text",
    icon: <SortAscending size={32} />,
    disabled: true,
  },
];

const onlyText = [
  { label: "影片", value: "video" },
  { label: "相片", value: "photos" },
  { label: "音訊", value: "audio" },
  { label: "遊戲", value: "game" },
  { label: "文字", value: "text", disabled: true },
];

const optionsMap = {
  "文字+icon": textAndIcon,
  只有icon: onlyIcon,
  只有文字: onlyText,
};

const meta: Meta<typeof Tabs> = {
  title: "components/Modules/Tabs/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    indicatorColor: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    variant: {
      control: { type: "select" },
      options: ["standard", "fullWidth"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["start", "end", "top", "bottom"],
    },
    value: { control: "text" },
    options: {
      control: { type: "select" },
      options: Object.keys(optionsMap), // ['文字+icon', '只有icon', '只有文字']
      mapping: optionsMap, // 這裡對應到實際資料
      labels: {
        "文字+icon": "文字+icon",
        只有icon: "只有icon",
        只有文字: "只有文字",
      },
    },
  },
  args: {
    indicatorColor: "primary",
    variant: "standard",
    options: [
      { label: "", value: "video", icon: <YoutubeLogo size={32} /> },
      { label: "", value: "photos", icon: <Camera size={32} /> },
      { label: "", value: "audio", icon: <SpotifyLogo size={32} /> },
      { label: "", value: "game", icon: <GameController size={32} /> },
      {
        label: "",
        value: "text",
        icon: <SortAscending size={32} />,
        disabled: true,
      },
    ],
    value: "video",
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const InteractiveTemplate = (args: CustomTabsProps) => {
  const [value, setValue] = React.useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };

  return (
    <div style={{ width: "100%" }}>
      <Tabs {...args} value={value} onChange={handleChange} />
    </div>
  );
};

export const Standard: Story = {
  render: (args) => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: `
import { Tabs } from '@lemon/material';
// icon 可任意替換
import { YoutubeLogo, TwitchLogo, Camera, SpotifyLogo, SortAscending } from "phosphor-react"

const data = [
  { label: '影片', value: 'video', icon: <YoutubeLogo size={32} /> },
  { label: '相片', value: 'photos', icon: <Camera size={32} /> },
  { label: '音訊', value: 'audio', icon: <SpotifyLogo size={32} /> },
  { label: '遊戲', value: 'game', icon: <TwitchLogo size={32} /> },
  { label: '文字', value: 'text', icon: <SortAscending size={32} />, disabled: true },
]

<Tabs
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
