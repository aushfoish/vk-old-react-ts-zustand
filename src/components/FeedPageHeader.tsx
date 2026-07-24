import FeedPageNavBtn from "./FeedPageNavBtn"
import Input from "./Interface_parts/Input"

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
                
                  <Input 
                    className="hidden"
                    placeholder="Расскажите что-нибудь друзьям..."
                    id='feed-header-input' 
                    label='Расскажите что-нибудь друзьям...'
                    type='text'/>

              </div>
        </div>
    )
}

export default FeedPageHeader