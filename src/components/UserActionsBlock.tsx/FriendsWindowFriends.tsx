import FriendItem from "./FriendItem"

const FriendsWindowFriends = () => {

    const friends = [
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
        {id: crypto?.randomUUID() ?? Date.now().toString(), name: "Роман", lastname: "Каталкин", imgSrc: 'https://sun139-1.userapi.com/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=ZM4XS8XgIG7Cez-Kohv-_yCN2Q-hqagRrarRs1jyZcY&cs=50x50'},
    ]

    return (
        <div className="friendlist">
            {friends.map((friend) => (
                <FriendItem
                    id={friend.id}
                    key={friend.id} 
                    name={friend.name}
                    lastname={friend.lastname}
                    src={friend.imgSrc}/>
            ))
                

                }
            </div>
    )
}

export default FriendsWindowFriends