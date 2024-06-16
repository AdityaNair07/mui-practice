import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BreathDemo from "../assets/fonts/breathdemo/Breath_Demo.ttf";
import axios from "axios";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardHeader,
  CardMedia,
  ClickAwayListener,
  CssBaseline,
  Grid,
  IconButton,
  Input,
  InputBase,
  Stack,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  InfoRounded,
  DeleteRounded,
  SearchRounded,
  SettingsRounded,
  PersonRounded,
} from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import animals from "../assets/data/data.json";

const HomePage = () => {
  const [expanded, setExpanded] = useState({});

  const isExpanded = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const handleClickAway = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: false }));
  };

  const [expandedProfile, setExpandedProfile] = useState(false);

  const isExpandedProfile = () => {
    setExpandedProfile(!expandedProfile);
  };

  const handleClickAwayProfile = () => {
    setExpandedProfile(false);
  };

  const [animalsData, setAnimalsData] = useState(animals);

  const [originalData, setOriginalData] = useState(animalsData);

  const searchAnimal = (e) => {
    var searchValue = e.target.value.toLowerCase();
    if (searchValue === "" || searchValue.length === 0)
      setAnimalsData(originalData);
    else {
      setAnimalsData(
        animalsData.filter((animal) => {
          return animal.name.toLowerCase().includes(searchValue);
        })
      );
    }
  };

  const styles = {
    position: "absolute",
    top: "100%",
    left: "-200%",
    backgroundColor: "white",
    boxShadow: "2px 3px 7px grey",
    fontSize: "15px",
    paddingY: "10px",
    paddingX: "5px",
    borderRadius: "5px",
    color: "grey",
  };

  const deleteAnimal = (index) => {
    var copyData = [...animalsData];
    copyData.splice(index, 1);
    setAnimalsData(copyData);
  };

  const [moviesData, setMoviesData] = useState([]);

  const [input, setInput] = useState("");

  const searchMovies = async () => {
    var searchValue = input;
    const data = await axios.get(
      `https://omdbapi.com/?i=tt3896198&apikey=6127562e&s=${searchValue}`
    );
    console.log(data.data.Search);
    setMoviesData(data.data.Search);
  };

  const CustomTheme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
      secondary: {
        main: blue[600],
      },
    },
    // globally change font family
    // typography: {
    //   fontFamily: "BreathDemo",
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face{
            font-family: 'BreathDemo',
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('BreathDemo'), local('BreathDemo'), url(${BreathDemo}) format('tff');
          }`,
      },

      MuiTypography: {
        variants: [
          {
            props: {
              variant: "customHeading",
            },
            style: {
              color: "red !important",
              fontSize: "5rem",
            },
          },
          {
            props: {
              variant: "paragraph",
            },
            style: {
              color: "darkgray",
              fontSize: "1.5rem",
            },
          },
        ],
      },
      MuiContainer: {
        variants: [
          {
            props: {
              variant: "flexContainerRow",
            },
            style: {
              display: "flex",
              alignItems: "center",
            },
          },
          {
            props: {
              variant: "flexContainerCol",
            },
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          },
        ],
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <AppBar position="fixed" color="primary">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "3px",
                alignItems: "center",
                justifyContent: "center",
              }}
              bgcolor={"white"}
              borderRadius={1}
              color={"black"}
            >
              <SearchRounded sx={{ p: 0.3 }} />
              <InputBase
                placeholder="Enter an animal name..."
                sx={{
                  borderRadius: 2,
                  width: "100%",
                }}
                onChange={(e) => searchAnimal(e)}
              />
            </Box>
            <Button>
              <ClickAwayListener onClickAway={() => handleClickAwayProfile()}>
                <Box sx={{ position: "relative" }}>
                  <IconButton onClick={() => isExpandedProfile()}>
                    <Avatar />
                  </IconButton>
                  {expandedProfile ? (
                    <Stack sx={styles}>
                      <Button
                        variant="outline"
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "5px",
                          paddingX: "5px",
                          "&:hover": {
                            color: "green",
                          },
                        }}
                      >
                        <PersonRounded /> Profile
                      </Button>
                      <Button
                        variant="outline"
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "5px",
                          paddingX: "5px",
                          "&:hover": {
                            color: "royalblue",
                          },
                        }}
                      >
                        <SettingsRounded />
                        Settings
                      </Button>
                    </Stack>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </Button>
          </Toolbar>
        </AppBar>
        <Typography
          variant="h4"
          paddingX={5}
          paddingY={4}
          paddingTop={8}
          marginTop={4}
          component="h2"
        >
          Animal Kingdom
        </Typography>
        <Box flexGrow={1}>
          <Grid
            container
            spacing={3}
            paddingX={5}
            paddingTop={4}
            paddingBottom={6}
          >
            {animalsData.map((animal, index) => {
              return (
                <Grid lg={3} sm={6} md={4} key={index} item>
                  <Card
                    elevation={5}
                    sx={{
                      minWidth: "290px",
                      margin: "auto",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={animal.imageUrl}
                      alt={animal.name}
                      height={200}
                      sx={{
                        objectFit: "cover",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px 4px 0 0",
                      }}
                    />
                    <CardHeader
                      sx={{ textTransform: "uppercase" }}
                      title={animal.name}
                      subheader={animal.category}
                      action={
                        <ClickAwayListener
                          onClickAway={() => handleClickAway(index)}
                        >
                          <Box sx={{ position: "relative" }}>
                            <IconButton onClick={() => isExpanded(index)}>
                              <MoreVertIcon></MoreVertIcon>
                            </IconButton>
                            {expanded[index] ? (
                              <Stack sx={styles}>
                                <Link
                                  to={`/${index}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  <Button
                                    variant="outline"
                                    sx={{
                                      display: "flex",
                                      gap: "5px",
                                      paddingX: "5px",
                                      "&:hover": {
                                        color: "royalblue",
                                      },
                                    }}
                                    onClick={() =>
                                      console.log("details", index)
                                    }
                                  >
                                    <InfoRounded /> Details
                                  </Button>
                                </Link>
                                <Button
                                  variant="outline"
                                  sx={{
                                    display: "flex",
                                    gap: "5px",
                                    paddingX: "5px",
                                    "&:hover": {
                                      color: "red",
                                    },
                                  }}
                                  onClick={() => deleteAnimal(index)}
                                >
                                  <DeleteRounded />
                                  Delete
                                </Button>
                              </Stack>
                            ) : null}
                          </Box>
                        </ClickAwayListener>
                      }
                    />
                    <CardContent>
                      <Typography paragraph>{animal.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box px={3}>
          <Input onChange={(e) => setInput(e.target.value)} />
          <Button onClick={searchMovies}>Get data</Button>
          <Grid container spacing={3} py={3}>
            {moviesData
              ? moviesData.map((movie) => {
                  return (
                    <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
                      <Card variant="elevation" elevation={4}>
                        <CardMedia
                          image={movie.Poster}
                          component="img"
                          sx={{
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            // height: "300px",
                          }}
                        />
                        <CardContent>
                          <Typography variant="h4" component="h3">
                            {movie.Title.length >= 15
                              ? movie.Title.substring(0, 15) + "..."
                              : movie.Title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography paragraph>{movie.Type}</Typography>
                            <Typography paragraph>{movie.Year}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              : ""}
          </Grid>
        </Box>
        <CssBaseline />
        <Box>
          <Typography color={"secondary"} variant="paragraph">
            Hello
          </Typography>
          <Typography
            className="customFont"
            variant="h2"
            sx={{ fontFamily: "BreathDemo" }}
          >
            Hello
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
