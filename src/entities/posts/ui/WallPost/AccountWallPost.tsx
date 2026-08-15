import React from "react"
import { PostAuthor } from "./PostAuthor"
import { PostAuthorPic } from "./PostAuthorPic"
import { PostText } from "./PostText"
import { PostShareAndDate } from "./PostShareDate"



export interface AccountWallPostProps {
  id: number,
  label: string,
  date: string
  imgSrc: string
  userPicSrc: string
  text: string
}

export const AccountWallPost = React.memo((props:AccountWallPostProps) => {

    const {
      id,
      label,
      text,
      date,
      imgSrc,
      userPicSrc
    } = props

    return (
        <div className="post-genuinely" id={String(id)}>

                <PostAuthorPic src={userPicSrc}/>

                <div className="content-post">

                  <PostAuthor 
                  label={label}/>

                  {text && (<PostText 
                  text={text}
                  id={id}
                  />)}
                  
                  {imgSrc && (<img className="content-picture" src={imgSrc}>
                  </img>)}

                  <PostShareAndDate 
                  date={date}/>
                
                  

                </div>
            
        </div>
    )
})

AccountWallPost.displayName = "post-genuinely"