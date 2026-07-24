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


    const [inputFocused, setInputFocused] = useState(false)

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
                     />
                </form>
                
                {inputFocused === true && <Attachments />}
                  
                  
              </div>


            </div>

            <div className="wall-content">


              {!isLoading && posts !== null && (posts.map((post) => 
              <AccountWallPost 
                key={post.id}
                id="id"
                children={post.content}
                label={`${post.username}${post.userlastname}`}
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