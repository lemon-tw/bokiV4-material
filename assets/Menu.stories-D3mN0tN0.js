import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as M,R as e}from"./index-D4H_InIO.js";import{s as C}from"./memoTheme-C83d1A0S.js";import{M as b}from"./Menu-Cbor0L1o.js";import{M as c}from"./MenuItem-b5KztQLe.js";import{B as E}from"./Button-SgMA5SmR.js";import{D as f,L as k}from"./ListItemIcon-DNcnwUCC.js";import{I as L,r as g}from"./IconBase.esm-BbKRF193.js";import{L as y}from"./ListItemText-J7Zx93Of.js";import{T}from"./Typography-D9Rxpb2u.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./index-Bm8UbI65.js";import"./useSlot-BWf5NxIe.js";import"./useSlotProps-qwZrg_4U.js";import"./Popover-B1DyT-gy.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-zgzfA1CP.js";import"./useTheme-CfJJ7vPb.js";import"./useTheme-Bh-_xkMb.js";import"./utils-bnsn1T2-.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-LBlGjCQn.js";import"./mergeSlotProps-DQ9n5Pzv.js";import"./Modal-DVo_Vf6F.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-B8zVEXaw.js";import"./defaultPalette-fWaDn0-C.js";import"./MenuItem-CqfLdDkn.js";import"./ButtonBase-CP1Oo1Bo.js";import"./Button-B10i2C5F.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-Cn6m69C4.js";import"./index-zquPRXLs.js";import"./extendSxProp-BVuH4Y-a.js";var r=new Map;r.set("bold",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});r.set("duotone",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",opacity:"0.2"}),e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});r.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Z"}))});r.set("light",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});r.set("thin",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});r.set("regular",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v=function(o,a){return g(o,a,r)},x=M.forwardRef(function(n,o){return e.createElement(L,Object.assign({ref:o},n,{renderPath:v}))});x.displayName="Cloud";const j=C(b)(()=>({"& .MuiPaper-root":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}})),p=({open:n,...o})=>t.jsx(j,{open:n,...o});p.__docgenInfo={description:"",methods:[],displayName:"Menu",composes:["MenuProps"]};const xe={title:"components/Modules/Menu/Menu",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},l={parameters:{docs:{source:{code:`
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
    `.trim()}}},render:n=>{const[o,a]=e.useState(null),s=!!o,I=m=>{a(m.currentTarget),console.log(m.currentTarget)},i=()=>{a(null)};return t.jsxs("div",{children:[t.jsx(E,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:I,children:"Click to Open"}),t.jsxs(p,{id:"basic-menu",anchorEl:o,open:s,onClose:i,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[t.jsx(c,{onClick:i,selected:!0,sx:{p:2},children:"Selected"}),t.jsx(f,{}),t.jsxs(c,{onClick:i,sx:{p:2},children:[t.jsx(k,{children:t.jsx(x,{fontSize:"small"})}),t.jsx(y,{children:"With Icon"}),t.jsx(T,{variant:"body2",children:"⌘V"})]}),t.jsx(c,{onClick:i,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var u,d,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ie=["Label"];export{l as Label,Ie as __namedExportsOrder,xe as default};
