import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/form" element={<Form></Form>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
