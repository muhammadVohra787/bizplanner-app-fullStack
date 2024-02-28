import * as React from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material/";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddExpense from "../components/AddExpense";
import Typography from "@mui/material/Typography";
import Goals from "../components/Goals";

const NewIdeas = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20.25rem" },
        }}
        noValidate
        autoComplete={"off"}
      >
        <TextField label="Name" fullWidth required />
        <br />
        <TextField
          required
          label="Description"
          multiline
          minRows={2}
          variant="outlined"
          fullWidth
        />
        <br />
        <TextField
          label="Est. Budget"
          required
          helperText="Enter the amount in dollars"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <AttachMoneyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField label="Target Audience" fullWidth required />
        <br />
        <Typography
          variant="body1"
          color="primary.main"
          fontFamily={"pFF"}
          sx={{ marginLeft: "8px", marginTop: "10px" }}
        >
          Estimated Expenses:(optional){" "}
        </Typography>

        <AddExpense />
        <Typography
          variant="body1"
          color="primary"
          fontFamily={"pFF"}
          sx={{ marginLeft: "8px", marginTop: "25px" }}
        >
          Add Goals: (optional){" "}
        </Typography>
        <Goals />
      </Box>
    </>
  );
};

export default NewIdeas;
