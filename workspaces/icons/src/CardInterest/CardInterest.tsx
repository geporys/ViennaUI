import React, { SVGAttributes } from 'react';

export interface CardInterestProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardInterest: React.FC<CardInterestProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v10a2 2 0 01-2 2h-5v-2h5V8H2V4a2 2 0 012-2h16zM4 6h16V4H4v2zM2 19.586L12.586 9H14v1.414L3.414 21H2v-1.414zM3.977 14A1.977 1.977 0 012 12.023v-1.046C2 9.885 2.885 9 3.977 9h1.046C6.115 9 7 9.885 7 10.977v1.046A1.977 1.977 0 015.023 14H3.977zM3.8 10.8v1.4h1.4v-1.4H3.8zm8.223 5.2A1.977 1.977 0 0114 17.977v1.046A1.977 1.977 0 0112.023 21h-1.046A1.977 1.977 0 019 19.023v-1.046C9 16.885 9.885 16 10.977 16h1.046zm.177 3.2v-1.4h-1.4v1.4h1.4z' />
        </svg>
    );
};

CardInterest.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardInterest.displayName = 'CardInterest';
export default CardInterest;
