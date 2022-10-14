import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
