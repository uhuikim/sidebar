import { useState } from 'react';
import { css } from '../../../styled-system/css';
import SidebarBody from '../SidebarBody';
import HeaderTab from './HeaderTab';
import { createManagerSidebar, createStudentSidebar } from '@/utils/createNewSidebar';


type SidebarProps = {
  contentNavValue: any;
};

const MainSidebar = (props: SidebarProps) => {
  const { contentNavValue } = props;
  const [currentValue, setCurrentValue] = useState('manager');

  const sidebarMenu = currentValue === 'manager' ? createManagerSidebar() : createStudentSidebar();

  return (
    <div className={css({ height: '[100%]', overflowY: 'auto' })}>
      <HeaderTab data={[
        { value: 'manager', label: '관리' },
        { value: 'student', label: '학습' },
      ]} onTabContentValueChange={setCurrentValue} />
      <SidebarBody data={sidebarMenu} contentNavValue={contentNavValue} />
    </div>
  );
};

export default MainSidebar;
