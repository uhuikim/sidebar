import { cva, css } from '../../styled-system/css';
import { Flex } from '../..//styled-system/jsx';
import Link from 'next/link';

type SidebarMenuItemProps = {
  data: any;
  contentNavValue: string;
};

const menuStyle = cva({
  base: {
    paddingX: '8',
    borderRadius: '8',
    color: 'mui.text.secondary',
    _hover: {
      backgroundColor: '[hsla(0, 0%, 0%, 0.06)]',
    },
  },
  variants: {
    visual: {
      active: {
        backgroundColor: 'mui.primary.lightActive',
        _hover: {
          background:
            '[linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), token(colors.mui.primary.lightActive) ]',
        },
      },
    },
  },
});

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { data, contentNavValue } = props;
  const { href, icon, label, value } = data;
  const isActive = contentNavValue === value;

  return (
    <Link href={href}>
      <Flex gap={8} alignItems="center" className={menuStyle(isActive ? { visual: 'active' } : {})}>
        <Flex
          className={css({
            fontSize: '[20px]',
            height: '[36px]',
            alignItems: 'center',
          })}
        >
          {icon}
        </Flex>
        <p>{label}</p>
      </Flex>
    </Link >
  );
};

export default SidebarMenuItem;
