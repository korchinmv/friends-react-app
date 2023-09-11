import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Friends } from "../pages/Friends/Friends";
import { BestFriends } from "../pages/BestFriends/BestFriends";
import Searching from "../Searching/Searching";
import { NotFound } from "../pages/NotFound/NotFound";
import API from "../../api/index";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [bestFriends, setBestFriends] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [qualities, setQualities] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProfessions();
    getQualities();
  }, []);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const users = await API.fetchAllUsers();
      setFriends(users);
      navigate("/friends");
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
          element={<Searching clickSearch={getUsers} isLoading={isLoading} />}
        />
        <Route
          path='/friends/:friendId?'
          element={
            <Friends
              friends={friends}
              professions={professions}
              qualities={qualities}
              setFriends={setFriends}
              setBestFriends={setBestFriends}
              bestFriends={bestFriends}
            />
          }
        />

        <Route
          path='/best-friends/:friendId?'
          element={
            <BestFriends
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
