import{j as t}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-D8Y1J3Ig.js";import"./Cart-qIvgB5t4.js";import{T as r}from"./Profile-kW0Qm_sa.js";import"./Calendar-B-s2EpR5.js";import"./BottomModal-CSbStmmY.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-3QJ_VXVD.js";import"./Copy.es-WJ0Du8LM.js";import"./getThemeProps-BCfUtUYi.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-C-KGOsN8.js";const k={title:"components/Atoms/Typography/Typography",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{name:"文字內容",control:"text",description:"要顯示的文字內容"},variant:{name:"文字變體",control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","inherit"],description:"設定文字的樣式變體",table:{defaultValue:{summary:"body1"}}},color:{name:"文字顏色",control:{type:"select"},options:["primary","secondary","textPrimary","textSecondary","error","warning","info","success","inherit"],description:"設定文字的顏色",table:{defaultValue:{summary:"textPrimary"}}},align:{name:"文字對齊",control:{type:"radio"},options:["inherit","left","center","right","justify"],labels:{inherit:"繼承",left:"左對齊",center:"置中",right:"右對齊",justify:"兩端對齊"},description:"設定文字的對齊方式",table:{defaultValue:{summary:"inherit"}}},gutterBottom:{name:"底部間距",control:"boolean",description:"是否在底部添加間距",table:{defaultValue:{summary:""},category:"間距"}},noWrap:{name:"不換行",control:"boolean",description:"是否不換行並使用省略號",table:{defaultValue:{summary:""},category:"文字處理"}},component:{name:"HTML 標籤",control:{type:"select"},options:["p","div","span","h1","h2","h3","h4","h5","h6"],description:"自定義要渲染的 HTML 標籤",table:{defaultValue:{summary:"根據 variant 自動決定"},category:"HTML"}}},args:{children:"範例文字內容",variant:"body1",color:"textPrimary",align:"inherit",gutterBottom:!1,noWrap:!1}},o={args:{children:"預設文字樣式",variant:"body1",color:"textPrimary"},parameters:{docs:{source:{code:`
import Typography from '@lemon/material/Typography';

<Typography
  variant="body1"
  color="textPrimary"
>
  預設文字樣式
</Typography>
        `.trim()}}}},a={render:()=>t.jsxs("div",{style:{width:"600px"},children:[t.jsx(r,{variant:"h1",gutterBottom:!0,children:"標題 1 - 最大標題"}),t.jsx(r,{variant:"h2",gutterBottom:!0,children:"標題 2 - 次級標題"}),t.jsx(r,{variant:"h3",gutterBottom:!0,children:"標題 3 - 第三級標題"}),t.jsx(r,{variant:"h4",gutterBottom:!0,children:"標題 4 - 第四級標題"}),t.jsx(r,{variant:"h5",gutterBottom:!0,children:"標題 5 - 第五級標題"}),t.jsx(r,{variant:"h6",gutterBottom:!0,children:"標題 6 - 第六級標題"})]}),parameters:{docs:{source:{code:`
import Typography from '@lemon/material/Typography';

<Typography variant="h1" gutterBottom>
  標題 1 - 最大標題
</Typography>
<Typography variant="h2" gutterBottom>
  標題 2 - 次級標題
</Typography>
<Typography variant="h3" gutterBottom>
  標題 3 - 第三級標題
</Typography>
<Typography variant="h4" gutterBottom>
  標題 4 - 第四級標題
</Typography>
<Typography variant="h5" gutterBottom>
  標題 5 - 第五級標題
</Typography>
<Typography variant="h6" gutterBottom>
  標題 6 - 第六級標題
</Typography>
        `.trim()}}}},e={render:()=>t.jsxs("div",{style:{width:"500px"},children:[t.jsx(r,{variant:"subtitle1",gutterBottom:!0,children:"副標題 1 - 較大的副標題"}),t.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"副標題 2 - 較小的副標題"}),t.jsx(r,{variant:"body1",gutterBottom:!0,children:"正文 1 - 預設的正文樣式，適合大多數內容顯示"}),t.jsx(r,{variant:"body2",gutterBottom:!0,children:"正文 2 - 較小的正文樣式，適合次要內容"})]}),parameters:{docs:{source:{code:`
import Typography from '@lemon/material/Typography';

<Typography variant="subtitle1" gutterBottom>
  副標題 1 - 較大的副標題
</Typography>
<Typography variant="subtitle2" gutterBottom>
  副標題 2 - 較小的副標題
</Typography>
<Typography variant="body1" gutterBottom>
  正文 1 - 預設的正文樣式，適合大多數內容顯示
</Typography>
<Typography variant="body2" gutterBottom>
  正文 2 - 較小的正文樣式，適合次要內容
</Typography>
        `.trim()}}}},n={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#1976d2",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",fontWeight:"bold"},children:"L"}),t.jsx(r,{variant:"h6",component:"div",sx:{fontWeight:"bold"},children:"Lemon Hotel"})]}),parameters:{docs:{description:{story:"這是在 Header 元件中使用 Typography 的範例，展示品牌名稱的顯示效果。"},source:{code:`
import Typography from '@lemon/material/Typography';

<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <div style={{ 
    width: '40px', 
    height: '40px', 
    backgroundColor: '#1976d2', 
    borderRadius: '50%' 
  }}>
    {/* Logo */}
  </div>
  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
    Lemon Hotel
  </Typography>
</div>
        `.trim()}}}};var p,i,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "預設文字樣式",
    variant: "body1",
    color: "textPrimary"
  },
  parameters: {
    docs: {
      source: {
        code: \`
import Typography from '@lemon/material/Typography';

<Typography
  variant="body1"
  color="textPrimary"
>
  預設文字樣式
</Typography>
        \`.trim()
      }
    }
  }
}`,...(y=(i=o.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};var s,g,h;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "600px"
  }}>
      <Typography variant="h1" gutterBottom>
        標題 1 - 最大標題
      </Typography>
      <Typography variant="h2" gutterBottom>
        標題 2 - 次級標題
      </Typography>
      <Typography variant="h3" gutterBottom>
        標題 3 - 第三級標題
      </Typography>
      <Typography variant="h4" gutterBottom>
        標題 4 - 第四級標題
      </Typography>
      <Typography variant="h5" gutterBottom>
        標題 5 - 第五級標題
      </Typography>
      <Typography variant="h6" gutterBottom>
        標題 6 - 第六級標題
      </Typography>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
