import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Userprofile from './userprofile';

function App() {

  const [users, setusers] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users` ;

    const getdata = async () => {
      try{
        await Axios.get(url).then(res =>{
          console.log(res);
          setusers(res.data);
        });
      }
      catch(e){
        document.write("Error in fetching API");
      }
      setloader(true);
    }
    
    getdata();
  }, []);

  if(loader){
    return (
      <div className="App">
        <div className="app_container">

          {users.map( (user) => {
            return <Userprofile user={user} />;
          })}
          
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </div>
  );
}

export default App;
