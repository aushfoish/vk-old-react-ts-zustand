import '@/shared/ui/SkeletonMainPage/SkeletonMainPage.scss'

export const SkeletonMainPage = () => {
  return (
    <div className="main-section">
        
        <main className="app-work-space">
            <div className="account-title" >
                <div className="skeleton-shimmer h2-title" style={{width: '17%', height: '3px', marginTop: "7px", marginBottom: "7px", marginLeft: "10.5px"}}></div>
            </div>
            <div className="main-page" style={{display: 'flex', flexDirection: "row"}}>
                <div className="user-iteractions">
                    <div className="skeleton-shimmer user-picture">
                        <div className="skeleton-shimmer avatar-line" style={{height: '238px'}}>
                        </div>
                    </div>
                    <div className="skeleton-shimmer user-actions">
                        <div className="follow-button" style={{height: "37px"}}>
                            <div className="skeleton-shimmer button" style={{height: "40px", width: "100%"}}></div>
                        </div>
                    </div>
                    <div className="friends-block" style={{marginTop: "5px"}}>
                        <div className="micro-header">
                            <div className="skeleton-shimmer header-link" style={{height: "40px"}}></div>
                            <div className="friendlist">
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                <div className="friend">
                                    <div className="skeleton-shimmer friend-pic" style={{width: "50px", height: "50px"}}></div>
                                    <p className="skeleton-shimmer friend-name" style={{width: "30px", height: "13px"}}></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-info" style={{width: "61%"}}>
                    <div className="user-name">
                        <div className="skeleton-shimmer account-name" style={{width: "33%", height: "16px"}}></div>
                        <div className="skeleton-shimmer bio" style={{width: "15%", height: "10px", marginTop: "5px"}}></div>
                    </div>
                    <div className="info-place" style={{height: "20px"}}>
                        <div className="info-row" style={{height: "10px"}}>
                            <div className="skeleton-shimmer label" style={{ width: "15%", height: "10px"}}></div>
                            <div className="skeleton-shimmer info" style={{width: "30%", height: "10px", marginLeft: "50px"}}></div>
                        </div>
                        <div className="info-row" style={{height: "10px"}}>
                            <div className="skeleton-shimmer label" style={{ width: "20%", height: "10px"}}></div>
                            <div className="skeleton-shimmer info" style={{width: "25%", height: "10px", marginLeft: "32.5px"}}></div>
                        </div>
                        <div className="info-row" style={{height: "10px"}}>
                            <div className="skeleton-shimmer label" style={{ width: "15%", height: "10px", marginRight: "50px"}}></div>
                            <div className="skeleton-shimmer info" style={{width: "50%", height: "10px"}}></div>
                        </div>
                    </div>
                    <div className="gallery" style={{marginTop: "40px"}}>
                            <div className="skeleton-shimmer header-link" style={{height: "15px"}}></div>
                            <div className="image-row">
                                <div className="skeleton-shimmer gallery-item" style={{width: "83px", height: "60px"}}></div>
                                <div className="skeleton-shimmer gallery-item" style={{width: "83px", height: "60px"}}></div>
                                <div className="skeleton-shimmer gallery-item" style={{width: "83px", height: "60px"}}></div>
                                <div className="skeleton-shimmer gallery-item" style={{width: "83px", height: "60px"}}></div>
                            </div>
                    </div>
                    <div className="skeleton-shimmer header-link" style={{height: "15px"}}></div>
                    <div className="skeleton-shimmer header-link" style={{height: "20px"}}></div>
                    <div className="wall-content">
                            <div className="post-genuinely" style={{maxWidth: "350px"}}>
                                <div className="skeleton-shimmer userpic" style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className="content-post" style={{width: "290px"}}>
                                    <div className="skeleton-shimmer post-head" style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className="skeleton-shimmer text-content" style={{width: "100%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "90%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "50%", height: "13px"}}></div>
                                    </div>
                                    <div className="like-share-date">
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-genuinely" style={{maxWidth: "350px"}}>
                                <div className="skeleton-shimmer userpic" style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className="content-post" style={{width: "290px"}}>
                                    <div className="skeleton-shimmer post-head" style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className="skeleton-shimmer text-content" style={{width: "85%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "55%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "65%", height: "13px"}}></div>
                                    </div>
                                    <div className="like-share-date">
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-genuinely" style={{maxWidth: "350px"}}>
                                <div className="skeleton-shimmer userpic" style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className="content-post" style={{width: "290px"}}>
                                    <div className="skeleton-shimmer post-head" style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className="skeleton-shimmer text-content" style={{width: "70%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "90%", height: "13px"}}></div>
                                    </div>
                                    <div className="like-share-date">
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-genuinely" style={{maxWidth: "350px"}}>
                                <div className="skeleton-shimmer userpic" style={{width: "50px", height: "50px"}}>
                                </div>
                                <div className="content-post" style={{width: "290px"}}>
                                    <div className="skeleton-shimmer post-head" style={{width: "30%", height: "14.44px"}}></div>
                                    <div className="skeleton-text" style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                                        <div className="skeleton-shimmer text-content" style={{width: "100%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "90%", height: "13px"}}></div>
                                        <div className="skeleton-shimmer text-content" style={{width: "50%", height: "13px"}}></div>
                                    </div>
                                    <div className="like-share-date">
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
                                        <div className="skeleton-shimmer date-time-container" style={{width: "45%", height: "10px"}}></div>
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
