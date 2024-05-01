import { useState } from 'react'
import { Flex } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';

type SidebarHeaderProps = {
  data: Array<{ value: string; label: string }>;
  tabContentValue?: string;
  onTabContentValueChange?: (value: string) => void;
};



const headerStyle = css({
  height: '[48px]',
  paddingX: '16',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const SidebarHeader = (props: SidebarHeaderProps) => {
  const { data, tabContentValue, onTabContentValueChange } = props;
  const isTab = data.length > 1;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className={headerStyle}
    >
      {isTab ? (
        <Flex gap={4}>
          {data.map(el => (<button className={css({
            backgroundColor: 'gray.200',
            padding: '4px 8px',
            borderRadius: "lg",
            cursor: 'pointer'
          })}
            key={el.value}
            onClick={() => onTabContentValueChange?.(el.value)}>{el.label}</button>))}
        </Flex>
      ) : (
        <p>
          {data[0].label}
        </p>
      )}
    </Flex>
  );
};

export default SidebarHeader;
