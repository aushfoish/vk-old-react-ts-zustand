import styles from "./SkeletonAudioItem.module.scss";

export const AudioItemSkeleton = () => {
  return (
    <div className={styles.audioItemSkeleton}>
      <span className={styles.span}>
        <div className={`${styles.skeleton} ${styles.audioButton}`}></div>
        <div className={styles.audioName}>
          <div className={`${styles.skeleton} ${styles.name}`}></div>
          <div className={`${styles.skeleton} ${styles.band}`}></div>
        </div>
      </span>

      <div className={`${styles.skeleton} ${styles.duration}`}></div>
    </div>
  );
};
