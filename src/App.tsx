import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/List";
import Details from "./components/Details";

interface userInfo {
  id: number; 
  name: string;
}

function App() {
  const [state, setState] = useState([])
  const [currUser, setCurrUser] = useState(Object)
  const [details, setDetails] = useState(Object)

  const getData = async() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then((res) => res.json())
    .then((data) => {
      setState(data)
    })
    .catch((err) => console.log(err));
  }

  const onUserClick = (info: userInfo) => {
    setCurrUser(info)
  }

  useEffect(() => {
    if (currUser.id) {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${currUser.id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
        //console.log(data)
      })
      .catch((err) => console.log(err));
    }
  }, [currUser.id]);


  return <>
    <div className="container">
      <List cbGetData={getData} userList={state} onUserClick={onUserClick} />
      <Details currUser={details} />
    </div>
  </>;
}

export default App;
