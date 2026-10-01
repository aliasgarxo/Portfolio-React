import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy loading the components
const MainPage = lazy(() => import("./components/MainPage"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/resume" element={<><Resume /><Footer /></>} />
              <Route path="/about" element={<Navigate to="/#about" />} />
              <Route path="/project" element={<Navigate to="/#projects" />} />
              <Route path="/contact" element={<Navigate to="/#contact" />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
