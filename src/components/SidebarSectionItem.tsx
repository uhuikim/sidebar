import { useState } from 'react';
import { flex } from '../../styled-system/patterns';
import SidebarMenuItem from './SidebarMenuItem';
import Accordion from './Accordion';
type SidebarSectionItemProps = {
  data: any;
  contentNavValue: string;
};
const SidebarSectionItem = (props: SidebarSectionItemProps) => {
  const { data, contentNavValue } = props;
  const [expanded, setExpanded] = useState(true);

  const toggleExpended = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      label={
        <p
          className={flex({
            paddingX: 4,
            grow: 0,
            alignItems: 'center',
            _hover: {
              borderRadius: '4',
              backgroundColor: '[hsla(0, 0%, 0%, 0.06)]',
            },
          })}
        >
          {data.label}
        </p>
      }
    >
      {data.menus.map((menu: any) => {
        return <SidebarMenuItem key={menu.value} data={menu} contentNavValue={contentNavValue} />;
      })}
    </Accordion>
  );
};

export default SidebarSectionItem;
