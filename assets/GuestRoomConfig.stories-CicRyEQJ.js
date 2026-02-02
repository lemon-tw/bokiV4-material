import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{G as S}from"./Rest-BC3fsDfS.js";import"./Alert-C3r4vYPZ.js";import"./Avatar-pRnr6DU5.js";import{B as f}from"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./Modal-BPmM9JPO.js";import"./BottomModal-imHOmNSj.js";import"./Profile-CdAcNaFX.js";import"./Typography-BZQ6nlo4.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-z4MSENyy.js";import"./FormControlLabel-D0F9NOZF.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const fe={title:"components/Atoms/GuestRoomConfig/GuestRoomConfig",component:S,parameters:{layout:"centered",controls:{exclude:["isMultiRoomPackage","setIsMultiRoomPackage","numRooms","setNumRooms","seniors","setSeniors","seniorsArray","setSeniorsArray","childrens","setChildrens","childrensArray","setChildrensArray","adults","setAdults","pets","setPets","petsArray","setPetsArray","accessibleRoom","setAccessibleRoom"]}},tags:["autodocs"],argTypes:{childrensSelectorType:{control:"radio",options:["age","height"]}},args:{}},n={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(!0),[i,u]=e.useState(1),[m,p]=e.useState(1),[h,d]=e.useState(0),[A,R]=e.useState(0),[w,b]=e.useState([]),[M,B]=e.useState([]),[x,T]=e.useState(0),[v,N]=e.useState([]),[j,G]=e.useState(!1),L=O=>{o(O.currentTarget)},W=()=>{o(null)},I=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:L,children:"Open popover"}),s.jsx(S,{open:I,anchorEl:t,onClose:W,isMultiRoomPackage:l,setIsMultiRoomPackage:c,numRooms:i,setNumRooms:u,adults:m,setAdults:p,childrens:h,setChildrens:d,seniors:A,setSeniors:R,seniorsArray:w,setSeniorsArray:b,childrensArray:M,setChildrensArray:B,pets:x,setPets:T,petsArray:v,setPetsArray:N,accessibleRoom:j,setAccessibleRoom:G,...a})]})},args:{showSeniors:!0,showChildrens:!0,showMultiRoomPackage:!0,showAge:!0,showPets:!0,childrensSelectorType:"height"}},r={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(1),[i,u]=e.useState(1),[m,p]=e.useState(!1),h=R=>{o(R.currentTarget)},d=()=>{o(null)},A=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:h,children:"Open popover"}),s.jsx(S,{open:A,anchorEl:t,onClose:d,numRooms:l,setNumRooms:c,adults:i,setAdults:u,accessibleRoom:m,setAccessibleRoom:p,...a})]})},args:{}};var g,P,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: typeof GuestRoomConfig) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isMultiRoomPackage, setIsMultiRoomPackage] = useState(true);
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
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var y,E,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const we=["ShowAllProps","ShowLessProps"];export{n as ShowAllProps,r as ShowLessProps,we as __namedExportsOrder,fe as default};
