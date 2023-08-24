const FriendsCount = ({ friendsCount }) => {
  return (
    <h2 className="text-center display-3 mb-5">{`У вас ${friendsCount} друзей`}</h2>
  );
};

export default FriendsCount;
