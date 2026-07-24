import UserInfo from "./UserInfoBlock.tsx/UserInfo"
import UserIteractions from "./UserIteractions"

const AccountSection = () => {
    return (
        <div className="main-page">

          <UserIteractions />

          <UserInfo />

        </div>
    )
}

export default AccountSection