import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import{p as S}from"./defaultPalette-fWaDn0-C.js";import{s as C}from"./memoTheme-DQLz_w2O.js";import{B as c}from"./Box-C_5lmZ5e.js";import{T as m}from"./Typography-C85nDkcq.js";import{T as j,t as d}from"./Tooltip-DDsPmqJS.js";import{B as i}from"./Button-pE6AYnd6.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./useTheme-BbNP3OZZ.js";import"./extendSxProp-DpymScOI.js";import"./index-C1j4tvSs.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-Bm8UbI65.js";import"./useTheme-D4Xi4orm.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./useControlled-DIa7s2dv.js";import"./useId-CN9_kA9R.js";import"./Portal-C9xN9Xr4.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Grow-CfgsmfYz.js";import"./utils-BcbCFGQY.js";import"./Popper-B4jsEv0b.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BPmQKDpQ.js";import"./ButtonBase-xXEST84h.js";import"./Button-Csa5v2_p.js";import"./CircularProgress-Ca9LbOKf.js";const v=(e,o="primary")=>{var s;const r=S[o],n=((s=e==null?void 0:e.palette)==null?void 0:s[o])??r;return{bgColor:n.elevated??r.elevated,fontColor:n.iconFont??r.iconFont}},R=C(({className:e,...o})=>t.jsx(j,{...o,classes:{popper:e}}))(({theme:e})=>{const o=v(e);return{[`& .${d.tooltip}`]:{backgroundColor:o.bgColor,color:o.fontColor,fontSize:13,fontFamily:"Noto Sans, Noto Sans TC, sans-serif",fontWeight:400,padding:"10px",borderRadius:"12px",boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"},[`& .${d.arrow}`]:{color:o.bgColor,"&::before":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}}}}),p=({title:e,content:o,actions:r,...n})=>t.jsx(R,{...n,title:t.jsxs(c,{children:[e&&t.jsx(m,{fontWeight:500,fontSize:14,fontFamily:"Noto Sans",children:e}),o&&t.jsx(m,{fontSize:14,fontFamily:"Noto Sans",children:o}),r&&t.jsx(c,{display:"flex",gap:2,children:r})]})});p.__docgenInfo={description:"",methods:[],displayName:"RichTooltip",props:{content:{required:!1,tsType:{name:"string"},description:"RichhTooltip 的內文"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"actions 接收 ReactNode，可以用 Button、Link 等"},disableInteractive:{required:!1,tsType:{name:"boolean"},description:"false時讓滑鼠可以「進入 tooltip 裡面」不會直接關閉它"}},composes:["MuiTooltipProps"]};const nt={title:"components/Atoms/Tooltip/RichTooltip",component:p,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},a={render:e=>{const[o,r]=y.useState(!1),n=()=>{r(!0)},s=t.jsxs(t.Fragment,{children:[t.jsx(i,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(i,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>r(!1),children:"close"})]});return t.jsx(p,{placement:"right-start",...e,open:o,onOpen:n,actions:s,children:t.jsx(i,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},l={render:e=>{const o=t.jsx(t.Fragment,{children:t.jsx(i,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(p,{placement:"right-start",...e,actions:o,children:t.jsx(i,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const localActions = <>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>\r
          learn more\r
        </Button>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => setOpen(false)}>\r
          close\r
        </Button>\r
      </>;
    return <RichTooltip placement="right-start" {...args} open={open} onOpen={handleOpen}
    // onClose={() => setOpen(false)}
    actions={localActions}>\r
        <Button>Hover to open</Button>\r
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const localActions = <>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>\r
          learn more\r
        </Button>\r
      </>;
    return <RichTooltip placement="right-start" {...args} actions={localActions}>\r
        <Button>Hover to open</Button>\r
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true,
    disableInteractive: false
  }
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const it=["Controlled","Uncontrolled"];export{a as Controlled,l as Uncontrolled,it as __namedExportsOrder,nt as default};
