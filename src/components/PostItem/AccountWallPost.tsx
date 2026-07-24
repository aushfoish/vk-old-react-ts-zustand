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
}

export const AccountWallPost = (props:AccountWallPostProps) => {

    const {
      id,
      label,
      children,
      date,
      imgSrc
    } = props

    return (
        <div className="post-genuinely" id={id}>

                <PostAuthorPic src="https://sun9-13.vkuserphoto.ru/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=IuElQeStD_SsXfaohFE0ighha-xa26Ji4_lJ0me1iNE&cs=50x50"/>

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