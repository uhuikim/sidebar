
'use client'
import createSidebarMenu from "@/utils/createSidebar";
import { css } from "../../../styled-system/css";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/components/SIdebar";
import MainSidebar from "@/components/new/MainSidebar";


export default function Detail() {
  const screenType = useSelectedLayoutSegment();

  return (
    <main className={css({
      display: 'grid',
      gridTemplateColumns: '260px auto',
      height: '100%'
    })}>
      <MainSidebar contentNavValue={screenType} />
      <div className={css({
        background: '#f1f1f1',
      })}>컨텐츠</div>
    </main>
  );
}
