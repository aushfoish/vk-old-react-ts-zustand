import Input from "../Interface_parts/Input"
import Micro_header from "../Interface_parts/Micro_header"
import { userPostsFetch, type UserPosts } from "../../UserPostsFetch"
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
    const [inputFocused, setInputFocused] = useState(false)
    // const [text, setText] = useState('')
    const inputPost = userPostsFetch((state) => state.inputPost)

    
    const lastSignCheck = (posts:UserPosts[]|null) => {
        if (posts !== null) {
            const arrayLengthLastsign = String(posts.length).slice(-1)
            const forA = ['2', '3', '4']
            const toA = forA.includes(arrayLengthLastsign)
            const forOv = ['5', '6', '7', '8', '9', '0']
            const toOv = forOv.includes(arrayLengthLastsign)
            
            if (toA) {
              return `${posts.length} поста`

            } else if (toOv) {
              return `${posts.length} постов`

            } else if (arrayLengthLastsign === '1'){
              return `${posts.length} пост`
            }
            }
        }

        const {sendPost} = userPostsFetch()
        
            const handleSubmit = (e: React.SubmitEvent) => {
              e.preventDefault()
              sendPost()
            }

    return (
        <>
        {modalOpened === true && 
        (<ModalWindow onCloseModal={() => setModalOpened(false)} children={<GraffityModal />} 
          id="canvas" label="Ваше граффити на стену Романа Саныча" 
          />
        )}
            <div className="user-wall">

              <Micro_header 
                children={lastSignCheck(posts)}
              />

              <div className="add-post">


                <form className="post-add-form" onSubmit={handleSubmit} onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) {
                      e.preventDefault()
                      setInputFocused(false)
                    } }}>
                  <Input 
                    id='input-post'
                    className="hidden"
                    type='text'
                    placeholder="Что у вас нового?"
                    label='Введите новый пост'
                    onFocus={() => setInputFocused(true)}
                    value=''
                    onChange={inputPost}
                     />
                     {inputFocused &&(<Attachments setCanvasOpen={() => setModalOpened(true)}/>)}
                      

                </form>
                
               
                  
                  
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