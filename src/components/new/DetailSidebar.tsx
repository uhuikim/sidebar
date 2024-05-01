import { css } from '../../../styled-system/css';
import SidebarBody from '../SidebarBody';
import { createDetailSidebar } from '@/utils/createNewSidebar';
import HeaderText from './HeaderText';


type SidebarProps = {
  contentNavValue: any;
};

const DetailSidebar = (props: SidebarProps) => {
  const { contentNavValue } = props;
  const sidebarMenu = createDetailSidebar();

  return (
    <div className={css({ height: '[100%]', overflowY: 'auto' })}>
      <HeaderText text="학급별 수업 관리" />
      <SidebarBody data={sidebarMenu} contentNavValue={contentNavValue} />
    </div>
  );
};

export default DetailSidebar;
