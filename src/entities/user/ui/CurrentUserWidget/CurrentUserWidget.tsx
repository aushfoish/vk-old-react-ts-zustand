import { userPostsFetch } from "../../../../UserPostsFetch";

export const CurrentUserWidget = () => {
  const currentUserName = userPostsFetch((state) => state.userName);
  const currentUserPic = userPostsFetch((state) => state.userPic);
  const userIsLogged = userPostsFetch((state) => state.userIsLogged);

  return (
    <div className="current-user">
      <img className="header-userpic" src={currentUserPic}></img>
      <div className="header-username">
        <p className="header-username">{currentUserName}</p>
        {userIsLogged && (<p className="header-subscriptio">(это вы)</p>)}
      </div>
    </div>
  );
};
