import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./lemonTheme-DbLJfmwh.js";import{P as h,c as e,f as s}from"./Calendar-CxVLanFE.js";import{B as m,A as p,T as a}from"./Profile-ixVkq0xe.js";import{D as M}from"./BottomModal-D04EwsMg.js";import{o as b,t as v}from"./TreePalm.es-BHH_DZVt.js";import{B as r}from"./IconBase.es-BSjFOAhq.js";import{L as t}from"./ListItemIcon-eH_JfGUk.js";import"./DefaultPropsProvider-BtL_yMcr.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const H={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},o={render:f=>{const[i,c]=j.useState(null),I=!!i,g=l=>{c(l.currentTarget),console.log(l.currentTarget)},y=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(m,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(p,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(a,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:i,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(r,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(p,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(r,{children:[n.jsx(a,{variant:"body1",children:"Danny Chen"}),n.jsx(a,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(b,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(M,{variant:"middle"}),n.jsx(e,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(s,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(s,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(s,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(s,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(m,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(v,{size:16}),"登出"]})]})]})}};var d,x,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const O=["Label"];export{o as Label,O as __namedExportsOrder,H as default};
