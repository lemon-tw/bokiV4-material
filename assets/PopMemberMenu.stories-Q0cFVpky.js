import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as j}from"./index-D4H_InIO.js";import{s as b}from"./memoTheme-DQLz_w2O.js";import{M as v}from"./Menu-DPgr-jSq.js";import{M as r}from"./MenuItem-Crf6pSjR.js";import{B as d}from"./Button-pE6AYnd6.js";import{o as f,t as C}from"./TreePalm.es-D6dBMePO.js";import{r as o}from"./Star.es-EG0K30EU.js";import{A as u}from"./Avatar-DGLd34rs.js";import{T as a}from"./Typography-BeF6-aF1.js";import{B as m}from"./Box-C_5lmZ5e.js";import{L as e,D as B}from"./ListItemIcon-D4A9kI_u.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./index-Bm8UbI65.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useSlotProps-BPmQKDpQ.js";import"./Popover-yGUp7IJF.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CfgsmfYz.js";import"./useTheme-D4Xi4orm.js";import"./useTheme-BbNP3OZZ.js";import"./utils-BcbCFGQY.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-C9xN9Xr4.js";import"./mergeSlotProps-Cns_3EyO.js";import"./Modal-9hmaRIn8.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cbc_F17k.js";import"./MenuList-CGrUldIO.js";import"./ListContext-I3Sbm7li.js";import"./defaultPalette-fWaDn0-C.js";import"./MenuItem-DXPHPrX-.js";import"./ButtonBase-xXEST84h.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./Button-Csa5v2_p.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-Ca9LbOKf.js";import"./IconBase.es-F2kcR3Hr.js";import"./Avatar-CFqripXw.js";import"./createSvgIcon-C6ONGP5B.js";import"./Typography-C85nDkcq.js";import"./index-C1j4tvSs.js";import"./extendSxProp-DpymScOI.js";const L=b(v)(s=>({"& .MuiPaper-root":{borderRadius:"12px",padding:12},"& .MuiList-root":{padding:0},"& .MuiMenuItem-root":{borderRadius:"8px",padding:16}})),p=({open:s,...t})=>n.jsx(L,{open:s,...t});p.__docgenInfo={description:"",methods:[],displayName:"PopMemberMenu"};const Bn={title:"components/Atoms/MemberMenu/PopMemberMenu",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},i={render:s=>{const[t,c]=j.useState(null),g=!!t,y=l=>{c(l.currentTarget),console.log(l.currentTarget)},M=()=>{c(null)};return n.jsxs("div",{children:[n.jsx(d,{variant:"outlined",onClick:y,sx:{p:1},children:n.jsxs(m,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.jsx(u,{alt:"image",size:"small",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsx(a,{variant:"body1",children:"Danny Chen"})]})}),n.jsxs(p,{anchorEl:t,open:g,onClose:M,sx:{"& .MuiPaper-root":{width:"200px"}},children:[n.jsxs(m,{sx:{display:"flex",alignItems:"center",p:1,gap:2},children:[n.jsx(u,{alt:"image",onClick:()=>{},src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}),n.jsxs(m,{children:[n.jsx(a,{variant:"body1",children:"Danny Chen"}),n.jsx(a,{variant:"body2",sx:{color:"#7A7D80"},children:"金卡會員"})]})]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(f,{size:"1.5rem"})}),"我的旅程"]}),n.jsx(B,{variant:"middle"}),n.jsx(r,{disabled:!0,sx:{opacity:"1 !important"},children:"會員"}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(o,{size:"1.5rem"})}),"會員等級"]}),n.jsxs(d,{variant:"outlined",sx:{width:"100%",mt:1},children:[n.jsx(C,{size:16}),"登出"]})]})]})}};var x,h,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const Ln=["Label"];export{i as Label,Ln as __namedExportsOrder,Bn as default};