import Typography from '@lemon/material/Typography';

<Typography variant="h1" gutterBottom>
  標題 1 - 最大標題
</Typography>
<Typography variant="h2" gutterBottom>
  標題 2 - 次級標題
</Typography>
<Typography variant="h3" gutterBottom>
  標題 3 - 第三級標題
</Typography>
<Typography variant="h4" gutterBottom>
  標題 4 - 第四級標題
</Typography>
<Typography variant="h5" gutterBottom>
  標題 5 - 第五級標題
</Typography>
<Typography variant="h6" gutterBottom>
  標題 6 - 第六級標題
</Typography>
        \`.trim()
      }
    }
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var d,m,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "500px"
  }}>
      <Typography variant="subtitle1" gutterBottom>
        副標題 1 - 較大的副標題
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        副標題 2 - 較小的副標題
      </Typography>
      <Typography variant="body1" gutterBottom>
        正文 1 - 預設的正文樣式，適合大多數內容顯示
      </Typography>
      <Typography variant="body2" gutterBottom>
        正文 2 - 較小的正文樣式，適合次要內容
      </Typography>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
import Typography from '@lemon/material/Typography';

<Typography variant="subtitle1" gutterBottom>
  副標題 1 - 較大的副標題
</Typography>
<Typography variant="subtitle2" gutterBottom>
  副標題 2 - 較小的副標題
</Typography>
<Typography variant="body1" gutterBottom>
  正文 1 - 預設的正文樣式，適合大多數內容顯示
</Typography>
<Typography variant="body2" gutterBottom>
  正文 2 - 較小的正文樣式，適合次要內容
</Typography>
        \`.trim()
      }
    }
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px"
  }}>
      <div style={{
      width: "40px",
      height: "40px",
      backgroundColor: "#1976d2",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
        L
      </div>
      <Typography variant="h6" component="div" sx={{
      fontWeight: "bold"
    }}>
        Lemon Hotel
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "這是在 Header 元件中使用 Typography 的範例，展示品牌名稱的顯示效果。"
      },
      source: {
        code: \`
import Typography from '@lemon/material/Typography';

<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <div style={{ 
    width: '40px', 
    height: '40px', 
    backgroundColor: '#1976d2', 
    borderRadius: '50%' 
  }}>
    {/* Logo */}
  </div>
  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
    Lemon Hotel
  </Typography>
</div>
        \`.trim()
      }
    }
  }
}`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const I=["Default","Headings","SubtitlesAndBody","HeaderUsage"];export{o as Default,n as HeaderUsage,a as Headings,e as SubtitlesAndBody,I as __namedExportsOrder,k as default};
