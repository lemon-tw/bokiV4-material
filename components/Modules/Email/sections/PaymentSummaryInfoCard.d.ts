import { default as React } from '../../../../../node_modules/react';
import { PaymentSummaryItem } from '../configs/BookingMailConfig';
type PaymentSummaryInfoCardProps = {
    summaryTitle: string;
    summaryItems: PaymentSummaryItem[];
};
export declare const PaymentSummaryInfoCard: React.FC<PaymentSummaryInfoCardProps>;
export default PaymentSummaryInfoCard;
