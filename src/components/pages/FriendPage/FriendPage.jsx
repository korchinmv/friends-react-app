import { useEffect, useState } from "react";
import { getById } from "../../../api/fake.api/user.api";
import { useNavigate } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import QualitiesList from "../../QualitiesList/QualitiesList";

const FriendPage = ({ friendId }) => {
  const [friend, setFriend] = useState();
  const history = useNavigate();
  const isMainPage = window.location.pathname === "/friends";

  const checkPage = (page) => (page ? "/friends" : "/best-friends");

  const handleClick = () => {
    history(checkPage(isMainPage));
  };

  useEffect(() => {
    getFriend();
  }, []);

  const getFriend = async () => {
    try {
      const friendData = await getById(friendId);
      setFriend(friendData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {friend ? (
        <>
          <div className='border border-secondary-subtle rounded-3 p-4 mb-3 text-center'>
            <h1>{friend.name}</h1>
            <h4 className='mb-4'>{friend.profession.name}</h4>
            <QualitiesList qualitiesArr={friend.qualities} />
          </div>
          <button className='btn btn-primary' onClick={handleClick}>
            Вернуться к списку
          </button>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default FriendPage;
