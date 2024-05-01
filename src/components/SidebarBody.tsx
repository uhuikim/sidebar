import SidebarMenuItem from './SidebarMenuItem';
import SidebarSectionItem from './SidebarSectionItem';
import { css } from '../../styled-system/css';
import { Stack } from '../../styled-system/jsx';

type SidebarBodyProps = {
  data: any;
  contentNavValue: string;
};

const SidebarBody = (props: SidebarBodyProps) => {
  const { data, contentNavValue } = props;


  return (
    <Stack
      gap={0}
    >
      {data.map((el, idx) => {
        const type = el.type;

        if (type === 'section') {
          return <SidebarSectionItem key={idx} data={el} contentNavValue={contentNavValue} />;
        }

        if (type === 'menu') {
          return <SidebarMenuItem key={idx} data={el} contentNavValue={contentNavValue} />;
        }
      })}
    </Stack>
  );
};

export default SidebarBody;
