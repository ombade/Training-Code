
import "./App.css";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <h1>hi</h1>
      <SignInPage />
    </div>
  );
}
export default App;
