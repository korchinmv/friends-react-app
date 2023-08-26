const FriendsCount = ({ friendsCount }) => {
  return (
    <h2 className='text-center display-3 mb-5'>{`У вас ${friendsCount} ${
      friendsCount < 3 && friendsCount !== 1 && friendsCount !== 0
        ? "друга"
        : friendsCount === 1
        ? "друг"
        : "друзей"
    }`}</h2>
  );
};

export default FriendsCount;
