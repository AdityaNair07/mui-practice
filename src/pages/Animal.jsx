import React, { useEffect, useState } from "react";
import animals from "../assets/data/data.json";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Slide,
  Typography,
} from "@mui/material";

const Animal = () => {
  const { id } = useParams();
  console.log(id);

  const animal = animals.filter((animal, index) => index == id);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: "column",
  };

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Box>
    //   <Container sx={style}>
    //     {animal.map((animal, index) => {
    //       return (
    //         <Box key={index}>
    //           <Card
    //             variant="elevation"
    //             elevation={3}
    //             sx={{
    //               width: "500px",
    //               overflowY: "hidden",
    //               height: "500px",
    //               position: "relative",
    //             }}
    //           >
    //             <CardMedia
    //               src={animal.imageUrl}
    //               component="img"
    //               height={500}
    //               sx={{ backgroundPosition: "center" }}
    //             />
    //             <Slide
    //               direction="up"
    //               in={checked}
    //               mountOnEnter
    //               unmountOnExit
    //               appear={true}
    //               timeout={300}
    //               easing={{ enter: theme.transitions.easing.easeOut }}
    //             >
    //               <Box
    //                 component="div"
    //                 className="infoBox"
    //                 sx={{
    //                   position: "absolute",
    //                   zIndex: 10,
    //                   color: "white",
    //                   padding: "0 20px",
    //                   paddingTop: "20px",
    //                   bottom: 0,
    //                   transform: `translateY(200px)`,
    //                   backdropFilter: "blur(10px)",
    //                   display: "flex",
    //                   flexDirection: "column",
    //                   justifyContent: "space-between",
    //                   alignItems: "center",
    //                 }}
    //               >
    //                 <Typography
    //                   sx={{ textTransform: "uppercase" }}
    //                   variant="h4"
    //                   component="h2"
    //                 >
    //                   {animal.name}
    //                 </Typography>
    //                 <CardContent
    //                   sx={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     gap: "20px",
    //                   }}
    //                 >
    //                   <Typography variant="h6">
    //                     Category: {animal.category}
    //                   </Typography>
    //                   <Typography variant="body1">{animal.desc}</Typography>
    //                 </CardContent>
    //               </Box>
    //             </Slide>
    //           </Card>
    //         </Box>
    //       );
    //     })}
    //   </Container>
    // </Box>
    <Box>
      <Container sx={style}>
        {animal.map((animal) => {
          return (
            <Box key={id}>
              <Card
                variant="elevation"
                elevation={3}
                sx={{
                  width: "500px",
                  overflowY: "hidden",
                  height: "500px",
                  position: "relative",
                }}
              >
                <CardMedia
                  src={animal.imageUrl}
                  component="img"
                  height={500}
                  sx={{ backgroundPosition: "center" }}
                />
                <Slide
                  direction="up"
                  in={checked}
                  mountOnEnter
                  unmountOnExit
                  appear={true}
                  timeout={300}
                >
                  <Box
                    component="div"
                    className="infoBox"
                    sx={{
                      position: "absolute",
                      zIndex: 10,
                      color: "white",
                      padding: "0 20px",
                      paddingTop: "20px",
                      bottom: 0,
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ textTransform: "uppercase" }}
                      variant="h4"
                      component="h2"
                    >
                      {animal.name}
                    </Typography>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <Typography variant="h6">
                        Category: {animal.category}
                      </Typography>
                      <Typography variant="body1">{animal.desc}</Typography>
                    </CardContent>
                  </Box>
                </Slide>
              </Card>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Animal;
