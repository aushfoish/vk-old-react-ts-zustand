import { userInfoFetch } from "../UserProfileFetch"

const AccountTitle = () => {

    const profile = userInfoFetch((state) => state.profile)
    const isLoading = userInfoFetch((state) => state.isLoading)
    const fullName = `${profile?.firstname} ${profile?.lastname}`

    return (
        <div className="account-title">
          <h2 className="h2-title">{isLoading ? 'Щас щас, ещё чуть-чуть..' : fullName}</h2>
        </div>
    )
}

export default AccountTitle