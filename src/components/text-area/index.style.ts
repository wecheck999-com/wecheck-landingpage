import styled, { css } from 'styled-components';
import { coreColors, mixColors } from 'utils/colors';

const IconsModifier = css`
  position: absolute;
  top: 32px;
  left: 32px;
`;

const Styled = {
  TextAreaWrapper: styled.div`
    position: relative;
  `,
  PreIcon: styled.span<{ onClick?: any }>`
    left: 32px;
    ${IconsModifier}
    z-index: 9;
    svg {
      path {
        fill: #c6c6d7;
      }
    }
  `,
  Label: styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${mixColors.title};
    &.custom-label-text-area {
      margin-bottom: 12px;
    }
  `,
  SubLabel: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${coreColors.neutral.grey600};
    margin-top: 5px;
    margin-bottom: 8px;
  `,
  TextArea: styled.textarea<{
    hasPreIcon?: boolean;
    hasPostIcon?: boolean;
  }>`
    padding-left: ${({ hasPreIcon }) => (hasPreIcon ? '66px' : '32px')};
    padding-right: ${({ hasPostIcon }) => (hasPostIcon ? '66px' : '32px')};
    padding-top: 32px;
    padding-bottom: 32px;
    width: 100%;
    height: 150px;
    color: #ffffff;
    background: #4d5282;
    border-radius: 16px;
    border: 1px solid #4d5282;
    font: 400 18px/24px 'Sen';
    resize: none;

    :focus {
      border: 2px solid #7b47e1;
      caret-color: #7b47e1;
    }

    ::placeholder {
      color: #c6c6d7;
    }
  `,
  Count: styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #aeaeb2;
    position: absolute;
    right: 32px;
    bottom: 16px;
  `,
};

export default Styled;
