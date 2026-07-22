import React from "react"
import { userInfoFetch } from "../../UserProfileFetch"
import AccountPersonalItem from "./AccoutPersonalItem"
import InfoItem from "./InfoItem"

const AccountPersonal = () => {

  const profile = userInfoFetch((state) => state.profile)
  const isLoading = userInfoFetch((state) => state.profile)

  const birthday = `${profile?.birthday.day} ${profile?.birthday.month} ${profile?.birthday.year}`
  const languages = profile ? (profile?.languages).map((lang, index) =>  (
  <React.Fragment key={lang.id}>
    <InfoItem  
      children={lang.language}></InfoItem>
      {index < profile.languages.length && ', '}
  </React.Fragment>
  
)
  ) : 'языки не найдены ёпта'

    return (
        <div className="info-place">

              <AccountPersonalItem 
                label={isLoading && !profile ? "надо..." : "Дно рождения"}
                children={birthday}/>


              <AccountPersonalItem 
                label='Место рабства'
                children={`${profile?.workplace}`}/>

              <AccountPersonalItem 
                label='Языки (типо на каких говоришь)'
                children={languages} /> 


            </div>
    )
}

export default AccountPersonal