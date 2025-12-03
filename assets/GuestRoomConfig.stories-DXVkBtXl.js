import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{G as S,g as f}from"./Calendar-L8PC6DfT.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"components/Atoms/GuestRoomConfig/GuestRoomConfig",component:S,parameters:{layout:"centered",controls:{exclude:["isMultiRoomPackage","setIsMultiRoomPackage","numRooms","setNumRooms","seniors","setSeniors","seniorsArray","setSeniorsArray","childrens","setChildrens","childrensArray","setChildrensArray","adults","setAdults","pets","setPets","petsArray","setPetsArray","accessibleRoom","setAccessibleRoom"]}},tags:["autodocs"],argTypes:{childrensSelectorType:{control:"radio",options:["age","height"]}},args:{}},n={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(!1),[u,i]=e.useState(1),[m,h]=e.useState(1),[d,p]=e.useState(0),[A,R]=e.useState(0),[w,b]=e.useState([]),[M,B]=e.useState([]),[x,T]=e.useState(0),[v,N]=e.useState([]),[j,G]=e.useState(!1),L=O=>{o(O.currentTarget)},W=()=>{o(null)},I=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:L,children:"Open popover"}),s.jsx(S,{open:I,anchorEl:t,onClose:W,isMultiRoomPackage:l,setIsMultiRoomPackage:c,numRooms:u,setNumRooms:i,adults:m,setAdults:h,childrens:d,setChildrens:p,seniors:A,setSeniors:R,seniorsArray:w,setSeniorsArray:b,childrensArray:M,setChildrensArray:B,pets:x,setPets:T,petsArray:v,setPetsArray:N,accessibleRoom:j,setAccessibleRoom:G,...a})]})},args:{showSeniors:!0,showChildrens:!0,showMultiRoomPackage:!0,showAge:!0,showPets:!0,childrensSelectorType:"height"}},r={render:a=>{const[t,o]=e.useState(null),[l,c]=e.useState(1),[u,i]=e.useState(1),[m,h]=e.useState(!1),d=R=>{o(R.currentTarget)},p=()=>{o(null)},A=!!t;return s.jsxs(s.Fragment,{children:[s.jsx(f,{onClick:d,children:"Open popover"}),s.jsx(S,{open:A,anchorEl:t,onClose:p,numRooms:l,setNumRooms:c,adults:u,setAdults:i,accessibleRoom:m,setAccessibleRoom:h,...a})]})},args:{}};var g,P,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <>\r
        <Button onClick={handleClick}>Open popover</Button>\r
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} isMultiRoomPackage={isMultiRoomPackage} setIsMultiRoomPackage={setIsMultiRoomPackage} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults} childrens={childrens} setChildrens={setChildrens} seniors={seniors} setSeniors={setSeniors} seniorsArray={seniorsArray} setSeniorsArray={setSeniorsArray} childrensArray={childrensArray} setChildrensArray={setChildrensArray} pets={pets} setPets={setPets} petsArray={petsArray} setPetsArray={setPetsArray}
      // withPet={withPet}
      // setWithPet={setWithPet}
      accessibleRoom={accessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />\r
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
    return <>\r
        <Button onClick={handleClick}>Open popover</Button>\r
        <GuestRoomConfig open={open} anchorEl={anchorEl} onClose={handleClose} numRooms={numRooms} setNumRooms={setNumRooms} adults={adults} setAdults={setAdults}
      // withPet={withPet}
      // setWithPet={setWithPet}
      accessibleRoom={accessibleRoom} setAccessibleRoom={setAccessibleRoom} {...args} />\r
      </>;
  },
  args: {}
}`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const Q=["ShowAllProps","ShowLessProps"];export{n as ShowAllProps,r as ShowLessProps,Q as __namedExportsOrder,K as default};
