import React from 'react';
import { css } from '../../../styled-system/css';

type Props = {
  text: string
}

const headerStyle = css({
  height: '[48px]',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingX: '16',
})

const HeaderText = (props: Props) => {
  const { text } = props;
  return (
    <div className={headerStyle}>
      <p>{text}</p>
    </div>
  );
};

export default HeaderText;