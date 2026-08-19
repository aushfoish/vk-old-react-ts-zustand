import { useState } from "react";

export const useSubscribe = () => {
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = () => {
    if (subscribed === false) {
      console.log("вы подписались");
      setSubscribed(true);
    }
    if (subscribed === true) {
      console.log("вы отписались");
      setSubscribed(false);
    }
  };

  return { subscribe, subscribed };
};
