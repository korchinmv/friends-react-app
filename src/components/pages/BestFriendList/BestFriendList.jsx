import FriendsList from "../../FriendsList/FriendsList";

export const BestFriendList = ({
  bestFriends,
  setBestFriends,
  friends,
  setFriends,
}) => {
  return (
    <FriendsList
      bestFriends={bestFriends}
      setBestFriends={setBestFriends}
      friends={friends}
      setFriends={setFriends}
    />
  );
};
