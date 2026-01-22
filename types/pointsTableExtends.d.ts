export type PointsEntryStatus = "usable" | "used" | "expired";
export type PointsEntryDetail = {
    label: string;
    value: string;
};
export type PointsEntry = {
    id: string;
    date: string;
    item: string;
    points: number;
    status: PointsEntryStatus;
    details?: PointsEntryDetail[];
};
export type PointsTableProps = {
    entries: PointsEntry[];
    pageSize?: number;
    emptyLabel?: string;
};
