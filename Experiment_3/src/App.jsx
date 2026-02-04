import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "explore" && <Explore />}
      {page === "wishlist" && <Wishlist />}

      <Footer />
    </>
  );
}

export default App;
