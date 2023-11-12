import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import NotFoundPage from "./pages/NotFoundPage"
import RequireAuth from "./pages/RequireAuth"
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./layout/layout";
import DonationPage from "./pages/DonationPage/DonationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProtectedRoutes from "./layout/ProtectedRoutes";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ManagerPage from "./pages/ManagerPage/ManagerPage";
import ManagerCreatePage from "./pages/ManagerPage/ManagerCreatePage/ManagerCreatePage";
import ManagerEditPage from "./pages/ManagerPage/ManagerEditPage/ManagerEditPage";
import DonationItemPage from "./pages/DonationPage/DonationItemPage/DonationItemPage";

const routes = () => (

    <Router>
        <Layout>
            <Routes>
                <Route element={<RequireAuth><ProtectedRoutes/></RequireAuth>}>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/manager" element={<ManagerPage/>}/>
                    <Route path="/manager/create" element={<ManagerCreatePage/>}/>
                    <Route path="/manager/edit" element={<ManagerEditPage/>}/>
                </Route>
                <Route path="/donations" element={<DonationPage/>}/>
                <Route path="/donations/:id" element={<DonationItemPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
            </Routes>
        </Layout>
    </Router>

)

export default routes
