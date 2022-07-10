import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar/Searchbar";
import SearchedUser from "./Searcheduser/SearchedUser";
import ClearBtn from "./Clearbtn/ClearBtn";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.github.com/users/${username}`
  
  useEffect(() => { 
    if(username !== ''){
    fetch(url, {
      'method': 'GET'
  })
      .then(res => res.json())
      .then(json => {
        if (json && json.message !== "Not Found") {
          setData(json);
        }else{
          setData({});
        }
      })
    }
  } , [username]) 
console.log(url.login);
  return (
    <div className="App">
        <div className="container">
          <SearchBar setUsername={setUsername} username={username} />
          <ClearBtn setUsername={setUsername}  username={username} setData={setData} />
        </div>
       <SearchedUser data={data} />
    </div>
  );
}

export default App;
