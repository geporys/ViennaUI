import React, { SVGAttributes } from 'react';

export interface FoodBurgerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FoodBurger: React.FC<FoodBurgerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.62 12a3.73 3.73 0 012.24.65A1.8 1.8 0 0022 13v2a3.8 3.8 0 01-2.23-.64 1.78 1.78 0 00-1.15-.36 1.82 1.82 0 00-1.12.36 3.73 3.73 0 01-2.17.64 3.91 3.91 0 01-2.22-.65A1.75 1.75 0 0012 14a1.79 1.79 0 00-1.18.35 3.84 3.84 0 01-2.2.65 3.79 3.79 0 01-2.17-.64A1.82 1.82 0 005.28 14a1.88 1.88 0 00-1.1.36A3.88 3.88 0 012 15v-2a1.93 1.93 0 001.11-.36A3.81 3.81 0 015.28 12a3.77 3.77 0 012.21.65 1.79 1.79 0 001.13.35 1.81 1.81 0 001.16-.36 4 4 0 014.32 0 1.91 1.91 0 001.18.36 1.77 1.77 0 001.13-.35 3.77 3.77 0 012.21-.65zm.45 5.77H4.76a1.79 1.79 0 001.75 1.4h10.82a1.79 1.79 0 001.74-1.4zM20.92 16v1.41A3.59 3.59 0 0117.33 21H6.51a3.58 3.58 0 01-3.59-3.59V16h18zm-9-11.2a11 11 0 00-6.09 1.47 2 2 0 00-1 1.79v1.2h14.34v-1.2a2.39 2.39 0 00-1.07-1.88c-1.18-.72-2.66-1.38-6.18-1.38zm0-1.8c3.67 0 5.57.66 7.17 1.66A4.16 4.16 0 0121 8.06v3H3v-3a3.8 3.8 0 011.92-3.33 12.79 12.79 0 017-1.73z' />
        </svg>
    );
};

FoodBurger.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FoodBurger.displayName = 'FoodBurger';
export default FoodBurger;
