import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{P as h,c as r,r as t}from"./Rest-CkA2PqYt.js";import"./Alert-9_z-GEVK.js";import{A as p}from"./Avatar-kr3oDakC.js";import{B as l}from"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import{T as s}from"./Typography-BcGPB_gl.js";import{o as M,t as b}from"./TreePalm.es-B5zkGQhZ.js";import{B as i}from"./CheckCircle.es-DXCUKnUH.js";import{L as e}from"./ListItemIcon-BorWUrwm.js";import{D as v}from"./Divider-QqgqyZ2C.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const xn={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},o={render:f=>{const[a,m]=j.useState(null),I=!!a,g=c=>{m(c.currentTarget),console.log(c.currentTarget)},y=()=>{m(null)};return n.jsxs("div",{children:[n.jsx(l,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(p,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(s,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:a,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(i,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(p,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(i,{children:[n.jsx(s,{variant:"body1",children:"Danny Chen"}),n.jsx(s,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(M,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(v,{variant:"middle"}),n.jsx(r,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(l,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(b,{size:16}),"登出"]})]})]})}};var d,x,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Button variant="outlined" onClick={handleClick} sx={{
        p: 1
      }}>\r
          <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2
        }}>\r
            <Avatar alt="image" size="small" onClick={() => {}} src="https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png" />\r
            <Typography variant="body1">Danny Chen</Typography>\r
          </Box>\r
        </Button>\r
        <PopMemberMenu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{
        "& .MuiPaper-root": {
          width: "200px"
        }
      }}>\r
          <Box sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          gap: 2
        }}>\r
            <Avatar alt="image" onClick={() => {}} src="https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png" />\r
            <Box>\r
              <Typography variant="body1">Danny Chen</Typography>\r
              <Typography variant="body2" sx={{
              color: "#7A7D80"
            }}>\r
                金卡會員\r
              </Typography>\r
            </Box>\r
          </Box>\r
          <MenuItem>\r
            <ListItemIcon>\r
              <TreePalmIcon size="1.5rem" />\r
            </ListItemIcon>\r
            我的旅程\r
          </MenuItem>\r
          <Divider variant="middle" />\r
          <MenuItem disabled sx={{
          opacity: "1 !important"
        }}>\r
            會員\r
          </MenuItem>\r
          <MenuItem>\r
            <ListItemIcon>\r
              <StarIcon size="1.5rem" />\r
            </ListItemIcon>\r
            會員等級\r
          </MenuItem>\r
          <MenuItem>\r
            <ListItemIcon>\r
              <StarIcon size="1.5rem" />\r
            </ListItemIcon>\r
            會員等級\r
          </MenuItem>\r
          <MenuItem>\r
            <ListItemIcon>\r
              <StarIcon size="1.5rem" />\r
            </ListItemIcon>\r
            會員等級\r
          </MenuItem>\r
          <MenuItem>\r
            <ListItemIcon>\r
              <StarIcon size="1.5rem" />\r
            </ListItemIcon>\r
            會員等級\r
          </MenuItem>\r
          <Button variant="outlined" sx={{
          width: "100%",
          mt: 1
        }}>\r
            <SignOutIcon size={16} />\r
            登出\r
          </Button>\r
        </PopMemberMenu>\r
      </div>;
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const un=["Label"];export{o as Label,un as __namedExportsOrder,xn as default};
