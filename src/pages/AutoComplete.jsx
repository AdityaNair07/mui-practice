import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";

const AutoComplete = () => {
  const countries = [
    "Afghanistan",
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Mexico",
    "Nigeria",
    "Pakistan",
    "Russia",
    "South Africa",
    "South Korea",
    "Spain",
    "United States",
  ];
  return (
    <>
      <Box
        sx={{
          border: "2px solid red",
        }}
      >
        <Typography variant="h4" sx={{ m: 2, color: "teal" }}>
          Typography component
        </Typography>
        <Autocomplete
          options={countries}
          renderInput={(element) => <TextField {...element} />}
          sx={{
            width: 200,
            backgroundColor: "greenyellow",
          }}
        />
      </Box>
    </>
  );
};

export default AutoComplete;
