import Micro_header from "../Interface_parts/Micro_header"

const AccountGallery = () => {
    return (
        <div className="gallery">

              <Micro_header 
                children='222 фотографии'
                secondChildren="все"
               />

              <div className="image-row">
                <img className="gallery-item"></img>
                <img className="gallery-item"></img>
                <img className="gallery-item"></img>
                <img className="gallery-item"></img>
              </div>

        </div>
    )
}

export default AccountGallery