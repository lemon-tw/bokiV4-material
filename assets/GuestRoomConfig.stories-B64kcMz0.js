import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";import"./lemonTheme-DGlRE1oP.js";import{B as b}from"./Typography-2_fYrsYp.js";import{G as C}from"./RichTooltip-CAyGoVZK.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"components/Atoms/GuestRoomConfig/GuestRoomConfig",component:C,parameters:{layout:"centered",controls:{exclude:["isMultiRoomPackage","setIsMultiRoomPackage","numRooms","setNumRooms","seniors","setSeniors","seniorsArray","setSeniorsArray","childrens","setChildrens","childrensArray","setChildrensArray","adults","setAdults","withPet","setWithPet","accessibleRoom","setAccessibleRoom"]}},tags:["autodocs"],argTypes:{childrensSelectorType:{control:"radio",options:["age","height"]}},args:{}},n={render:l=>{const[t,o]=e.useState(null),[a,c]=e.useState(!1),[i,u]=e.useState(1),[m,h]=e.useState(1),[d,R]=e.useState(0),[A,p]=e.useState(0),[S,g]=e.useState([]),[M,B]=e.useState([]),[x,T]=e.useState(!1),[v,N]=e.useState(!1),W=L=>{o(L.currentTarget)},j=()=>{o(null)},G=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(b,{onClick:W,children:"Open popover"}),s.jsx(C,{open:G,anchorEl:t,onClose:j,isMultiRoomPackage:a,setIsMultiRoomPackage:c,numRooms:i,setNumRooms:u,adults:m,setAdults:h,childrens:d,setChildrens:R,seniors:A,setSeniors:p,seniorsArray:S,setSeniorsArray:g,childrensArray:M,setChildrensArray:B,withPet:x,setWithPet:T,accessibleRoom:v,setAccessibleRoom:N,...l})]})},args:{showSeniors:!0,showChildrens:!0,showMultiRoomPackage:!0,showAge:!0,childrensSelectorType:"height"}},r={render:l=>{const[t,o]=e.useState(null),[a,c]=e.useState(1),[i,u]=e.useState(1),[m,h]=e.useState(!1),[d,R]=e.useState(!1),A=g=>{o(g.currentTarget)},p=()=>{o(null)},S=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(b,{onClick:A,children:"Open popover"}),s.jsx(C,{open:S,anchorEl:t,onClose:p,numRooms:a,setNumRooms:c,adults:i,setAdults:u,withPet:m,setWithPet:h,AccessibleRoom:d,setAccessibleRoom:R,...l})]})},args:{}};var P,E,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    const [accessibleRoom, setAccessibleRoom] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>\r
        <Button onClick={handleClick}>Open popover</Button>\r
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} isMultiRoomPackage={isMultiRoomPackage} setIsMultiRoomPackage={setIsMultiRoomPackage} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults} childrens={childrens} setChildrens={setChildrens} seniors={seniors} setSeniors={setSeniors} seniorsArray={seniorsArray} setSeniorsArray={setSeniorsArray} childrensArray={childrensArray} setChildrensArray={setChildrensArray} withPet={withPet} setWithPet={setWithPet} accessibleRoom={accessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />\r
      </>;
  },
  args: {
    showSeniors: true,
    showChildrens: true,
    showMultiRoomPackage: true,
    showAge: true,
    childrensSelectorType: "height"
  }
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var k,w,f;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const Q=["ShowAllProps","ShowLessProps"];export{n as ShowAllProps,r as ShowLessProps,Q as __namedExportsOrder,K as default};
