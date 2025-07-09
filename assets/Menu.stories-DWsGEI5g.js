import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as M,R as e}from"./index-D4H_InIO.js";import{s as C}from"./memoTheme-B-2aWamJ.js";import{M as b}from"./Menu-1u8uYljr.js";import{M as c}from"./MenuItem-wnclLFFd.js";import{B as E}from"./Button-CpKG82Mi.js";import{D as k,L as f,a as g}from"./ListItemText-CM1aJ2SN.js";import{I as L,r as y}from"./IconBase.esm-BbKRF193.js";import{T}from"./Typography-D2w2x7Bk.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./index-Bm8UbI65.js";import"./useSlot-C4_QdBLF.js";import"./useSlotProps-Dq4c04Y2.js";import"./Paper-DtPqxWvG.js";import"./useTheme-CfJJ7vPb.js";import"./useTheme-Bh-_xkMb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BbX-4VhA.js";import"./utils-CTIOt_ev.js";import"./TransitionGroupContext-BDWcwKxU.js";import"./defaultPalette-CEdr43da.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-0NmrZ8s3.js";import"./mergeSlotProps-mcaWG5ce.js";import"./Modal-Cpe4GJDi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuItem-BfIpU7qz.js";import"./ButtonBase-CbscuJ4o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-Bgpk7tfQ.js";import"./index-Bwk1XUWi.js";import"./extendSxProp-BVuH4Y-a.js";var r=new Map;r.set("bold",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});r.set("duotone",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",opacity:"0.2"}),e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});r.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Z"}))});r.set("light",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});r.set("thin",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});r.set("regular",function(n){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v=function(o,a){return y(o,a,r)},x=M.forwardRef(function(n,o){return e.createElement(L,Object.assign({ref:o},n,{renderPath:v}))});x.displayName="Cloud";const j=C(b)(()=>({"& .MuiPaper-root":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}})),p=({open:n,...o})=>t.jsx(j,{open:n,...o});p.__docgenInfo={description:"",methods:[],displayName:"Menu",composes:["MenuProps"]};const ue={title:"components/Modules/Menu/Menu",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},l={parameters:{docs:{source:{code:`
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
    `.trim()}}},render:n=>{const[o,a]=e.useState(null),s=!!o,I=u=>{a(u.currentTarget),console.log(u.currentTarget)},i=()=>{a(null)};return t.jsxs("div",{children:[t.jsx(E,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:I,children:"Click to Open"}),t.jsxs(p,{id:"basic-menu",anchorEl:o,open:s,onClose:i,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[t.jsx(c,{onClick:i,selected:!0,sx:{p:2},children:"Selected"}),t.jsx(k,{}),t.jsxs(c,{onClick:i,sx:{p:2},children:[t.jsx(f,{children:t.jsx(x,{fontSize:"small"})}),t.jsx(g,{children:"With Icon"}),t.jsx(T,{variant:"body2",children:"⌘V"})]}),t.jsx(c,{onClick:i,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var m,d,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <div>
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
          Click to Open
        </Button>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{
        list: {
          "aria-labelledby": "basic-button"
        }
      }} sx={{
        "& .MuiPaper-root": {
          width: "200px"
        }
      }}>
          <MenuItem onClick={handleClose} selected sx={{
          p: 2
        }}>
            Selected
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{
          p: 2
        }}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>With Icon</ListItemText>
            <Typography variant="body2">⌘V</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disabled sx={{
          p: 2
        }}>
            Disabled
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const me=["Label"];export{l as Label,me as __namedExportsOrder,ue as default};
