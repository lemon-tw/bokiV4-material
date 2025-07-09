import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "../../components/Atom/Checkbox/CheckboxGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "../../components/Atom/Checkbox/Checkbox";
import { Box } from "@mui/material";
// import { Box, Typography } from "@mui/material";

// Storybook 設定
const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/Atoms/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    parentLabel: { control: "text" },
    labels: { control: "object" },
    renderParent: { control: false },
    renderChild: { control: false },
  },
  args: {
    parentLabel: "水果全選",
    labels: ["Apple", "Banana", "Orange"],
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

// 第一個：預設樣式（橫向排列）
export const Default: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
      <CheckboxGroup {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      source: {
        code: `
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";

export default function DefaultExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
    />
  );
}
        `.trim(),
      },
    },
  },
};

// 第二個：直向排列
export const Vertical: Story = {
  render: (args) => (
    <CheckboxGroup
      {...args}
      renderParent={({ label, checked, indeterminate, onChange }) => (
        <Box sx={{ marginBottom: 2 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
      renderChild={({ label, checked, onChange, index }) => (
        <Box key={index} sx={{ marginLeft: 3, marginBottom: 1 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@/components/Atom/Checkbox/Checkbox";
import { Box } from "@mui/material";

export default function VerticalExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
      renderParent={({ label, checked, indeterminate, onChange }) => (
        <Box sx={{ marginBottom: 2 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
      renderChild={({ label, checked, onChange, index }) => (
        <Box key={index} sx={{ marginLeft: 3, marginBottom: 1 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
    />
  );
}
        `.trim(),
      },
    },
  },
};

// 第三個：全自定義樣式
// export const CustomLayout: Story = {
//   render: (args) => (
//     <Box sx={{
//       border: '2px solid #e0e0e0',
//       borderRadius: 2,
//       padding: 3,
//       backgroundColor: '#f9f9f9',
//       minWidth: 300
//     }}>
//       <CheckboxGroup
//         {...args}
//         renderParent={({ label, checked, indeterminate, onChange }) => (
//           <Box sx={{
//             backgroundColor: '#1976d2',
//             color: 'white',
//             padding: 2,
//             borderRadius: 1,
//             marginBottom: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <Typography variant="h6" component="span">
//               🍎 {label}
//             </Typography>
//             <Checkbox
//               checked={checked}
//               indeterminate={indeterminate}
//               onChange={onChange}
//               sx={{
//                 color: 'white',
//                 '&.Mui-checked': { color: 'white' }
//               }}
//             />
//           </Box>
//         )}
//         renderChild={({ label, checked, onChange, index }) => (
//           <Box
//             key={index}
//             sx={{
//               backgroundColor: 'white',
//               border: '1px solid #ddd',
//               borderRadius: 1,
//               padding: 1.5,
//               marginBottom: 1,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               '&:hover': {
//                 backgroundColor: '#f5f5f5'
//               }
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Typography variant="body2" color="text.secondary">
//                 {index + 1}.
//               </Typography>
//               <Typography variant="body1">
//                 {label === 'Apple' ? '🍎' : label === 'Banana' ? '🍌' : '🍊'} {label}
//               </Typography>
//             </Box>
//             <Checkbox
//               checked={checked}
//               onChange={onChange}
//               size="small"
//               sx={{ color: '#ff9800' }}
//             />
//           </Box>
//         )}
//       />
//     </Box>
//   ),
//   parameters: {
//     docs: {
//       source: {
//         code: `
// import React from "react";
// import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@/components/Atom/Checkbox/Checkbox";
// import { Box, Typography } from "@mui/material";

// export default function CustomLayoutExample() {
//   return (
//     <Box sx={{ 
//       border: '2px solid #e0e0e0', 
//       borderRadius: 2, 
//       padding: 3, 
//       backgroundColor: '#f9f9f9',
//       minWidth: 300
//     }}>
//       <CheckboxGroup
//         parentLabel="水果全選"
//         labels={["Apple", "Banana", "Orange"]}
//         renderParent={({ label, checked, indeterminate, onChange }) => (
//           <Box sx={{ 
//             backgroundColor: '#1976d2', 
//             color: 'white', 
//             padding: 2, 
//             borderRadius: 1,
//             marginBottom: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <Typography variant="h6" component="span">
//               🍎 {label}
//             </Typography>
//             <Checkbox
//               checked={checked}
//               indeterminate={indeterminate}
//               onChange={onChange}
//               sx={{ 
//                 color: 'white',
//                 '&.Mui-checked': { color: 'white' }
//               }}
//             />
//           </Box>
//         )}
//         renderChild={({ label, checked, onChange, index }) => (
//           <Box 
//             key={index} 
//             sx={{ 
//               backgroundColor: 'white',
//               border: '1px solid #ddd',
//               borderRadius: 1,
//               padding: 1.5,
//               marginBottom: 1,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               '&:hover': {
//                 backgroundColor: '#f5f5f5'
//               }
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Typography variant="body2" color="text.secondary">
//                 {index + 1}.
//               </Typography>
//               <Typography variant="body1">
//                 {label === 'Apple' ? '🍎' : label === 'Banana' ? '🍌' : '🍊'} {label}
//               </Typography>
//             </Box>
//             <Checkbox
//               checked={checked}
//               onChange={onChange}
//               size="small"
//               sx={{ color: '#ff9800' }}
//             />
//           </Box>
//         )}
//       />
//     </Box>
//   );
// }
//         `.trim(),
//       },
//     },
//   },
// };
