import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Animal from "./pages/Animal";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  keyframes,
  styled,
} from "@mui/material";
import HomePage from "./pages/HomePage";

export default function App() {
  // custom component
  const CustomCard = styled(Card)({
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255,255,255,0.2)",
    border: "2px solid white",
    borderRadius: "5px",
    fontFamily: "BreathDemo",
  });

  const CustomButton = styled(Button)(({ theme }) => ({
    width: "150px",
    color: "white",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      backgroundColor: "red",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "green",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "yellow",
    },
  }));

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<Animal />} />
        </Routes>
      </BrowserRouter>
      <Container
        component={"div"}
        sx={{
          background: "linear-gradient(120deg, crimson, royalblue)",
          padding: "20px 30px",
          marginX: "auto",
        }}
      >
        <CustomCard elevation={10}>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat!
            <CustomButton variant="contained">Custom btn</CustomButton>
          </CardContent>
        </CustomCard>
      </Container>
    </Box>
  );
}
