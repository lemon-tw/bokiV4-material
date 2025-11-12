import { default as React } from '../../../../node_modules/react';
import { CalendarTabOption } from '../../../types/calendarExtends';
import { CalendarLegendProps } from './CalendarLegend';
export interface CalendarToolbarProps {
    tabs?: CalendarTabOption[];
    tabValue?: string;
    onTabChange?: (value: string) => void;
    infoText?: React.ReactNode;
    legendItems?: CalendarLegendProps["items"];
    onTodayClick?: () => void;
    todayLabel?: React.ReactNode;
    filterItems?: React.ReactNode[];
}
export declare const CalendarToolbar: React.FC<CalendarToolbarProps>;
