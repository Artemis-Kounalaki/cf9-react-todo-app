
export interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;
}
export type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    addClasses?: string;
}

export type IconButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    addClasses?: string;
}