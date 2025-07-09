import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../components/Atom/Table/Table";
import { TableData, Column } from "../../types/tableExtends";
// import { Checkbox } from "../../components/Atom/Checkbox/Checkbox";
// import { Button } from "../../components/Atom/Button/Button";

// 範例資料
const sampleData: TableData[] = [
    {
        id: "1",
        name: "Candy, Lee",
        email: "candylee@example.com",
        status: "待確認",
        team: "Tag",
        avatar: "https://i.pravatar.cc/150?u=1",
        members: ["成員 A", "成員 B"],
    },
    {
        id: "2",
        name: "Vicky, Yu",
        email: "vickyyu@example.com",
        status: "已通過",
        team: "Dev",
        avatar: "https://i.pravatar.cc/150?u=2",
        members: ["成員 C"],
    },
];

// 欄位定義
const columns: Column<TableData>[] = [
    { id: "name", label: "姓名", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 200 },
    { id: "status", label: "狀態", minWidth: 100 },
    { id: "team", label: "團隊", minWidth: 100 },
    {
        id: "members",
        label: "成員",
        minWidth: 150,
        format: (value: string | string[]) =>
            Array.isArray(value) ? value.join("、") : value,
    },
];

// const meta: Meta<typeof Table> = {
//     title: "Components/Atoms/Table/Table",
//     component: Table,
//     tags: ["autodocs"],
//     parameters: {
//         layout: "fullscreen",
//     },
//     argTypes: {
//         data: { control: "object" },
//         columns: { control: "object" },
//         onSelectionChange: { action: "selectionChanged" },
//         initialSelectedIds: { control: "object" },
//         loading: { control: "boolean" },

//     },
//     args: {
//         data: sampleData,
//         columns,
//         initialSelectedIds: [],
//         loading: false,
//     },
// };

const meta: Meta<typeof Table> = {
    title: "Components/Atoms/Table/Table",
    component: Table,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    argTypes: {
        // 自訂 props
        data: { control: "object" },
        columns: { control: "object" },
        onSelectionChange: { action: "selectionChanged" },
        initialSelectedIds: { control: "object" },
        loading: { control: "boolean" },

        // 官方 Paper props
        elevation: { control: { type: "number", min: 0, max: 24 } },
        variant: { control: { type: "select", options: ["elevation", "outlined"] } },
        sx: { control: "object" },
        square: { control: "boolean" },
        // 你也可以加入 style, className 等
        style: { control: "object" },
        className: { control: "text" },
    },
    args: {
        data: sampleData,
        columns,
        initialSelectedIds: [],
        loading: false,
        elevation: 1,
        variant: "elevation",
        sx: {},
        square: false,
        style: {},
        className: "",
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

// 1. 預設範例
export const Default: Story = {
    render: (args) => <Table {...args} />,
    parameters: {
        docs: {
            source: {
                code: `
import React from "react";
import Table from "@/components/Atom/Table/Table";
import { TableData, Column } from "@/types/tableExtends";

const sampleData: TableData[] = [
  {
    id: "1",
    name: "Candy, Lee",
    email: "candylee@example.com",
    status: "待確認",
    team: "Tag",
    avatar: "https://i.pravatar.cc/150?u=1",
    members: ["成員 A", "成員 B"],
  },
  {
    id: "2",
    name: "Vicky, Yu",
    email: "vickyyu@example.com",
    status: "已通過",
    team: "Dev",
    avatar: "https://i.pravatar.cc/150?u=2",
    members: ["成員 C"],
  }
];
const columns: Column<TableData>[] = [
  { id: "name", label: "姓名", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "status", label: "狀態", minWidth: 100 },
  { id: "team", label: "團隊", minWidth: 100 },
  {
    id: "members",
    label: "成員",
    minWidth: 150,
    format: (value: string | string[]) => Array.isArray(value) ? value.join("、") : value,
  }
];

export default function DefaultExample() {
  return <Table data={sampleData} columns={columns} />;
}
        `.trim(),
            },
        },
    },
};

// 先保留
// 2. 帶批次動作範例
// export const WithBatchActions: Story = {
//     render: (args) => (
//         <Table
//             {...args}
//             renderBatchActions={({ selectedItems, onAction }) => (
//                 <Button
//                     variant="contained"
//                     onClick={() => onAction("delete")}
//                     disabled={selectedItems.length === 0}
//                     sx={{ mb: 2 }}
//                 >
//                     刪除選取 ({selectedItems.length})
//                 </Button>
//             )}
//         />
//     ),
//     parameters: {
//         docs: {
//             source: {
//                 code: `
// import React from "react";
// import Table from "@/components/Atom/Table/Table";
// import { TableData, Column } from "@/types/tableExtends";
// import { Button } from "@mui/material";

// const sampleData: TableData[] = [ /* ...同上 */ ];
// const columns: Column<TableData>[] = [ /* ...同上 */ ];

// export default function WithBatchActionsExample() {
//   return (
//     <Table
//       data={sampleData}
//       columns={columns}
//       renderBatchActions={({ selectedItems, onAction }) => (
//         <Button
//           variant="contained"
//           onClick={() => onAction("delete")}
//           disabled={selectedItems.length === 0}
//         >
//           刪除選取 ({selectedItems.length})
//         </Button>
//       )}
//     />
//   );
// }
//         `.trim(),
//             },
//         },
//     },
// };

// 3. 自定義列渲染範例
// export const CustomRows: Story = {
//     render: (args) => (
//         <Table
//             {...args}
//             renderRow={({ item, checked, onChange, index }) => (
//                 <tr key={item.id} style={{ background: checked ? "#eef" : "transparent" }}>
//                     <td style={{ padding: "8px" }}>
//                         <Checkbox
//                             checked={checked}
//                             onChange={onChange}
//                             inputProps={{ "aria-label": "選擇項目" }}
//                         />
//                     </td>
//                     <td colSpan={5} style={{ padding: "8px" }}>
//                         <strong>{index + 1}. {item.name}</strong><br />
//                         <small>{item.email} ｜ {item.team}</small>
//                     </td>
//                 </tr>
//             )}
//         />
//     ),
//     parameters: {
//         docs: {
//             source: {
//                 code: `
// import React from "react";
// import Table from "@/components/Atom/Table/Table";
// import { TableData, Column } from "@/types/tableExtends";
// import Checkbox from "@mui/material/Checkbox";

// const sampleData: TableData[] = [ /* ...同上 */ ];
// const columns: Column<TableData>[] = [ /* ...同上 */ ];

// export default function CustomRowsExample() {
//   return (
//     <Table
//       data={sampleData}
//       columns={columns}
//       renderRow={({ item, checked, onChange, index }) => (
//         <tr key={item.id} style={{ background: checked ? "#eef" : "transparent" }}>
//           <td style={{ padding: "8px" }}>
//             <Checkbox checked={checked} onChange={onChange} />
//           </td>
//           <td colSpan={5} style={{ padding: "8px" }}>
//             <strong>{index + 1}. {item.name}</strong><br/>
//             <small>{item.email} ｜ {item.team}</small>
//           </td>
//         </tr>
//       )}
//     />
//   );
// }
//         `.trim(),
//             },
//         },
//     },
// };
