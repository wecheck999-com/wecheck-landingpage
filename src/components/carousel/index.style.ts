import styled, { css } from 'styled-components';
import { coreColors } from 'utils/colors';
import DotSvg from 'assets/images/icons/dot.svg';

const navigatorModifiers = css`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border: 2px solid ${coreColors.neutral.grey200};
  border-radius: 9px;
  cursor: pointer;

  svg path {
    fill: ${coreColors.neutral.grey200};
  }
`;

// @ts-ignore
const Styled = {
  Container: styled.div<{ ref: any }>`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  Wrap: styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  Box: styled.div<{
    activeIndex: number;
    dataLength: number;
    containerWidth: number | undefined;
    animationDuration: number;
    numberPerViewpot?: number;
  }>`
    transition: all ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out;
    display: flex;
    transform: ${({ activeIndex, containerWidth, numberPerViewpot, dataLength }) => {
      let range = 0;

      if (numberPerViewpot && dataLength < Number(numberPerViewpot)) {
        return 'unset';
      }

      if (!numberPerViewpot) {
        range = 0 - activeIndex * Number(containerWidth);
      } else {
        range = 0 - activeIndex * (Number(containerWidth) / Number(numberPerViewpot));
      }

      if (activeIndex >= dataLength - Number(numberPerViewpot)) {
        range = 0 - (dataLength - Number(numberPerViewpot)) * (Number(containerWidth) / Number(numberPerViewpot));
      }

      return `translateX(${range}px)`;
    }};
  `,
  CarouselImage: styled.div<{
    isActive: boolean;
    numberPerViewpot?: number;
    gap?: number;
  }>`
    box-sizing: border-box;
    height: 100%;
    flex: 0 0 auto; // Important! Do not remove this line of code. Or else anythings will went kaboom!

    width: ${({ numberPerViewpot }) => {
      if (!numberPerViewpot || numberPerViewpot === 0 || numberPerViewpot === 1) {
        return '100%';
      }
      return `${100 / numberPerViewpot}%`;
    }};

    ${({ gap }) =>
      gap &&
      css`
        padding-left: ${gap / 2}px;
        padding-right: ${gap / 2}px;
      `};
  `,
  DotsGroup: styled.div`
    margin: 40px auto auto auto;
    text-align: center;
    @media (max-width: 767px) {
      margin-top: 28px;
    }
  `,
  Dot: styled(DotSvg)<{ $isActive: boolean }>`
    fill: ${({ $isActive }) => ($isActive ? '#7B47E1' : '#c6c6d7')};
    margin-left: 9px;
    margin-right: 9px;
    width: 8px;
    height: 8px;
    cursor: pointer;

    @media (max-width: 767px) {
      transform: scale(0.6);
    }
  `,
  Prev: styled.div<{ disabled: boolean }>`
    ${navigatorModifiers};
    left: 20px;

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `}
  `,
  Next: styled.div<{ disabled: boolean }>`
    ${navigatorModifiers};
    right: 20px;

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `}
  `,
};

export default Styled;
