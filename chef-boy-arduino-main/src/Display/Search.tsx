import { Add, Search } from "@mui/icons-material";
import { Box, Chip, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

export default function SearchBar(props: any) {
  const [search, setSearch] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  // Room for api call here
  // const [recipes, setRecipes] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "50px",
        backgroundColor: "#grey",
        marginBottom: "20px",
      }}
    >
      <TextField
        sx={{
          marginBottom: "20px",
        }}
        fullWidth
        id="outlined-basic"
        label="Lets get cookin "
        variant="outlined"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        InputProps={{
          endAdornment:
            search.length > 0 ? (
              <>
                {" "}
                <IconButton
                  onClick={() => {
                    setChips([...chips, search]);
                    setSearch("");
                  }}
                >
                  <Add />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    setChips([...chips, search]);
                    setSearch("");
                  }}
                >
                  <Search color="error" />
                </IconButton>
              </>
            ) : (
              <IconButton
                sx={{
                  color: "#ffc75f",
                }}
                onClick={() => {
                  setChips([...chips, search]);
                  setSearch("");
                }}
              >
                <Search />
              </IconButton>
            ),
          sx: {
            backgroundColor: "#fff",
          },
        }}
        InputLabelProps={{
          sx: {
            borderColor: "white",
            color: "black",
            backgroundColor: "peach",
          },
        }}
      />
      <Box>
        {chips.map((chip, index) => {
          return (
            <Chip
              sx={{
                backgroundColor: "#fff",
                margin: "5px",
              }}
              label={chip}
              key={index}
              onDelete={() => {
                setChips(chips.filter((c) => c !== chip));
              }}
            />
          );
        })}
      </Box>
      {/* instrunctional  text */}
    </Box>
  );
}
