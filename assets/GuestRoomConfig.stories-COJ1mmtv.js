import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";import"./lemonTheme-DGlRE1oP.js";import{B as f}from"./Typography-2_fYrsYp.js";import{G as g}from"./RichTooltip-Cx3E0wiy.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"components/Atoms/GuestRoomConfig/GuestRoomConfig",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isMultiRoomPackage:{table:{disable:!0}},setIsMultiRoomPackage:{table:{disable:!0}},numRooms:{table:{disable:!0}},setNumRooms:{table:{disable:!0}},seniors:{table:{disable:!0}},setSeniors:{table:{disable:!0}},childrens:{table:{disable:!0}},setChildrens:{table:{disable:!0}},adults:{table:{disable:!0}},setAdults:{table:{disable:!0}},seniorsArray:{table:{disable:!0}},setSeniorsArray:{table:{disable:!0}},childrensSelectorType:{control:"radio",options:["age","height"]},childrensArray:{table:{disable:!0}},setChildrensArray:{table:{disable:!0}},withPet:{table:{disable:!0}},setWithPet:{table:{disable:!0}},AccessibleRoom:{table:{disable:!0}},setAccessibleRoom:{table:{disable:!0}}},args:{}},n={render:l=>{const[t,o]=e.useState(null),[a,c]=e.useState(!1),[i,u]=e.useState(1),[m,h]=e.useState(1),[d,A]=e.useState(0),[R,b]=e.useState(0),[p,S]=e.useState([]),[M,B]=e.useState([]),[T,x]=e.useState(!1),[v,N]=e.useState(!1),W=L=>{o(L.currentTarget)},j=()=>{o(null)},G=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:W,children:"Open popover"}),s.jsx(g,{open:G,anchorEl:t,onClose:j,isMultiRoomPackage:a,setIsMultiRoomPackage:c,numRooms:i,setNumRooms:u,adults:m,setAdults:h,childrens:d,setChildrens:A,seniors:R,setSeniors:b,seniorsArray:p,setSeniorsArray:S,childrensArray:M,setChildrensArray:B,withPet:T,setWithPet:x,AccessibleRoom:v,setAccessibleRoom:N,...l})]})},args:{showSeniors:!0,showChildrens:!0,showMultiRoomPackage:!0,showAge:!0,childrensSelectorType:"height"}},r={render:l=>{const[t,o]=e.useState(null),[a,c]=e.useState(1),[i,u]=e.useState(1),[m,h]=e.useState(!1),[d,A]=e.useState(!1),R=S=>{o(S.currentTarget)},b=()=>{o(null)},p=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:R,children:"Open popover"}),s.jsx(g,{open:p,anchorEl:t,onClose:b,numRooms:a,setNumRooms:c,adults:i,setAdults:u,withPet:m,setWithPet:h,AccessibleRoom:d,setAccessibleRoom:A,...l})]})},args:{}};var C,P,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isMultiRoomPackage, setIsMultiRoomPackage] = useState(false);
    const [numRooms, setNumRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childrens, setChildrens] = useState(0);
    const [seniors, setSeniors] = useState(0);
    const [seniorsArray, setSeniorsArray] = useState([]);
    const [childrensArray, setChildrensArray] = useState([]);
    const [withPet, setWithPet] = useState(false);
    const [AccessibleRoom, setAccessibleRoom] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>\r
        <Button onClick={handleClick}>Open popover</Button>\r
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} isMultiRoomPackage={isMultiRoomPackage} setIsMultiRoomPackage={setIsMultiRoomPackage} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults} childrens={childrens} setChildrens={setChildrens} seniors={seniors} setSeniors={setSeniors} seniorsArray={seniorsArray} setSeniorsArray={setSeniorsArray} childrensArray={childrensArray} setChildrensArray={setChildrensArray} withPet={withPet} setWithPet={setWithPet} AccessibleRoom={AccessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />\r
      </>;
  },
  args: {
    showSeniors: true,
    showChildrens: true,
    showMultiRoomPackage: true,
    showAge: true,
    childrensSelectorType: "height"
  }
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var y,k,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [numRooms, setNumRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [withPet, setWithPet] = useState(false);
    const [AccessibleRoom, setAccessibleRoom] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>\r
        <Button onClick={handleClick}>Open popover</Button>\r
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults} withPet={withPet} setWithPet={setWithPet} AccessibleRoom={AccessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />\r
      </>;
  },
  args: {}
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Q=["ShowAllProps","ShowLessProps"];export{n as ShowAllProps,r as ShowLessProps,Q as __namedExportsOrder,K as default};
