import { cloneElement, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & {
  children: ReactElement;
  activeClassName: string;
  target?: string;
};

const ActiveLink = ({ children, activeClassName, target = '_self', ...props }: Props) => {
  const { asPath } = useRouter();
  const childClassName = children.props.className ?? '';
  const newClassName = `${childClassName} ${activeClassName ?? ''}`;
  const className = asPath === props.href ? newClassName.trim() : '';

  return (
    <Link {...props}>
      <a target={target}>{cloneElement(children, { className })}</a>
    </Link>
  );
};

export default ActiveLink;
