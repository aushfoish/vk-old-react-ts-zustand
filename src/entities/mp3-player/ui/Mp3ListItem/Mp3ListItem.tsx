import type React from "react";
import { Mp3ItemTime } from "../../../../shared/ui/Mp3ItemTime/Mp3ItemTime";
import { Button } from "@/shared/ui";
import styles from './Mp3ListItem.module.scss'

interface Mp3ListItemProps {
  children: React.ReactNode;
  title: string;
  band: string;
  audioSrc: string;
  id: string;
  playOnClick: () => void;
  index: number;
  time: string;
}

export const Mp3ListItem = (props: Mp3ListItemProps) => {
  const { children, title, band, id, playOnClick, time } = props;

  return (
    <Button className={styles.track} onClick={() => playOnClick()}>
    <div className={styles.name}>
      <div className={styles.play} id={id}>
        {children}
      </div>
      <div className={styles.mp3NameCont}>
        <p className={styles.musicName}>{title}</p>
        <div className={styles.hyphen}>-</div>
        <p className={styles.bandName}>{band}</p>
      </div>
    </div>
      
      <Mp3ItemTime label={time} />
    </Button>
  );
};
