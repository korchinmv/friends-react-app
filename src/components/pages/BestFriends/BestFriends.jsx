import { useParams } from "react-router-dom";
import FriendsList from "../../FriendsList/FriendsList";
import FriendPage from "../FriendPage/FriendPage";
import TitlePage from "../../TitlePage/TitlePage";

export const BestFriends = ({
  bestFriends,
  setBestFriends,
  friends,
  setFriends,
  professions,
  qualities,
}) => {
  const { friendId } = useParams();
  return (
    <>
      {friendId ? (
        <FriendPage friendId={friendId} />
      ) : (
        <>
          <TitlePage title={"Список лучших друзей"} />
          <FriendsList
            bestFriends={bestFriends}
            setBestFriends={setBestFriends}
            friends={friends}
            setFriends={setFriends}
            professions={professions}
            qualities={qualities}
          />
        </>
      )}
    </>
  );
};
