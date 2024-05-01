import React from 'react';
import { Flex } from '../../../styled-system/jsx';
import { css } from '../../../styled-system/css';

type HeaderTab = {
  data: any;
  onTabContentValueChange: (string) => void
}
const headerStyle = css({
  height: '[48px]',
  paddingX: '16',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const HeaderTab = (props) => {
  const { data, onTabContentValueChange } = props;

  return (
    <div className={headerStyle}>

      <Flex gap={4} >
        {
          data.map(el => (<button className={css({
            backgroundColor: 'gray.200',
            padding: '4px 8px',
            borderRadius: "lg",
            cursor: 'pointer'
          })}
            key={el.value}
            onClick={() => onTabContentValueChange?.(el.value)}>{el.label}</button>))
        }
      </Flex >

    </div>
  );
};

export default HeaderTab;