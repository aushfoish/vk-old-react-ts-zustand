import { userInfoFetch } from "../../UserProfileFetch"
import Button from "../Interface_parts/Button"



const UserActions = () => {

  const profile = userInfoFetch((state) => state.profile)
  const isLoading = userInfoFetch((state) => state.isLoading)

  

  const name = profile?.firstname
  if (name !== undefined) {
    const nameDeclension = (name:string) => {
    const nameLow = name.toLowerCase()
    const lastSign = nameLow[nameLow.length - 1]
    const toA = ["н", "р", "к", "р", "п", "д", "с", "л", "г", "в"]
    const istoA = toA.includes(lastSign)
    const toYa = ["й", "ь"]
    const isToYa = toYa.includes(lastSign)

    if (istoA && name != 'Павел' && name != "Пётр" && name != 'Лев') {
      return name + "а"
    } else if (isToYa) {
      return name.slice(0, -1) + 'я'
    } else if (name === 'Павел') {
      return 'Павла'
    } else if (name === 'Пётр' || name === 'Петра') {
      return "Петра"
    } else if (name === 'Лев') {
      return 'Льва'
    }
      

    
    
    
  }

    return (
        <div className="user-actions">
            <div className="follow-button">
              <Button 
                className="follow"
                children="Подписаться"
               />
            </div>

            <div className="followers-button">
              <a href='#' className="followers">{isLoading && profile === undefined ? "подписчики хз кого" : `Подписота ${nameDeclension(name)}`}</a>
              <a href='#' className="followers" id="followers-counter"></a>
            </div>

            <div className="send-gift-button">
              <a href="#" className="send-gift">Отправить подарок</a>
            </div>
        </div>
            
    )
  } 
  
}

export default UserActions