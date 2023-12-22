// import React, { useEffect, useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./basic/Footer";

import AppRouter from "./Router";

function App() {
  // const [api, setApi] = useState();
  // const apiCall = async(event) => {
  //     const res = await axios.get('/user/' + event)
  //     const data = res.data;
  //     setApi(data)
  // };
  
  // useEffect(() => {
  //     apiCall();
  // });

  return (
    <>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App;
