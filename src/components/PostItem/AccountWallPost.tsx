import type React from "react"
import { PostAuthor } from "./PostAuthor"
import { PostAuthorPic } from "./PostAuthorPic"
import { PostShareAndDate } from "./PostShareDate"
import { PostText } from "./PostText"


interface AccountWallPostProps {
  id: string,
  children: React.ReactNode,
  label: string,
  date: string
  imgSrc: string
  userPicSrc: string
}

export const AccountWallPost = (props:AccountWallPostProps) => {

    const {
      id,
      label,
      children,
      date,
      imgSrc,
      userPicSrc
    } = props

    return (
        <div className="post-genuinely" id={id}>

                <PostAuthorPic src={userPicSrc}/>

                <div className="content-post">

                  <PostAuthor 
                  label={label}/>

                  {children && (<PostText 
                  children={children}
                  id={id}
                  />)}
                  
                  {imgSrc && (<img className="content-picture" src={imgSrc}>
                  </img>)}

                  <PostShareAndDate 
                  date={date}/>
                
                  

                </div>
            
        </div>
    )
}