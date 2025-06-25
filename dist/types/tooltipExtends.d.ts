import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
export interface CustomRichTooltipProps extends MuiTooltipProps {
    /** RichhTooltip 的內文 */
    content?: string;
    /** actions 接收 ReactNode，可以用 Button、Link 等 */
    actions?: React.ReactNode;
    /** false時讓滑鼠可以「進入 tooltip 裡面」不會直接關閉它 */
    disableInteractive?: boolean;
}
