
'use client'
import { css } from "../../../styled-system/css";
import { useSelectedLayoutSegment } from "next/navigation";
import DetailSidebar from "@/components/new/DetailSidebar";


export default function Detail() {
  const screenType = useSelectedLayoutSegment();

  return (
    <main className={css({
      display: 'grid',
      gridTemplateColumns: '260px auto',
      height: '100%'
    })}>
      <DetailSidebar contentNavValue={screenType} />
      <div className={css({
        background: '#f1f1f1',
      })}>컨텐츠</div>
    </main>
  );
}
