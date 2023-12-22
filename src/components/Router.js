import React from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import NavigatorBar from "./basic/NavigatorBar";
import Poster from "../router/Poster";
import Main from "../router/Main";
import Board from "../router/Board";

// const AppRouter = ({ api }) => {
const AppRouter = ({menuList}) => {
    return (
        <Router>
            <NavigatorBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                {/* <Route path="/basic" element={<Basi`c api={api}/>}/> */}
                <Route path="/poster/:id" element={<Poster/>}/>
                <Route path="/board" element={<Board/>}/>
            </Routes>
        </Router>
      );
}

export default AppRouter;