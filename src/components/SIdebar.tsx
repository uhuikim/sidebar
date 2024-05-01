import { useState } from 'react';
import { css } from '../../styled-system/css';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

type SidebarProps = {
  sidebarMenu: any;
  contentNavValue: any;
};

const Sidebar = (props: SidebarProps) => {
  const { sidebarMenu, contentNavValue } = props;
  const [currentValue, setCurrentValue] = useState(sidebarMenu.header[0].value);


  return (
    <div className={css({ height: '[100%]', overflowY: 'auto' })}>
      <SidebarHeader data={sidebarMenu.header} onTabContentValueChange={setCurrentValue} />
      <SidebarBody data={sidebarMenu[currentValue]} contentNavValue={contentNavValue} />
    </div>
  );
};

export default Sidebar;
