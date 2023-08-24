import { useState } from "react";
import Searching from "../Searching/Searching";
import FriendsList from "../FriendsList/FriendsList";
import Api from "../../api/index";

const App = () => {
  const [friends, setFriends] = useState([]);

  const handleSearchClick = () => {
    setFriends(Api.users.fetchAll());
  };

  return (
    <div className="App container vh-100">
      {friends.length !== 0 ? null : (
        <Searching clickSearch={handleSearchClick} />
      )}

      {friends.length !== 0 ? <FriendsList friends={friends} /> : null}
    </div>
  );
};

export default App;
