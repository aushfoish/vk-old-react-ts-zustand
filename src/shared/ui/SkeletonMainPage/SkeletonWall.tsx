import styles from './SkeletonMainPage.module.scss'
import '@/shared/ui/SkeletonMainPage/SkeletonMainPage.scss'

export const SkeletonWall = () => {
  return (
    <>
      <div
        className={`skeleton-shimmer ${styles.headerLink}`}
        style={{ height: "15px" }}
      ></div>
      <div
        className={`skeleton-shimmer ${styles.headerLink}`}
        style={{ height: "20px" }}
      ></div>
      <div className={styles.wallContent}>
        <div className={styles.postGenuinely} style={{ maxWidth: "350px" }}>
          <div
            className={`skeleton-shimmer ${styles.userpic}`}
            style={{ width: "50px", height: "50px" }}
          ></div>
          <div className={styles.contentPost} style={{ width: "290px" }}>
            <div
              className={`skeleton-shimmer ${styles.postHead}`}
              style={{ width: "30%", height: "14.44px" }}
            ></div>
            <div
              className="skeleton-text"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5px",
              }}
            >
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "100%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "90%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "50%", height: "13px" }}
              ></div>
            </div>
            <div className={styles.likeShareDate}>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.postGenuinely} style={{ maxWidth: "350px" }}>
          <div
            className={`skeleton-shimmer ${styles.userpic}`}
            style={{ width: "50px", height: "50px" }}
          ></div>
          <div className={styles.contentPost} style={{ width: "290px" }}>
            <div
              className={`skeleton-shimmer ${styles.postHead}`}
              style={{ width: "30%", height: "14.44px" }}
            ></div>
            <div
              className="skeleton-text"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5px",
              }}
            >
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "85%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "55%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "65%", height: "13px" }}
              ></div>
            </div>
            <div className={styles.likeShareDate}>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.postGenuinely} style={{ maxWidth: "350px" }}>
          <div
            className={`skeleton-shimmer ${styles.userpic}`}
            style={{ width: "50px", height: "50px" }}
          ></div>
          <div className={styles.contentPost} style={{ width: "290px" }}>
            <div
              className={`skeleton-shimmer ${styles.postHead}`}
              style={{ width: "30%", height: "14.44px" }}
            ></div>
            <div
              className="skeleton-text"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5px",
              }}
            >
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "70%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "90%", height: "13px" }}
              ></div>
            </div>
            <div className={styles.likeShareDate}>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.postGenuinely} style={{ maxWidth: "350px" }}>
          <div
            className={`skeleton-shimmer ${styles.userpic}`}
            style={{ width: "50px", height: "50px" }}
          ></div>
          <div className={styles.contentPost} style={{ width: "290px" }}>
            <div
              className={`skeleton-shimmer ${styles.postHead}`}
              style={{ width: "30%", height: "14.44px" }}
            ></div>
            <div
              className="skeleton-text"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5px",
              }}
            >
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "100%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "90%", height: "13px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.textContent}`}
                style={{ width: "50%", height: "13px" }}
              ></div>
            </div>
            <div className={styles.likeShareDate}>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
              <div
                className={`skeleton-shimmer ${styles.dateTimeContainer}`}
                style={{ width: "45%", height: "10px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
