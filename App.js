// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Gallery } from "./Pages/Gallery";
import { Feedback } from "./Pages/Feedback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./Pages/Menu";
// import DrawerLeft from "./Drawer";
// import PlayQuiz from "./Quiz/PlayQuiz";
import { Newspaper, Person } from "@mui/icons-material";
import FormPractice from "./Form/FormPractice";
// import PersonClass from "./Quiz/PersonClass";
// import Main from "./Newspaper/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPractice/>} />
        {/* <Route path="/" element={<Newspaper/>} /> */}
        {/* <Route path="/" element={<PlayQuiz />} /> */}
        {/* <Route path="/" element={<PersonClass />} /> */}
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} /> */}
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
