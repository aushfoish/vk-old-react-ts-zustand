import { Follow } from "@/features/follow-to-user/ui/Follow"
import { SendGift } from "@/features/send-gift/ui/SendGift"
import { FollowersButton } from "@/entities/user/ui/FollowersButton/FollowersButton"

export const UserActions = () => {

  return (
    <div className="user-actions">
      <Follow />

      <FollowersButton />

      <SendGift />

    </div>
  )
}