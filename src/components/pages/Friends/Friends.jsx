import { useParams } from "react-router-dom";
import FriendsList from "../../FriendsList/FriendsList";
import FriendPage from "../FriendPage/FriendPage";

export const Friends = ({
  friends,
  setFriends,
  bestFriends,
  setBestFriends,
  professions,
  qualities,
}) => {
  const { friendId } = useParams();
  return (
    <>
      {friendId ? (
        <FriendPage friendId={friendId} />
      ) : (
        <FriendsList
          friends={friends}
          setFriends={setFriends}
          bestFriends={bestFriends}
          setBestFriends={setBestFriends}
          professions={professions}
          qualities={qualities}
          friendId={friendId}
        />
      )}
    </>
  );
};
