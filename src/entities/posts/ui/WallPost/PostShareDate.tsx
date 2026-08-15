
interface PostShareAndDateProps {
    date: string
}

export const PostShareAndDate = (props:PostShareAndDateProps) => {

    const {
        date
    } = props

    return (
        <div className="like-share-date">

                  <div className="date-time-container">
                    <p className="date-time">{date}</p>
                  </div>

                  <div className="like-share-container">
                    <div className="share">
                      поделиться
                    </div>

                    <div className="like">
                      Мне нравится
                    </div>
                  </div>
                  
        </div>
    )
}