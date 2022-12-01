import { FC, ReactNode, useState } from 'react';
import Styled from './index.style';
import cx from 'classnames';

interface Props {
  label?: string;
  id?: string;
  name?: string;
  subLabel?: ReactNode | string;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
}

const TextArea: FC<Props> = ({
  label,
  subLabel,
  preIcon = null,
  postIcon = null,
  maxLength = 3000,
  onChange,
  placeholder,
  ...props
}) => {
  const [count, setCount] = useState(0);
  return (
    <Styled.TextAreaWrapper className="text-area-custom">
      <Styled.PreIcon className="pre-icon">{preIcon}</Styled.PreIcon>
      {label && (
        <Styled.Label
          className={cx('label-text-area', {
            'custom-label-text-area': !subLabel,
          })}
        >
          {label}
        </Styled.Label>
      )}
      <Styled.TextArea
        {...props}
        placeholder={placeholder}
        hasPreIcon={!!preIcon}
        hasPostIcon={!!postIcon}
        onChange={(e) => {
          setCount(e.target.value.length);
          onChange(e);
        }}
      />
      <Styled.Count>
        {count}/{maxLength}
      </Styled.Count>
    </Styled.TextAreaWrapper>
  );
};
export default TextArea;
