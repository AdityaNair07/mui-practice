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
import AutoComplete from "./pages/AutoComplete";

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
          <Route path="/autocomplete" element={<AutoComplete />} />
        </Routes>
        <nav>
          <Link to="/autocomplete">Autocomplete component</Link>
        </nav>
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

// import React, { useRef, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Table from "@material-ui/core/Table";
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: "sticky",
//     top: 0,
//     zIndex: 1000, // Ensure it's above other elements
//   },
//   tableContainer: {
//     marginTop: theme.spacing(8), // Adjust as needed based on your layout
//     position: "relative",
//   },
// }));

// const App = () => {
//   const classes = useStyles();
//   const searchRef = useRef(null);
//   const tableRef = useRef(null);

//   useEffect(() => {
//     const searchElement = searchRef.current;
//     const tableElement = tableRef.current;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Add logic to stop scrolling or handle intersection point
//           // You can use CSS classes or state to manage this behavior
//         }
//       });
//     });

//     observer.observe(tableElement);

//     return () => observer.unobserve(tableElement);
//   }, []);

//   return (
//     <div>
//       <AppBar className={classes.appBar}>
//         <Toolbar ref={searchRef}>
//           {/* Your sticky search bar content */}
//           <input type="text" placeholder="Search..." />
//         </Toolbar>
//       </AppBar>

//       <Paper className={classes.tableContainer}>
//         <Table ref={tableRef}>
//           <TableRow>
//             <TableCell>Table Content</TableCell>
//           </TableRow>
//           {/* Add more table rows as needed */}
//         </Table>
//       </Paper>

//       <div style={{ marginTop: "20px" }}>
//         {/* Your paragraph content */}
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//           scelerisque urna vel arcu dictum, vitae dapibus leo tristique.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;
