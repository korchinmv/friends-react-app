import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FriendList } from "../pages/FriendList/FriendList";
import { BestFriendList } from "../pages/BestFriendList/BestFriendList";
import { NotFound } from "../pages/NotFound/NotFound";
import API from "../../api/index";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [bestFriends, setBestFriends] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProfessions();
    getQualities();
  }, []);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const users = await API.fetchAllUsers();
      setFriends(users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProfessions = async () => {
    try {
      const allProfessions = await API.fetchAllProfessions();
      setProfessions(allProfessions);
    } catch (error) {
      console.log(error);
    }
  };

  const getQualities = async () => {
    try {
      const allQualities = await API.fetchAllQuakities();
      const arr = [];
      for (var key in allQualities) {
        arr.push(allQualities[key]);
      }
      setQualities(arr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='page container vh-100 d-flex flex-column align-items-center justify-content-center'>
      <Routes>
        <Route
          index
          exact
          path='/'
          element={
            <FriendList
              friends={friends}
              professions={professions}
              qualities={qualities}
              searchClick={getUsers}
              setFriends={setFriends}
              setBestFriends={setBestFriends}
              bestFriends={bestFriends}
              isLoading={isLoading}
            />
          }
        />

        <Route
          path='/best-friends'
          element={
            <BestFriendList
              friends={friends}
              bestFriends={bestFriends}
              professions={professions}
              qualities={qualities}
              setBestFriends={setBestFriends}
              setFriends={setFriends}
            />
          }
        />
        <Route exact path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
