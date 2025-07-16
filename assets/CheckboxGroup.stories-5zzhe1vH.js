import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as u}from"./index-D4H_InIO.js";import{C as h}from"./Checkbox-BCPvQphS.js";import{F as i}from"./FormControlLabel-DW3rN0lc.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-C83d1A0S.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./Checkbox-DccUR4pF.js";import"./SwitchBase-BOZ4B0C3.js";import"./useFormControl-DgxBWWJq.js";import"./useSlot-BWf5NxIe.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-CP1Oo1Bo.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./createSvgIcon-DPKGROsd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DQ9n5Pzv.js";import"./formControlState-Dq1zat_P.js";import"./Typography-D9Rxpb2u.js";import"./index-zquPRXLs.js";import"./useTheme-Bh-_xkMb.js";import"./extendSxProp-BVuH4Y-a.js";const c=({labels:t,parentLabel:k="全選"})=>{const[a,l]=u.useState(Array(t.length).fill(!1)),s=a.every(Boolean),b=a.some(Boolean)&&!s,g=n=>{l(Array(t.length).fill(n.target.checked))},x=n=>o=>{const d=[...a];d[n]=o.target.checked,l(d)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:k,control:e.jsx(h,{checked:s,indeterminate:b,onChange:g})}),t.map((n,o)=>e.jsx(i,{label:n,control:e.jsx(h,{style:{marginLeft:"48px"},checked:a[o],onChange:x(o)})},n))]})};c.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{labels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"子項目標籤陣列"},parentLabel:{required:!1,tsType:{name:"string"},description:"父層標籤（可選）",defaultValue:{value:'"全選"',computed:!1}}}};const J={title:"Components/Atoms/Checkbox/CheckboxGroup",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"}},args:{parentLabel:"父層",labels:["子項目1","子項目2"]}},r={render:t=>e.jsx(c,{...t}),parameters:{docs:{source:{code:`
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
                `.trim()}}}};var m,C,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(C=r.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};const K=["Standard"];export{r as Standard,K as __namedExportsOrder,J as default};
