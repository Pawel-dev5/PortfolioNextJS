import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from { opacity: 0; }
    to { 
        opacity: 1;
        transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export const fadeDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
        visibility: hidden;
        transition: visibility, opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    to { 
        opacity: 1;
        transform: translateY(0px);
        visibility: initial;
        transition: visibility, opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;
export const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(60px);
        visibility: hidden;
        transition: visibility, opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    to { 
        opacity: 1;
        transform: translateY(0px);
        visibility: initial;
        transition: visibility, opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
   }
`;
