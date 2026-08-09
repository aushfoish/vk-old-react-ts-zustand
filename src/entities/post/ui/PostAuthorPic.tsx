interface postAuthorPic {
    src: string
}

export const PostAuthorPic = (props:postAuthorPic) => {

    const {
        src
    } = props

    return (
        <div className="userpic">
                  <img className="userpic-post" src={src}></img>
        </div>
    )
}