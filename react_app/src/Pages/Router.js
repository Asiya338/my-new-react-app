import ReactDOM from "react-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Nopage from "./Nopage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Blog" element={<Blog />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
//ReactDOM.render(<Router />, document.getElementById("root"));
