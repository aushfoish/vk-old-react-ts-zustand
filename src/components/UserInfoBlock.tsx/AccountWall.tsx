import Input from "../Interface_parts/Input"
import Micro_header from "../Interface_parts/Micro_header"
import { userPostsFetch } from "../../UserPostsFetch"
import Attachments from "../Interface_parts/Attachments"
import { useEffect, useState } from "react"
import { AccountWallPost } from "../PostItem/AccountWallPost"



const AccountWall = () => {

  const {posts, userFetch, isLoading} = userPostsFetch()
  useEffect(() => {
    userFetch()
  }, [])


    const [, setInputFocused] = useState(false)
    const inputPost = userPostsFetch((state) => state.inputPost)

    return (
        <>
            <div className="user-wall">

              <Micro_header 
                children='14 записей'
                secondChildren="Очистить стену"
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
                    onInput={inputPost}
                    
                     />
                </form>
                
                <Attachments />
                  
                  
              </div>


            </div>

            <div className="wall-content">


              {!isLoading && posts !== null && (posts.map((post) => 
              <AccountWallPost 
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