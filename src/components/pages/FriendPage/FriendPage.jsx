import { useEffect, useState } from "react";
import { getById } from "../../../api/fake.api/user.api";
import { useLocation, Link } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import QualitiesList from "../../QualitiesList/QualitiesList";

const FriendPage = ({ friendId }) => {
  const [friend, setFriend] = useState();
  const location = useLocation();

  useEffect(() => {
    getFriend();
  });

  const checkPage = () =>
    location.pathname.slice(0, 8) === "/friends" ? "/friends" : "/best-friends";

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
          <Link to={checkPage()} className='btn btn-primary'>
            Вернуться к списку
          </Link>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default FriendPage;
