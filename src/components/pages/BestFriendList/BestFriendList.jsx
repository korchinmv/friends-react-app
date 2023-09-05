import FriendsList from "../../FriendsList/FriendsList";

export const BestFriendList = ({
  bestFriends,
  setBestFriends,
  friends,
  setFriends,
  professions,
  qualities,
}) => {
  return (
    <FriendsList
      bestFriends={bestFriends}
      setBestFriends={setBestFriends}
      friends={friends}
      setFriends={setFriends}
      professions={professions}
      qualities={qualities}
    />
  );
};
