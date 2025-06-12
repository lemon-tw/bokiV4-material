// import Checkbox from '@mui/material/Checkbox';

// 這裡以自訂 SVG 為例，請根據你要的圓弧幅度繪製
export const CustomIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#e0e0e0" />
        <path
            d="M5 10 Q 20 0, 35 10 Q 40 20, 20 38 Q 0 20, 5 10"
            fill="#fff"
            opacity="0.4"
        />
        <rect x="12" y="12" width="16" height="16" rx="3" fill="none" stroke="#333" strokeWidth="2" />
    </svg>
);

{/* <Checkbox
    icon={CustomIcon}
    checkedIcon={CustomIcon} // 你可以再畫一個有勾勾的SVG
    indeterminateIcon={CustomIcon} // 你可以再畫一個有橫線的SVG
/> */}
