import React, { SVGAttributes } from 'react';

export interface LibraProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Libra: React.FC<LibraProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.021 5h2v14h4l1 1v1h-12v-1l1-1h4V7.003A6.626 6.626 0 007.358 8.28 3.43 3.43 0 015.607 9H3.021V7h2.586c.07-.025.426-.249.687-.413A8.582 8.582 0 0111.021 5zm0-3h2v2h-2V2zM8.329 12.768h-4.7v.038a3.364 3.364 0 004.7 0v-.038zM9.979 11v2.5a4.96 4.96 0 01-8 0V11h8zm10.392 1.768h-4.7v.038a3.364 3.364 0 004.7 0v-.038zM22.021 11v2.5a4.96 4.96 0 01-8 0V11h8zm-3.544-4h2.581v2.001h-2.586a3.43 3.43 0 01-1.751-.72 7.475 7.475 0 00-2.7-1.181V5.076a9.09 9.09 0 013.769 1.511c.26.164.617.388.687.413z' />
        </svg>
    );
};

Libra.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Libra.displayName = 'Libra';
export default Libra;
