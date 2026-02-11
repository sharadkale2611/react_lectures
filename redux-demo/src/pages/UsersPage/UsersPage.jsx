import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UsersPage() {

  const [users, setUsers] = useState([]);


  const loadData = async ()=>{

    // syntax-1

    //   let data = await axios({
    //     method:"get",
    //     url:"https://jsonplaceholder.typicode.com/users"
    //   })
    // // .then((res)=> console.log('res:', res.data))
    //   .then((res)=> res.data)

    // Get Method
    let data = await axios.get("https://jsonplaceholder.typicode.com/users")
              .then((res) => res.data)

    setUsers(data);

    // let data = await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((res2) => res2)


    // Post Method
    // let data = await axios.post("https://jsonplaceholder.typicode.com/users",{
    //   username:"rajesh",
    //   mobileNumber:"9087675665"
    // })
    //   .then((res) => res.data)

    // const userdata = {
    //   username: "rajesh",
    //   mobileNumber: "9087675665"
    // };

    // let data = await axios.post("https://jsonplaceholder.typicode.com/users", userdata)
    //   .then((res) => res.data)

    // console.log("data:", data)
  }

  useEffect(() => {
    console.log("users loading ...");
    loadData();
  }, [])


  useEffect(()=>{
    console.log("users: ", users);
  }, [users, setUsers])


  return (
    <div>
      This Is users page

    </div>
  )
}

export default UsersPage
