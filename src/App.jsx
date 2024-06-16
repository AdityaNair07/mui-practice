import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Animal from "./pages/Animal";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Animal />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
