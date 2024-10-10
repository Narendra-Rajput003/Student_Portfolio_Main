import { ThemeProvider } from "./components/theme-provider";
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/Footer";
import React from "react";
import { ModeToggle } from "./components/mode-toggle";



function App(){


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project/:id" element={<ProjectView/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App;