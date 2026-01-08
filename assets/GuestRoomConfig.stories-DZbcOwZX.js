import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";import"./lemonTheme-Bb89J2P2.js";import{G as S}from"./Calendar-BlZ4Vs92.js";import"./Cart-DvqdL-mf.js";import"./Profile-O2wuqqWP.js";import{B as k}from"./ToggleButton-C9hjwxNF.js";import"./BottomModal-eKP2Btm8.js";import"./Typography-Ot6rEagF.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-CQrB7Xx_.js";import"./CheckCircle.es-D_AxlQm-.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Warning.es-TWNjRQ8R.js";const ae={title:"components/Atoms/GuestRoomConfig/GuestRoomConfig",component:S,parameters:{layout:"centered",controls:{exclude:["isMultiRoomPackage","setIsMultiRoomPackage","numRooms","setNumRooms","seniors","setSeniors","seniorsArray","setSeniorsArray","childrens","setChildrens","childrensArray","setChildrensArray","adults","setAdults","pets","setPets","petsArray","setPetsArray","accessibleRoom","setAccessibleRoom"]}},tags:["autodocs"],argTypes:{childrensSelectorType:{control:"radio",options:["age","height"]}},args:{}},n={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(!1),[i,u]=e.useState(1),[m,h]=e.useState(1),[p,d]=e.useState(0),[A,R]=e.useState(0),[w,b]=e.useState([]),[M,B]=e.useState([]),[x,T]=e.useState(0),[v,N]=e.useState([]),[j,G]=e.useState(!1),L=O=>{o(O.currentTarget)},W=()=>{o(null)},I=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(k,{onClick:L,children:"Open popover"}),s.jsx(S,{open:I,anchorEl:t,onClose:W,isMultiRoomPackage:l,setIsMultiRoomPackage:c,numRooms:i,setNumRooms:u,adults:m,setAdults:h,childrens:p,setChildrens:d,seniors:A,setSeniors:R,seniorsArray:w,setSeniorsArray:b,childrensArray:M,setChildrensArray:B,pets:x,setPets:T,petsArray:v,setPetsArray:N,accessibleRoom:j,setAccessibleRoom:G,...a})]})},args:{showSeniors:!0,showChildrens:!0,showMultiRoomPackage:!0,showAge:!0,showPets:!0,childrensSelectorType:"height"}},r={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(1),[i,u]=e.useState(1),[m,h]=e.useState(!1),p=R=>{o(R.currentTarget)},d=()=>{o(null)},A=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(k,{onClick:p,children:"Open popover"}),s.jsx(S,{open:A,anchorEl:t,onClose:d,numRooms:l,setNumRooms:c,adults:i,setAdults:u,accessibleRoom:m,setAccessibleRoom:h,...a})]})},args:{}};var g,P,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: typeof GuestRoomConfig) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isMultiRoomPackage, setIsMultiRoomPackage] = useState(false);
    const [numRooms, setNumRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childrens, setChildrens] = useState(0);
    const [seniors, setSeniors] = useState(0);
    const [seniorsArray, setSeniorsArray] = useState([]);
    const [childrensArray, setChildrensArray] = useState([]);
    const [pets, setPets] = useState(0);
    const [petsArray, setPetsArray] = useState<boolean[]>([]);
    // const [withPet, setWithPet] = useState(false);
    const [accessibleRoom, setAccessibleRoom] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>
        <Button onClick={handleClick}>Open popover</Button>
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} isMultiRoomPackage={isMultiRoomPackage} setIsMultiRoomPackage={setIsMultiRoomPackage} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults} childrens={childrens} setChildrens={setChildrens} seniors={seniors} setSeniors={setSeniors} seniorsArray={seniorsArray} setSeniorsArray={setSeniorsArray} childrensArray={childrensArray} setChildrensArray={setChildrensArray} pets={pets} setPets={setPets} petsArray={petsArray} setPetsArray={setPetsArray}
      // withPet={withPet}
      // setWithPet={setWithPet}
      accessibleRoom={accessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />
      </>;
  },
  args: {
    showSeniors: true,
    showChildrens: true,
    showMultiRoomPackage: true,
    showAge: true,
    showPets: true,
    childrensSelectorType: "height"
  }
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var y,E,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: typeof GuestRoomConfig) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [numRooms, setNumRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    // const [withPet, setWithPet] = useState(false);
    const [accessibleRoom, setAccessibleRoom] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>
        <Button onClick={handleClick}>Open popover</Button>
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults}
      // withPet={withPet}
      // setWithPet={setWithPet}
      accessibleRoom={accessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />
      </>;
  },
  args: {}
}`,...(f=(E=r.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const le=["ShowAllProps","ShowLessProps"];export{n as ShowAllProps,r as ShowLessProps,le as __namedExportsOrder,ae as default};
