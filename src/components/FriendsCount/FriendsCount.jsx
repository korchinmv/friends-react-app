const FriendsCount = ({ friendsCount, bestFriendsCount, isMainPage }) => {
  const checkCount = (count) => {
    if (count === 0) {
      return "нету друзей";
    } else if (count === 1) {
      return `${count} друг`;
    } else if (count <= 4) {
      return `${count} друга`;
    }
    return `${count} друзей`;
  };

  return (
    <h2 className='text-center fs-1 display-3 mb-5'>{`У вас ${
      isMainPage ? checkCount(friendsCount) : checkCount(bestFriendsCount)
    }`}</h2>
  );
};

export default FriendsCount;
