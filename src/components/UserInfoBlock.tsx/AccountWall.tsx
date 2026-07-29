import Input from "../Interface_parts/Input"
import Micro_header from "../Interface_parts/Micro_header"
import { userPostsFetch } from "../../UserPostsFetch"
import Attachments from "../Interface_parts/Attachments"
import { useEffect, useState } from "react"
import { AccountWallPost } from "../PostItem/AccountWallPost"
import { ModalWindow } from "../ModalWindow/ModalWindow"
import { GraffityModal } from "../GraffityPaint/GraffityModal"



const AccountWall = () => {

  const {posts, userFetch, isLoading} = userPostsFetch()
  useEffect(() => {
    userFetch()
  }, [])

    const [modalOpened, setModalOpened] = useState(false)
    const [, setInputFocused] = useState(false)
    const inputPost = userPostsFetch((state) => state.inputPost)

    return (
        <>
        {modalOpened === true && 
        (<ModalWindow onCloseModal={() => setModalOpened(false)} children={<GraffityModal />} 
          id="canvas" label="Ваше граффити на стену Романа Саныча" 
          />
        )}
            <div className="user-wall">

              <Micro_header 
                children={`${posts?.length} поста`}
              />

              <div className="add-post">


                <form className="post-add-form">
                  <Input 
                    id='input-post'
                    className="hidden"
                    type='text'
                    placeholder="Что у вас нового?"
                    label='Введите новый пост'
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    onChange={inputPost}
                    
                     />
                </form>
                
                <Attachments setCanvasOpen={() => setModalOpened(true)}/>
                  
                  
              </div>


            </div>

            <div className="wall-content">


              {!isLoading && posts !== null && (posts.map((post) => 
              <AccountWallPost 
                userPicSrc={post.userPictureSrc}
                key={post.id}
                id="id"
                children={post.content}
                label={`${post.username}`}
                date={post.date}
                imgSrc={post.imageContentSrc}
              />
              ))
              }
            
            
            </div>
        </>
    )
}

export default AccountWall