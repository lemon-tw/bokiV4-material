import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./lemonTheme-CzmFcrQX.js";import"./Cart-CqyQqfjd.js";import{A as m,T as s}from"./Profile-CriQQtvK.js";import{B as p}from"./ToggleButton-oZXW10Qn.js";import{P as h,c as e,e as o}from"./Calendar-ARKOzniF.js";import"./BottomModal-BGRPiAzg.js";import{o as M,t as b}from"./TreePalm.es-CEskkk4V.js";import{B as a}from"./CheckCircle.es-CWUap0Ir.js";import{L as t}from"./ListItemIcon-CjUi9W7a.js";import{D as v}from"./Tabs-DUc-6XiH.js";import"./DefaultPropsProvider-BUHaCmAf.js";import"./index-Bm8UbI65.js";import"./Copy.es-C9oN9lTh.js";import"./getThemeProps-BwdQ335V.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const J={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},r={render:f=>{const[i,c]=j.useState(null),I=!!i,g=l=>{c(l.currentTarget),console.log(l.currentTarget)},y=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(p,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(m,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(s,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:i,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(a,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(m,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(a,{children:[n.jsx(s,{variant:"body1",children:"Danny Chen"}),n.jsx(s,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(M,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(v,{variant:"middle"}),n.jsx(e,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(p,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(b,{size:16}),"登出"]})]})]})}};var d,x,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const K=["Label"];export{r as Label,K as __namedExportsOrder,J as default};
