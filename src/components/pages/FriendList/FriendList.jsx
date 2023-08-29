import Searching from "../../Searching/Searching";
import FriendsList from "../../FriendsList/FriendsList";

export const FriendList = ({
  friends,
  searchClick,
  setFriends,
  bestFriends,
  setBestFriends,
}) => {
  return (
    <>
      {friends.length !== 0 ? null : <Searching clickSearch={searchClick} />}

      {friends.length !== 0 ? (
        <FriendsList
          friends={friends}
          setFriends={setFriends}
          bestFriends={bestFriends}
          setBestFriends={setBestFriends}
        />
      ) : null}
    </>
  );
};
