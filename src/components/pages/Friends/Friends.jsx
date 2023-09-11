import { useParams } from "react-router-dom";
import FriendsList from "../../FriendsList/FriendsList";
import FriendPage from "../FriendPage/FriendPage";
import { getById } from "../../../api/fake.api/user.api";

export const Friends = ({
  friends,
  setFriends,
  bestFriends,
  setBestFriends,
  professions,
  qualities,
}) => {
  const { friendId } = useParams();
  const handleGetFriend = () => {
    getById(friendId);
  };
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
          searchFriendById={handleGetFriend}
          friendId={friendId}
        />
      )}
    </>
  );
};
