import FeedPageNavBtn from "./FeedPageNavBtn"
const FeedPageHeader = () => {
    return (
        <div className='feed-container-header-panel'>

              <div className="feed-header-buttons">

                  <FeedPageNavBtn 
                    children="Новости" />

                  <FeedPageNavBtn
                    children="Обновления" />

                  <FeedPageNavBtn 
                    children="Комментарии" />
                  
              </div>

              <div className="feed-header-input">
                
                  
                    <>
                    <label className="input-label hidden" htmlFor="feed-header-input">Расскажите что-нибудь друзьям...</label>
                    <input className="input-post" type='text' id='feed-header-input'  placeholder="Расскажите что-нибудь друзьям..."></input>
                    </>

              </div>
        </div>
    )
}

export default FeedPageHeader