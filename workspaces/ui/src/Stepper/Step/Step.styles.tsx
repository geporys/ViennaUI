import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const pointer = getPresets('stepper.pointer', {
    base: null,
    size: 'size',
    design: 'design',
    customCurrent: null,
    orientation: 'orientation',
    customDesign: 'design',
});

const title = getPresets('stepper.title', {
    base: null,
    design: 'design',
    orientation: 'orientation',
    titleValignTop: null,
});

const step = getPresets('stepper.step', {
    base: null,
});

export const Title = styled.div<any>`
    /* hack for truncating multiline text */
    display: -webkit-box;

    ${title.base}
    ${title.design}
    ${title.orientation}

    ${(props) =>
        props.orientation === 'vertical' &&
        props.valign === 'top' &&
        css`
            ${title.titleValignTop}
        `}
`;

export const Box = styled.div<any>`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 2;

    ${step.base}

    & > ${Title} {
        text-align: center;
    }

    &:nth-child(3) {
        flex: 1;

        ${(props) =>
            props.orientation === 'horizontal'
                ? css`
                      align-items: flex-start;
                      padding-left: 0;

                      & > ${Title} {
                          text-align: left;
                      }
                  `
                : css`
                      transform: translateY(-50%);
                  `}
    }

    &:last-child {
        flex: 1;

        ${(props) =>
            props.orientation === 'horizontal'
                ? css`
                      align-items: flex-end;
                      padding-right: 0;

                      & > ${Title} {
                          text-align: right;
                      }
                  `
                : css`
                      transform: translateY(50%);
                  `}
    }

    ${(props) =>
        props.orientation === 'vertical' &&
        css`
            align-items: center;
            padding-left: 0;
            flex-direction: row;

            & > ${Title} {
                text-align: left;
            }
        `}
`;

export const Point = styled.div<any>`
    position: relative;

    ${pointer.base}
    ${pointer.size}
    ${pointer.design}

    ${(props) =>
        props.size === 'l' &&
        css`
            ${pointer.orientation}

            &:after {
                content: '';
                position: absolute;
                display: block;

                ${pointer.customDesign};
            }
        `}
`;
