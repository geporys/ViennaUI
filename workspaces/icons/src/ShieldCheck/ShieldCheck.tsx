import React, { SVGAttributes } from 'react';

export interface ShieldCheckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ShieldCheck: React.FC<ShieldCheckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 9.453l-6 6-3-3V11h1.375L11 12.625 15.625 8H17v1.453z' />
            <path
                fillRule='evenodd'
                d='M20 4a15.179 15.179 0 01-6-1.441l-1-.568h-2A14.344 14.344 0 014 4H3v8.686a7.936 7.936 0 004.411 7.137l4.59 2.3 4.586-2.293A7.936 7.936 0 0021 12.686V4h-1zm-1.778 1.597a11.6 11.6 0 01-4.667-1.146L12.779 4h-1.556a10.98 10.98 0 01-5.444 1.597H5V12.5c-.008 2.404 1.323 4.604 3.43 5.672L12 20l3.568-1.822c2.11-1.069 3.442-3.271 3.432-5.678V5.597h-.778z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ShieldCheck.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ShieldCheck.displayName = 'ShieldCheck';
export default ShieldCheck;
