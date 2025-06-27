import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as C}from"./index-D4H_InIO.js";import{s as h}from"./memoTheme-Dxm40b6r.js";import{c as I,M as x,a as M,b}from"./MenuItem-QglLvHO9.js";import{p as y}from"./defaultPalette-DS3qdIvj.js";import{a as T}from"./DefaultPropsProvider-C6ZETEwd.js";import{B as g}from"./Button-DEjvFugr.js";import{c as f}from"./createSvgIcon--HVZC8sH.js";import{T as E}from"./Typography-2UsIpkSH.js";import"./useSlot-DpI2SreY.js";import"./index-Bm8UbI65.js";import"./useSlotProps-Be1aYaHu.js";import"./Paper-DrcfDPS5.js";import"./useTheme-CKabsHUK.js";import"./useTheme-CgXM_xl0.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Cvzsn5qO.js";import"./Portal-CdaRbCk9.js";import"./ButtonBase-DqDsqRqn.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./mergeSlotProps-Dxw82FU4.js";import"./Modal-B5ScNJ4P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-DDzYLtWm.js";import"./index-C958WKz4.js";import"./extendSxProp-CjEWOyj5.js";const k=h(I)(()=>({"& .MuiPaper-root":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}})),c=({open:o,...e})=>n.jsx(k,{open:o,...e});c.__docgenInfo={description:"",methods:[],displayName:"Menu",composes:["MenuProps"]};const L=(o,e="primary")=>{var s;const t=y[e],r=((s=o==null?void 0:o.palette)==null?void 0:s[e])??t;return{fontColor:r.menuFont??t.menuFont,selectedBg:r.tonal??t.tonal,selectedFont:r.onTonal??t.onTonal}},v=h(x,{})(({theme:o})=>{const e=L(o);return{fontFamily:"Noto Sans, Noto Sans TC, sans-serif",color:e.fontColor,"&:hover":{backgroundColor:T(e.fontColor,.08)},"&.Mui-selected":{backgroundColor:e.selectedBg,color:e.selectedFont},"& .MuiTouchRipple-root":{display:"none"}}}),i=({...o})=>n.jsx(v,{...o});i.__docgenInfo={description:"",methods:[],displayName:"MenuItem",composes:["MenuItemProps"]};const S=f(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"}),"Cloud"),ln={title:"components/Menu/Menu",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},a={parameters:{docs:{source:{code:`
import { Cloud } from "@mui/icons-material";
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
    `.trim()}}},render:o=>{const[e,t]=C.useState(null),r=!!e,s=p=>{t(p.currentTarget),console.log(p.currentTarget)},l=()=>{t(null)};return n.jsxs("div",{children:[n.jsx(g,{id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:s,children:"Click to Open"}),n.jsxs(c,{id:"basic-menu",anchorEl:e,open:r,onClose:l,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsx(i,{onClick:l,selected:!0,sx:{p:2},children:"Selected"}),n.jsxs(i,{onClick:l,sx:{p:2},children:[n.jsx(M,{children:n.jsx(S,{fontSize:"small"})}),n.jsx(b,{children:"With Icon"}),n.jsx(E,{variant:"body2",children:"⌘V"})]}),n.jsx(i,{onClick:l,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import { Cloud } from "@mui/icons-material";
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
          {/* <Divider /> */}
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const an=["Label"];export{a as Label,an as __namedExportsOrder,ln as default};
