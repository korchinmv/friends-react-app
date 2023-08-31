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
    <div className='page container vh-100'>
      <Routes>
        <Route
          index
          exact
          path='/'
          element={
            <FriendList
              friends={friends}
              searchClick={handleSearchClick}
              setFriends={setFriends}
              setBestFriends={setBestFriends}
              bestFriends={bestFriends}
            />
          }
        />

        <Route
          path='/best-friends'
          element={
            <BestFriendList
              bestFriends={bestFriends}
              setBestFriends={setBestFriends}
              friends={friends}
              setFriends={setFriends}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
