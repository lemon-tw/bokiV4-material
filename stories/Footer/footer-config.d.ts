export declare const footerDefaultData: {
    links: ({
        label: string;
        href: string;
        icon: import("react/jsx-runtime").JSX.Element;
    } | {
        label: string;
        href: string;
        icon?: undefined;
    })[];
    brandName: string;
    contacts: {
        label: string;
        value: string;
    }[];
    address: string;
    license: string;
    socials: {
        ariaLabel: string;
        href: string;
        icon: import("react/jsx-runtime").JSX.Element;
    }[];
    legalText: string;
    isGroup: boolean;
};
type PolicyItem = string | {
    text: string;
    subItems?: string[];
};
type CancellationPlan = {
    key: string;
    color: string;
    Icon: React.ElementType;
    depositPolicies: PolicyItem[];
    cancelPolicies: PolicyItem[];
};
export declare const cancellationPlans: CancellationPlan[];
export {};
