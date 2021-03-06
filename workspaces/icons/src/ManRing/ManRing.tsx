import React, { SVGAttributes } from 'react';

export interface ManRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ManRing: React.FC<ManRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm.36 3.8a1.67 1.67 0 00-1.7 1.63v1.14a1.7 1.7 0 103.4 0V9.43a1.67 1.67 0 00-1.7-1.63zm0-1.8a3.47 3.47 0 013.5 3.43v1.14a3.5 3.5 0 01-7 0V9.43A3.48 3.48 0 0112.36 6zm5.14 10.53a7 7 0 01-1.47 1.36 1.73 1.73 0 00-1.51-.89h-5c-.63 0-1.212.34-1.52.89a7.19 7.19 0 01-1.5-1.36 3.76 3.76 0 013-1.53h5a3.73 3.73 0 013 1.53z' />
        </svg>
    );
};

ManRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ManRing.displayName = 'ManRing';
export default ManRing;
