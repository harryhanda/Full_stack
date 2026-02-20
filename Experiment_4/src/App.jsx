import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";
import Analytics from "./pages/Analytics"; // NEW PAGE

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;