import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as u}from"./index-D4H_InIO.js";import{C as h}from"./Checkbox-F9rK6g2L.js";import{F as i}from"./FormControlLabel-xMbLjCuT.js";import"./defaultPalette-DlcfKNQ6.js";import"./DefaultPropsProvider-BDoOoArL.js";import"./createSvgIcon-D0snID3m.js";import"./SwitchBase-2tAMAaM_.js";import"./useSlot-C1rtH0nw.js";import"./ButtonBase-B-HqQx1y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BsSSm734.js";import"./Typography-DrcvgLn1.js";import"./index-S1Q5x8nm.js";import"./useTheme-DcF0HAVz.js";import"./extendSxProp-D1SuGYEU.js";const c=({labels:t,parentLabel:p="全選"})=>{const[a,l]=u.useState(Array(t.length).fill(!1)),s=a.every(Boolean),b=a.some(Boolean)&&!s,g=n=>{l(Array(t.length).fill(n.target.checked))},x=n=>o=>{const d=[...a];d[n]=o.target.checked,l(d)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:p,control:e.jsx(h,{checked:s,indeterminate:b,onChange:g})}),t.map((n,o)=>e.jsx(i,{label:n,control:e.jsx(h,{style:{marginLeft:"48px"},checked:a[o],onChange:x(o)})},n))]})};c.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{labels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"子項目標籤陣列"},parentLabel:{required:!1,tsType:{name:"string"},description:"父層標籤（可選）",defaultValue:{value:'"全選"',computed:!1}}}};const I={title:"Components/Checkbox/CheckboxGroup",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"}},args:{parentLabel:"父層",labels:["子項目1","子項目2"]}},r={render:t=>e.jsx(c,{...t}),parameters:{docs:{source:{code:`
const CheckboxGroup = ({ labels, parentLabel = "全選" }) => {
    const [checked, setChecked] = React.useState(
        Array(labels.length).fill(false)
    );
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;
    const handleParentChange = (e) => {
        setChecked(Array(labels.length).fill(e.target.checked));
    };
    const handleChildChange = (idx) => (e) => {
        const newChecked = [...checked];
        newChecked[idx] = e.target.checked;
        setChecked(newChecked);
    };

    const parentLabel = "父層",
    const labels = ["子項目1", "子項目2"],

    return (
        <>
            <FormControlLabel
                label={parentLabel}
                control={
                    <Checkbox
                        checked={allChecked}
                        indeterminate={indeterminate}
                        onChange={handleParentChange}
                    />
                }
            />
            {labels.map((label, idx) => (
                <FormControlLabel
                    key={label}
                    label={label}
                    control={
                        <Checkbox
                            style={{ marginLeft: "48px" }}
                            checked={checked[idx]}
                            onChange={handleChildChange(idx)}
                        />
                    }
                />
            ))}
        </>
    );
};
                `.trim()}}}};var m,C,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
const CheckboxGroup = ({ labels, parentLabel = "全選" }) => {
    const [checked, setChecked] = React.useState(
        Array(labels.length).fill(false)
    );
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;
    const handleParentChange = (e) => {
        setChecked(Array(labels.length).fill(e.target.checked));
    };
    const handleChildChange = (idx) => (e) => {
        const newChecked = [...checked];
        newChecked[idx] = e.target.checked;
        setChecked(newChecked);
    };

    const parentLabel = "父層",
    const labels = ["子項目1", "子項目2"],

    return (
        <>
            <FormControlLabel
                label={parentLabel}
                control={
                    <Checkbox
                        checked={allChecked}
                        indeterminate={indeterminate}
                        onChange={handleParentChange}
                    />
                }
            />
            {labels.map((label, idx) => (
                <FormControlLabel
                    key={label}
                    label={label}
                    control={
                        <Checkbox
                            style={{ marginLeft: "48px" }}
                            checked={checked[idx]}
                            onChange={handleChildChange(idx)}
                        />
                    }
                />
            ))}
        </>
    );
};
                \`.trim()
      }
    }
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const N=["Standard"];export{r as Standard,N as __namedExportsOrder,I as default};
