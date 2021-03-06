import React, { SVGAttributes } from 'react';

export interface PrintProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Print: React.FC<PrintProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 4v2H5V4.063C5 2.923 5.924 2 7.063 2h9.875C18.077 2 19 2.924 19 4.063V6h-2V4H7zm-2 6h2v2H5v-2zm14.9-3c1.16 0 2.1.94 2.1 2.1v7.8a2.1 2.1 0 01-2.1 2.1H19v.938A2.063 2.063 0 0116.938 22H7.063A2.063 2.063 0 015 19.938V19h-.9A2.1 2.1 0 012 16.9V9.1C2 7.94 2.94 7 4.1 7h15.8zM17 20v-5H7v5h10zm3-3.1V9H4v8h1v-4h14v4h.9a.1.1 0 00.1-.1z' />
        </svg>
    );
};

Print.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Print.displayName = 'Print';
export default Print;
