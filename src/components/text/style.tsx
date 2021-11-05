import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div<{ sizeMedium: boolean }>`
  width: 100%;
  max-width: 27.3rem;
  height: 17.7rem;
  ${({ theme, sizeMedium }) => css`
    ${sizeMedium
      ? media.greaterThan('medium')`
           max-width: 48.9rem;
           height: auto;

      `
      : media.greaterThan('medium')`

     max-width: 60rem;
     height: 33.5rem;
    
    `}
  `}
`;

export const TopText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.fonts.medium};
    font-weight: 700;
    font-family: Inter;
    text-align: center;
    line-height: 2.7rem;
    display: flex;
    justify-content: center;

    ${media.greaterThan('medium')`
       font-size: ${theme.fonts.big};
       justify-content: flex-start;
       line-height: 3rem;
    `}
  `}
`;
export const Title = styled.h2<{ sizeMedium: boolean }>`
  ${({ theme, sizeMedium }) => css`
    margin-top: 0.8rem;
    color: ${theme.colors.primary};
    font-size: calc(${theme.fonts.small} + 1px);
    font-weight: 600;
    font-family: Inter;
    text-align: center;
    line-height: 3rem;

    ${sizeMedium
      ? media.greaterThan('medium')`
        font-size: ${theme.fonts.xBig};
        line-height: 3rem;
        text-align: left;
      `
      : media.greaterThan('medium')`
        font-size: ${theme.fonts.xxxxBig};
        line-height: 6.1rem;
        text-align: left;
    `}
  `}
`;
export const Paragraph = styled.p<{ sizeMedium: boolean }>`
  ${({ theme, sizeMedium }) => css`
    margin-top: 0.8rem;
    color: ${theme.colors.grayDark};
    font-size: ${theme.fonts.xxSmall};
    font-weight: 400;
    font-family: Inter;
    text-align: center;
    line-height: 1.4rem;
    ${sizeMedium
      ? media.greaterThan('medium')`
           font-size: calc(${theme.fonts.medium} - 1px);
           line-height: 3rem;
            text-align: left;
      `
      : media.greaterThan('medium')`
       font-size: ${theme.fonts.medium};
       line-height: 3.7rem;            
       text-align: left;

    `}
  `}
`;
