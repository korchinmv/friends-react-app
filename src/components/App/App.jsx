import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FriendList } from "../pages/FriendList/FriendList";
import { BestFriendList } from "../pages/BestFriendList/BestFriendList";

import Api from "../../api/index";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [bestFriends, setBestFriends] = useState([]);

  const handleSearchClick = () => {
    setFriends(Api.users.fetchAll());
  };

  return (
    <div className="page container vh-100">
      <Routes>
        <Route
          index
          path="/"
          element={
            <FriendList
              friends={friends}
              searchClick={handleSearchClick}
              setFriends={setFriends}
              setBestFriends={setBestFriends}
            />
          }
        />

        <Route
          path="/best-friends"
          element={<BestFriendList bestFriends={bestFriends} />}
        />
      </Routes>
    </div>
  );
};

export default App;
