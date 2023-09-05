import Searching from "../../Searching/Searching";
import FriendsList from "../../FriendsList/FriendsList";
import Preloader from "../../Preloader/Preloader";

export const FriendList = ({
  friends,
  searchClick,
  setFriends,
  bestFriends,
  setBestFriends,
  isLoading,
  professions,
  qualities,
}) => {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {friends.length !== 0 ? null : (
            <Searching clickSearch={searchClick} />
          )}

          {friends.length !== 0 ? (
            <FriendsList
              friends={friends}
              setFriends={setFriends}
              bestFriends={bestFriends}
              setBestFriends={setBestFriends}
              isLoading={isLoading}
              professions={professions}
              qualities={qualities}
            />
          ) : null}
        </>
      )}
    </>
  );
};
