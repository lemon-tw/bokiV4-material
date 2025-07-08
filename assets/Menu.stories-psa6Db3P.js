import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as C,R as n}from"./index-D4H_InIO.js";import{s as M}from"./memoTheme-DkEl0Jev.js";import{M as f}from"./Menu-wCs4t9Vd.js";import{p as b}from"./defaultPalette-CDIRQpAz.js";import{M as k,D as E,L as g,a as y}from"./MenuItem-CuYrXn3_.js";import{a as T}from"./DefaultPropsProvider-DqVT3Pki.js";import{B as L}from"./Button-BOEVMV6G.js";import{I as v,r as j}from"./IconBase.esm-BbKRF193.js";import{T as S}from"./Typography-DBLLtZzJ.js";import"./index-Bm8UbI65.js";import"./useSlot-D9yE0s1_.js";import"./useSlotProps-CxyZS-qg.js";import"./Paper-Cc5LuG26.js";import"./useTheme-DpjMkLyW.js";import"./useTheme-Dm3NhWHt.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BMu7p32D.js";import"./utils-DUkByWFw.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-DVNWasIp.js";import"./mergeSlotProps-sSfPEMoJ.js";import"./Modal-BpHdIFDV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ButtonBase-DunFoCRt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-BzOVd61n.js";import"./index-D641xpmC.js";import"./extendSxProp-Cr0utasV.js";var l=new Map;l.set("bold",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});l.set("duotone",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",opacity:"0.2"}),n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});l.set("fill",function(){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Z"}))});l.set("light",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});l.set("thin",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});l.set("regular",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var B=function(t,r){return j(t,r,l)},x=C.forwardRef(function(e,t){return n.createElement(v,Object.assign({ref:t},e,{renderPath:B}))});x.displayName="Cloud";const A=M(f)(()=>({"& .MuiPaper-root":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}})),u=({open:e,...t})=>o.jsx(A,{open:e,...t});u.__docgenInfo={description:"",methods:[],displayName:"Menu",composes:["MenuProps"]};const P=(e,t="primary")=>{var s;const r=b[t],a=((s=e==null?void 0:e.palette)==null?void 0:s[t])??r;return{fontColor:a.menuFont??r.menuFont,selectedBg:a.tonal??r.tonal,selectedFont:a.onTonal??r.onTonal}},H=M(k,{})(({theme:e})=>{const t=P(e);return{fontFamily:"Noto Sans, Noto Sans TC, sans-serif",color:t.fontColor,"&:hover":{backgroundColor:T(t.fontColor,.08)},"&.Mui-selected":{backgroundColor:t.selectedBg,color:t.selectedFont},"& .MuiTouchRipple-root":{display:"none"}}}),p=({...e})=>o.jsx(H,{...e});p.__docgenInfo={description:"",methods:[],displayName:"MenuItem",composes:["MenuItemProps"]};const he={title:"components/Modules/Menu/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},c={parameters:{docs:{source:{code:`
import { Cloud } from "phosphor-react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click to Open
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
          Selected
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose} sx={{ p: 2 }}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>With Icon</ListItemText>
          <Typography variant="body2">⌘V</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
          Disabled
        </MenuItem>
      </Menu>
    </div>
      );
    `.trim()}}},render:e=>{const[t,r]=n.useState(null),a=!!t,s=d=>{r(d.currentTarget),console.log(d.currentTarget)},i=()=>{r(null)};return o.jsxs("div",{children:[o.jsx(L,{id:"basic-button","aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:s,children:"Click to Open"}),o.jsxs(u,{id:"basic-menu",anchorEl:t,open:a,onClose:i,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[o.jsx(p,{onClick:i,selected:!0,sx:{p:2},children:"Selected"}),o.jsx(E,{}),o.jsxs(p,{onClick:i,sx:{p:2},children:[o.jsx(g,{children:o.jsx(x,{fontSize:"small"})}),o.jsx(y,{children:"With Icon"}),o.jsx(S,{variant:"body2",children:"⌘V"})]}),o.jsx(p,{onClick:i,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var m,h,I;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import { Cloud } from "phosphor-react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click to Open
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
          Selected
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose} sx={{ p: 2 }}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>With Icon</ListItemText>
          <Typography variant="body2">⌘V</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
          Disabled
        </MenuItem>
      </Menu>
    </div>
      );
    \`.trim()
      }
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <div>\r
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>\r
          Click to Open\r
        </Button>\r
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{
        list: {
          "aria-labelledby": "basic-button"
        }
      }} sx={{
        "& .MuiPaper-root": {
          width: "200px"
        }
      }}>\r
          <MenuItem onClick={handleClose} selected sx={{
          p: 2
        }}>\r
            Selected\r
          </MenuItem>\r
          <Divider />\r
          <MenuItem onClick={handleClose} sx={{
          p: 2
        }}>\r
            <ListItemIcon>\r
              <Cloud fontSize="small" />\r
            </ListItemIcon>\r
            <ListItemText>With Icon</ListItemText>\r
            <Typography variant="body2">⌘V</Typography>\r
          </MenuItem>\r
          <MenuItem onClick={handleClose} disabled sx={{
          p: 2
        }}>\r
            Disabled\r
          </MenuItem>\r
        </Menu>\r
      </div>;
  }
}`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const Ie=["Label"];export{c as Label,Ie as __namedExportsOrder,he as default};
