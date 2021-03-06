import React, { SVGAttributes } from 'react';

export interface CircleCheckedDashedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CircleCheckedDashed: React.FC<CircleCheckedDashedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 15.414l10-10V4h-1.414L12 12.586 8.414 9H7v1.414l5 5zm9.266-7.18A9.981 9.981 0 0122 12v.054l-2-.01V12a8.01 8.01 0 00-.305-2.196l1.571-1.571zm-2.985-4.015l-1.424 1.424a7.965 7.965 0 00-3.026-1.433l.455-1.947a9.969 9.969 0 013.995 1.956zM12 22v-2a7.957 7.957 0 004.269-1.233l1.069 1.69A9.957 9.957 0 0112 22zm7.052-2.91l-1.41-1.418a7.985 7.985 0 002.158-3.884l1.95.445a9.985 9.985 0 01-2.698 4.858zM12.109 2l-.021 2h-.086a7.959 7.959 0 00-4.196 1.186l-1.05-1.702A9.959 9.959 0 0112.002 2h.107zM5.026 4.834L6.42 6.266a7.988 7.988 0 00-2.2 3.861l-1.946-.466a9.988 9.988 0 012.75-4.828zM2 11.836l2 .032-.001.13a7.96 7.96 0 001.162 4.158l-1.708 1.04A9.96 9.96 0 012 11.996l.001-.16zm2.794 7.099l1.441-1.387a7.99 7.99 0 003.849 2.222l-.477 1.942a9.99 9.99 0 01-4.813-2.777zm6.987 3.063l.043-2 .172.002-.001 2c-.071 0-.143 0-.214-.002z' />
        </svg>
    );
};

CircleCheckedDashed.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CircleCheckedDashed.displayName = 'CircleCheckedDashed';
export default CircleCheckedDashed;
