import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import CreateAgreement from "./pages/RentAgreement";
import Contact from "./pages/Contact";
import StampDuty from "./pages/StampDuty";
import theme from "./theme";
import RentAgreement from "./pages/RentAgreement";

function App() {
  return (
    <Box
      className="main-content"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-agreement" element={<RentAgreement />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/stamp-duty-fees" element={<StampDuty />} />
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </Router>
    </Box>
  );
}

export default App;
