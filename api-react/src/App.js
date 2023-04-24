
import { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from'react-redux';
import axios from 'axios';
import { SetUsers } from './app/userList';

 

function App() {
  const  listOfUSer= useSelector(state=>state.user)
  console.log(listOfUSer);
  const dispatch= useDispatch();
  const getUsers= ()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      dispatch(SetUsers(res.data))
      console.log(res.data)
    }).catch((err)=>{   
      console.log(err);
    })


  }
  useEffect(()=>{
    getUsers()
  },[])
  return (

    <div>{listOfUSer.map((item,index)=>{
      return(
        <div key={index}>
          <h1> {item.name}</h1>
          <h2>{item.username}</h2>
          <h3>{item.email}</h3>

        </div>
      )
    })}
      


    </div>
  );
}

export default App;
