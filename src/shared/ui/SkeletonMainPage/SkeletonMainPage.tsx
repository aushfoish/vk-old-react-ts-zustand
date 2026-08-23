import '@/shared/ui/SkeletonMainPage/SkeletonMainPage.scss'
import styles from './SkeletonMainPage.module.scss'

export const SkeletonMainPage = () => {
  return (
    <div className={styles.mainSection}>
        
        <main className={styles.appWorkSpace}>
            <div className={styles.accountTitle}>
                <div className={`skeleton-shimmer ${styles.h2Title}`} style={{width: '17%', height: '3px', marginTop: "7px", marginBottom: "7px", marginLeft: "10.5px"}}></div>
            </div>
            <div className={styles.mainPage} style={{display: 'flex', flexDirection: "row"}}>
                <div className={styles.userIteractions}>
                    <div className={`skeleton-shimmer ${styles.userPicture}`}>
                        <div className={`skeleton-shimmer ${styles.avatarLine}`} style={{height: '238px'}}>
                        </div>
                    </div>
                    <div className={`skeleton-shimmer ${styles.userActions}`}>
                        <div className={styles.followButton} style={{height: "37px"}}>
                            <div className={`skeleton-shimmer ${styles.button}`} style={{height: "40px", width: "100%"}}></div>
                        </div>
                    </div>
                    <div className={styles.friendsBlock} style={{marginTop: "5px"}}>
                        <div className={styles.microHeader}>
                            <div className={`skeleton-shimmer ${styles.headerLink}`} style={{height: "40px"}}></div>
                            
                        </div>
                        <div className={styles.friendlist}>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className={styles.friend}>
                                    <div className={`skeleton-shimmer ${styles.friendPic}`} style={{width: "50px", height: "50px"}}></div>
                                    <p className={`skeleton-shimmer ${styles.friendName}`} style={{width: "30px", height: "13px"}}></p>
                                </div>
                                
                                
                            </div>
                    </div>
                </div>
                <div className={styles.userInfo} style={{width: "61%"}}>
                    <div className={styles.userName}>
                        <div className={`skeleton-shimmer ${styles.accountName}`} style={{width: "33%", height: "16px"}}></div>
                        <div className={`skeleton-shimmer ${styles.bio}`} style={{width: "15%", height: "10px", marginTop: "5px"}}></div>
                    </div>
                    <div className={styles.infoPlace} style={{height: "20px"}}>
                        <div className={styles.infoRow} style={{height: "10px"}}>
                            <div className={`skeleton-shimmer ${styles.label}`} style={{ width: "15%", height: "10px"}}></div>
                            <div className={`skeleton-shimmer ${styles.info}`} style={{width: "30%", height: "10px", marginLeft: "50px"}}></div>
                        </div>
                        <div className={styles.infoRow} style={{height: "10px"}}>
                            <div className={`skeleton-shimmer ${styles.label}`} style={{ width: "20%", height: "10px"}}></div>
                            <div className={`skeleton-shimmer ${styles.info}`} style={{width: "25%", height: "10px", marginLeft: "32.5px"}}></div>
                        </div>
                        <div className={styles.infoRow} style={{height: "10px"}}>
                            <div className={`skeleton-shimmer ${styles.label}`} style={{ width: "15%", height: "10px", marginRight: "50px"}}></div>
                            <div className={`skeleton-shimmer ${styles.info}`} style={{width: "50%", height: "10px"}}></div>
                        </div>
                    </div>
                    <div className="gallery" style={{marginTop: "40px"}}>
                            <div className={`skeleton-shimmer ${styles.headerLink}`} style={{height: "15px"}}></div>
                            <div className={styles.imageRow}>
                                <div className={`skeleton-shimmer ${styles.galleryItem}`} style={{width: "83px", height: "60px"}}></div>
                                <div className={`skeleton-shimmer ${styles.galleryItem}`} style={{width: "83px", height: "60px"}}></div>
                                <div className={`skeleton-shimmer ${styles.galleryItem}`} style={{width: "83px", height: "60px"}}></div>
                                <div className={`skeleton-shimmer ${styles.galleryItem}`} style={{width: "83px", height: "60px"}}></div>
                            </div>
                    </div>
                    <div className={`skeleton-shimmer ${styles.headerLink}`} style={{height: "15px"}}></div>
                    <div className={`skeleton-shimmer ${styles.headerLink}`} style={{height: "20px"}}></div>
                    <div className={styles.wallContent}>

                            <div className={styles.postGenuinely} style={{maxWidth: "350px"}}>
                                <div className={`skeleton-shimmer ${styles.userpic}`} style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className={styles.contentPost} style={{width: "290px"}}>
                                    <div className={`skeleton-shimmer ${styles.postHead}`} style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "100%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "90%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "50%", height: "13px"}}></div>
                                    </div>
                                    <div className={styles.likeShareDate}>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.postGenuinely} style={{maxWidth: "350px"}}>
                                <div className={`skeleton-shimmer ${styles.userpic}`} style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className={styles.contentPost} style={{width: "290px"}}>
                                    <div className={`skeleton-shimmer ${styles.postHead}`} style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "85%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "55%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "65%", height: "13px"}}></div>
                                    </div>
                                    <div className={styles.likeShareDate}>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.postGenuinely} style={{maxWidth: "350px"}}>
                                <div className={`skeleton-shimmer ${styles.userpic}`} style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className={styles.contentPost} style={{width: "290px"}}>
                                    <div className={`skeleton-shimmer ${styles.postHead}`} style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "70%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "90%", height: "13px"}}></div>
                                    </div>
                                    <div className={styles.likeShareDate}>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.postGenuinely} style={{maxWidth: "350px"}}>
                                <div className={`skeleton-shimmer ${styles.userpic}`} style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className={styles.contentPost} style={{width: "290px"}}>
                                    <div className={`skeleton-shimmer ${styles.postHead}`} style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "100%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "90%", height: "13px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.textContent}`} style={{width: "50%", height: "13px"}}></div>
                                    </div>
                                    <div className={styles.likeShareDate}>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                        <div className={`skeleton-shimmer ${styles.dateTimeContainer}`} style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  
  )
};
