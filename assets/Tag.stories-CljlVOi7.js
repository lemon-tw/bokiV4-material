import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-B7Qis2N-.js";import{j as C,k as h,l as y,m as v,n as w}from"./Calendar-Dz27vJYN.js";import"./Alert-ClZS_Bwn.js";import"./Avatar-BQ2BYgfS.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-CsM0VLsM.js";import"./Typography-BZQ6nlo4.js";import{o as I}from"./zh-tw-D5QUe-nd.js";import{b}from"./CheckCircle.es-BXMbO79g.js";import"./index-D4H_InIO.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./Cart-DkCEB5Ch.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const t={Bed:o.jsx(I,{size:24}),UsersThree:o.jsx(w,{size:24}),CornersOut:o.jsx(v,{size:24}),CheckCircle:o.jsx(b,{size:24,weight:"fill"}),Prohibit:o.jsx(y,{size:24}),BowlFoodIcon:o.jsx(h,{size:24,weight:"fill"}),none:null},uo={title:"components/Atoms/Tag/Tag",component:C,parameters:{layout:"centered",docs:{description:{component:`
使用時傳入的 label 可以直接傳入 ReactNode
如果需要部分文字不同顏色或是其他效果可以直接在標籤修改style 或是 className
        `}}},tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:{type:"radio"},options:["primary","neutral","warning","danger","success"],labels:{primary:"Primary",neutral:"Neutral",warning:"Warning",danger:"Danger",success:"Success"}},size:{control:{type:"radio"},options:["small","medium","large"],description:"設定 Tag 的尺寸大小"},variant:{control:{type:"radio"},options:["solid","outlined"]},onlyText:{control:"boolean"},icon:{options:Object.keys(t),mapping:t,control:{type:"radio",labels:{Bed:"床鋪",UsersThree:"住客",CornersOut:"客房",BowlFoodIcon:"早餐",CheckCircle:"成功",Prohibit:"禁止",none:"無"}},description:"選擇標籤 icon"},disabled:{control:"boolean"}},args:{label:"Tag 標籤",color:"primary",variant:"solid",onlyText:!1,disabled:!1,icon:void 0,size:"medium"}},r={args:{label:"Default",color:"primary",variant:"solid"},parameters:{docs:{source:{code:`
import Tag from '@lemon/material/Tag';

<Tag
  label="Default"
  color="primary"
  variant="solid"
/>
        `.trim()}}}},e={args:{label:"含早餐",color:"success",variant:"solid",icon:o.jsx(h,{weight:"fill"}),onlyText:!0},parameters:{docs:{source:{code:`
import Tag from '@lemon/material/Tag';
import { BowlFoodIcon } from "@phosphor-icons/react";

<Tag
  label: "含早餐",
  color: "success",
  variant: "solid",
  icon: <BowlFoodIcon weight="fill" />,
  onlyText: true
/>
        `.trim()}}}},n={args:{label:"不含早餐",color:"neutral",variant:"solid",icon:o.jsx(y,{}),onlyText:!0},parameters:{docs:{source:{code:`
import Tag from '@lemon/material/Tag';
import { ProhibitIcon } from "@phosphor-icons/react";

<Tag
  label: "不含早餐",
  color: "neutral",
  variant: "solid",
  icon: <ProhibitIcon />,
  onlyText: true
/>
        `.trim()}}}},j="2025/3/28";function N(){return o.jsxs("span",{children:["免費取消 ",o.jsxs("span",{style:{color:"#818181"},children:[j," 前"]})]})}const a={args:{label:o.jsx(N,{}),color:"success",variant:"solid",icon:o.jsx(b,{weight:"fill"}),onlyText:!0},parameters:{docs:{description:{story:"使用時傳入的 label 可以直接傳入 ReactNode 如果需要部分文字不同顏色或是其他效果可以直接在標籤修改style 或是 className"},source:{code:`
import Tag from '@lemon/material/Tag';
import { CheckCircleIcon } from "@phosphor-icons/react";

const date = "2025/3/28"

function MixColorText() {
  return (<span>
    免費取消{" "}
    {/* 需要自定義不同顏色的直接寫 style 或是 className */}
    <span style={{ color: "#818181" }}>{date} 前</span>
  </span>);
}

<Tag
  // label 屬性支援 ReactNode
  label: <MixColorIcon />,
  color: "success",
  variant: "solid",
  icon: <CheckCircle weight="fill" />,
  onlyText: true
/>
        `.trim()}}}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Default",
    color: "primary",
    variant: "solid"
  },
  parameters: {
    docs: {
      source: {
        code: \`
import Tag from '@lemon/material/Tag';

<Tag
  label="Default"
  color="primary"
  variant="solid"
/>
        \`.trim()
      }
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "含早餐",
    color: "success",
    variant: "solid",
    icon: <BowlFoodIcon weight="fill" />,
    onlyText: true
  },
  parameters: {
    docs: {
      source: {
        code: \`
import Tag from '@lemon/material/Tag';
import { BowlFoodIcon } from "@phosphor-icons/react";

<Tag
  label: "含早餐",
  color: "success",
  variant: "solid",
  icon: <BowlFoodIcon weight="fill" />,
  onlyText: true
/>
        \`.trim()
      }
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "不含早餐",
    color: "neutral",
    variant: "solid",
    icon: <ProhibitIcon />,
    onlyText: true
  },
  parameters: {
    docs: {
      source: {
        code: \`
import Tag from '@lemon/material/Tag';
import { ProhibitIcon } from "@phosphor-icons/react";

<Tag
  label: "不含早餐",
  color: "neutral",
  variant: "solid",
  icon: <ProhibitIcon />,
  onlyText: true
/>
        \`.trim()
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,f,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: <MixColorText />,
    color: "success",
    variant: "solid",
    icon: <CheckCircleIcon weight="fill" />,
    onlyText: true
  },
  parameters: {
    docs: {
      description: {
        story: "使用時傳入的 label 可以直接傳入 ReactNode 如果需要部分文字不同顏色或是其他效果可以直接在標籤修改style 或是 className"
      },
      source: {
        code: \`
import Tag from '@lemon/material/Tag';
import { CheckCircleIcon } from "@phosphor-icons/react";

const date = "2025/3/28"

function MixColorText() {
  return (<span>
    免費取消{" "}
    {/* 需要自定義不同顏色的直接寫 style 或是 className */}
    <span style={{ color: "#818181" }}>{date} 前</span>
  </span>);
}

<Tag
  // label 屬性支援 ReactNode
  label: <MixColorIcon />,
  color: "success",
  variant: "solid",
  icon: <CheckCircle weight="fill" />,
  onlyText: true
/>
        \`.trim()
      }
    }
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const go=["Default","HasBreakfast","NoBreakfast","MixColor"];export{r as Default,e as HasBreakfast,a as MixColor,n as NoBreakfast,go as __namedExportsOrder,uo as default};
