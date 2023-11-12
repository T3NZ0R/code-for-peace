import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import NotFoundPage from "./pages/NotFoundPage"
import RequireAuth from "./pages/RequireAuth"
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./layout/layout";
import DonationPage from "./pages/DonationPage/DonationPage";

const routes = () => (
    <Layout>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/donations" element={<DonationPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </Router>
    </Layout>
)

export default routes
