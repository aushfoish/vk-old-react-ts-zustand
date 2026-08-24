import type React from "react";
import styles from "./MicroHeader.module.scss";

interface Micro_headerProps {
  children: React.ReactNode;
  secondChildren?: string;
  count?: string;
}

export const Micro_header = (props: Micro_headerProps) => {
  const { children, count } = props;

  return (
    <div className={styles.microHeader}>
      <a href="#" className={styles.headerLink}>
        {children}
      </a>
    
      {count && count.length > 0 && <div className={styles.counter}>{count}</div>}
    </div>
  );
};
