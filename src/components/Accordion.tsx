import React, { ReactNode, useRef, useState } from "react";

import { css } from "../../styled-system/css";


const accordion = css({
  backgroundColor: '#eee',
  color: '#444',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: 'none',
  outline: 'none',
  transition: 'background 0.6s ease',
  padding: '8px'
})


type AccordionProps = {
  label: ReactNode
  children: ReactNode
}

function Accordion(props: AccordionProps) {
  const { children, label } = props
  const [active, setActive] = useState(true);
  const content = useRef(null);
  const [height, setHeight] = useState("150px");


  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : '150px');
  }

  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    })}>
      <div
        className={accordion}
        onClick={toggleAccordion}
      >
        {label}
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={css({
          backgroundColor: 'white',
          overflow: 'hidden',
          transition: 'maxHeight 0.6s ease',
        })}
      >
        <div
          className={css({
            fontSize: '14px'
          })}
        >
          {children}
        </div>
      </div>
    </div >
  );
}

export default Accordion;
