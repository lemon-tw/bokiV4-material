import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{P as h,c as e,d as o}from"./Calendar-C2bZlQ4a.js";import"./Alert-ClZS_Bwn.js";import{A as l}from"./Avatar-BQ2BYgfS.js";import{B as p}from"./ToggleButton-CCo_jApl.js";import"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-DpoTxBBn.js";import{T as s}from"./Typography-BZQ6nlo4.js";import{o as M,t as b}from"./TreePalm.es-BihiOFHe.js";import{B as i}from"./CheckCircle.es-BXMbO79g.js";import{L as t}from"./ListItemIcon-R232gIql.js";import{D as v}from"./Divider-4E9YfVaz.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-U-oX7qnb.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const dn={title:"components/Modules/MemberMenu/PopMemberMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},r={render:f=>{const[a,m]=j.useState(null),I=!!a,g=c=>{m(c.currentTarget),console.log(c.currentTarget)},y=()=>{m(null)};return n.jsxs("div",{children:[n.jsx(p,{variant:"outlined",onClick:g,sx:{p:1},children:n.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(l,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(s,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(h,{anchorEl:a,open:I,onClose:y,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(i,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(l,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(i,{children:[n.jsx(s,{variant:"body1",children:"Danny Chen"}),n.jsx(s,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(M,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(v,{variant:"middle"}),n.jsx(e,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(e,{children:[n.jsx(t,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(p,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(b,{size:16}),"登出"]})]})]})}};var d,x,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const xn=["Label"];export{r as Label,xn as __namedExportsOrder,dn as default};
