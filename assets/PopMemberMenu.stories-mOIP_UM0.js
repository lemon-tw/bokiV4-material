import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./lemonTheme-D8Y1J3Ig.js";import{B as m}from"./Cart-qIvgB5t4.js";import{A as p,T as r}from"./Profile-kW0Qm_sa.js";import{P as h,c as e,e as o}from"./Calendar-B-s2EpR5.js";import{B as a}from"./BottomModal-CSbStmmY.js";import{o as M,t as b}from"./TreePalm.es-C0XbkWWh.js";import{L as t}from"./ListItemIcon-DCxCvCYW.js";import{D as v}from"./Tabs-C-KGOsN8.js";import"./DefaultPropsProvider-3QJ_VXVD.js";import"./Copy.es-WJ0Du8LM.js";import"./getThemeProps-BCfUtUYi.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const q={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},s={render:f=>{const[i,c]=j.useState(null),I=!!i,g=l=>{c(l.currentTarget),console.log(l.currentTarget)},y=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(m,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(p,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(r,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:i,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(a,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(p,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(a,{children:[n.jsx(r,{variant:"body1",children:"Danny Chen"}),n.jsx(r,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(M,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(v,{variant:"middle"}),n.jsx(e,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(m,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(b,{size:16}),"登出"]})]})]})}};var d,x,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Button variant="outlined" onClick={handleClick} sx={{
        p: 1
      }}>
          <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2
        }}>
            <Avatar alt="image" size="small" onClick={() => {}} src="https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png" />
            <Typography variant="body1">Danny Chen</Typography>
          </Box>
        </Button>
        <PopMemberMenu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{
        "& .MuiPaper-root": {
          width: "200px"
        }
      }}>
          <Box sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          gap: 2
        }}>
            <Avatar alt="image" onClick={() => {}} src="https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png" />
            <Box>
              <Typography variant="body1">Danny Chen</Typography>
              <Typography variant="body2" sx={{
              color: "#7A7D80"
            }}>
                金卡會員
              </Typography>
            </Box>
          </Box>
          <MenuItem>
            <ListItemIcon>
              <TreePalmIcon size="1.5rem" />
            </ListItemIcon>
            我的旅程
          </MenuItem>
          <Divider variant="middle" />
          <MenuItem disabled sx={{
          opacity: "1 !important"
        }}>
            會員
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StarIcon size="1.5rem" />
            </ListItemIcon>
            會員等級
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StarIcon size="1.5rem" />
            </ListItemIcon>
            會員等級
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StarIcon size="1.5rem" />
            </ListItemIcon>
            會員等級
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StarIcon size="1.5rem" />
            </ListItemIcon>
            會員等級
          </MenuItem>
          <Button variant="outlined" sx={{
          width: "100%",
          mt: 1
        }}>
            <SignOutIcon size={16} />
            登出
          </Button>
        </PopMemberMenu>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const F=["Label"];export{s as Label,F as __namedExportsOrder,q as default};
