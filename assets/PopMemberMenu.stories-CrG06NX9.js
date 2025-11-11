import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{P as h,c as m,B as a,A as d,h as o,f as e,g as M,r as t}from"./Calendar-Dr32-U0b.js";import{o as b,t as v}from"./TreePalm.es-T6BiEahq.js";import{L as r}from"./ListItemIcon-B4eIQ2rF.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const D={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},s={render:C=>{const[i,c]=j.useState(null),I=!!i,g=l=>{c(l.currentTarget),console.log(l.currentTarget)},y=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(m,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(d,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(o,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:i,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(a,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(d,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(a,{children:[n.jsx(o,{variant:"body1",children:"Danny Chen"}),n.jsx(o,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(e,{children:[n.jsx(r,{children:n.jsx(b,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(M,{variant:"middle"}),n.jsx(e,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(e,{children:[n.jsx(r,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(r,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(r,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(r,{children:n.jsx(t,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(m,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(v,{size:16}),"登出"]})]})]})}};var p,x,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const P=["Label"];export{s as Label,P as __namedExportsOrder,D as default};
