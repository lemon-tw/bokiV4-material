import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as e,R as x}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-RK5HW-AM.js";import{a2 as M,ab as I,B as b,b as r,c as E,i as g,T}from"./Header-Dr6Ymw_M.js";import{L as d}from"./ListItemIcon-DYxVTHqC.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const y=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",opacity:"0.2"}),e.createElement("path",{d:"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160a88.09,88.09,0,0,0,87.93-91.48C246.11,77.54,207.07,40,160.06,40Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M160,44A84.11,84.11,0,0,0,83.59,93.12,60.71,60.71,0,0,0,72,92a60,60,0,0,0,0,120h88a84,84,0,0,0,0-168Zm0,160H72a52,52,0,1,1,8.55-103.3A83.66,83.66,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,76,76Z"}))]]),s=e.forwardRef((i,t)=>e.createElement(M,{ref:t,...i,weights:y}));s.displayName="CloudIcon";const S={title:"components/Modules/Menu/Menu",component:I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},a={parameters:{docs:{source:{code:`
import { CloudIcon } from "@phosphor-icons/react";
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
    `.trim()}}},render:i=>{const[t,c]=x.useState(null),l=!!t,C=m=>{c(m.currentTarget),console.log(m.currentTarget)},o=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(b,{id:"basic-button","aria-controls":l?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":l?"true":void 0,onClick:C,children:"Click to Open"}),n.jsxs(I,{id:"basic-menu",anchorEl:t,open:l,onClose:o,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(r,{onClick:o,selected:!0,sx:{p:2},children:[n.jsx(d,{children:n.jsx(s,{})}),"Selected"]}),n.jsx(E,{}),n.jsxs(r,{onClick:o,sx:{p:2},children:[n.jsx(d,{children:n.jsx(s,{fontSize:"small"})}),n.jsx(g,{children:"With Icon"}),n.jsx(T,{variant:"body2",children:"⌘V"})]}),n.jsx(r,{onClick:o,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import { CloudIcon } from "@phosphor-icons/react";
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
            <ListItemIcon>
              <CloudIcon />
            </ListItemIcon>
            Selected
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{
          p: 2
        }}>
            <ListItemIcon>
              <CloudIcon fontSize="small" />
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
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const Z=["Label"];export{a as Label,Z as __namedExportsOrder,S as default};
