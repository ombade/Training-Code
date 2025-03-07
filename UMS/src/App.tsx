import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Dashboard from "./components/Dashboard.tsx";
import UserDetails from "./pages/UserDetails";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Login from "./components/Login.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Login />} />

     
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
