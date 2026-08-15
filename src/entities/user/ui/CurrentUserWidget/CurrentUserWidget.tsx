import { useAuthStore } from "@/entities/user/model/useAuthStore";

export const CurrentUserWidget = () => {
  const currentUserName = useAuthStore((state) => state.userName);
  const currentUserPic = useAuthStore((state) => state.userPic);
  const userIsLogged = useAuthStore((state) => state.userIsLogged);

  return (
    <div className="current-user">
      <img
        className="header-userpic"
        src={currentUserPic}
      ></img>
      <div className="header-username">
        <p className="header-username">{currentUserName}</p>
        {userIsLogged && <p className="header-subscriptio">(это вы)</p>}
      </div>
    </div>
  );
};
