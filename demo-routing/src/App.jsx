import React from "react";
import { Link, Route, Routes } from "react-router";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { AboutUs } from "./pages/AboutUs";
import { TeamPage } from "./pages/TeamPage";
import { HomePage } from "./pages/HomePage";
import { CreateUser } from "./pages/CreateUser";
import { EditUser } from "./pages/EditUser";
export const App = () => {
    return (
        <div>
            <h1>Demo Routing</h1>
            <hr />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />}>
                    <Route index element={<AboutUs/>}/>
                    <Route path="team" element={<TeamPage/>}/>
                </Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='user'>
                    <Route path='create' element={<CreateUser/>}/>
                    <Route path='edit/:userid' element={<EditUser/>}/>
                </Route>

            </Routes>
            <Link to= "/">Homepage</Link>
            <Link to= "/about">AboutPage</Link>
            <Link to= "/about/team">Team</Link>
        </div>
    )
}