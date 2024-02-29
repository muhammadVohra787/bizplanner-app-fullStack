import * as React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Button,
} from "@mui/material/";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddExpense from "../components/AddExpense";
import Typography from "@mui/material/Typography";
import Goals from "../components/Goals";
import { useState } from "react";
import dayjs from "dayjs";
const NewIdeas = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    budget: "",
    audience: "",
    expenses: [],
    goals: [],
  });
  const handleGoalsChange = (goals) => {
    const formattedGoals = goals.map((goal) => ({
      ...goal,
      goalDate: new Date(goal.goalDate).toLocaleDateString("fr-FR"), // Format date to French locale
    }));

    setFormData((prevState) => ({ ...prevState, goals: formattedGoals }));
  };

  const handleExpenseChange = (expenses) => {
    setFormData((prevState) => ({ ...prevState, expenses }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hanldeSave = () => {
    console.log(formData);
  };
  const testObj = () => {
    setFormData({
      name: "project#1",
      description: "project#1Descriptons",
      budget: "2000",
      audience: "Kids",
      expenses: [
        {
          expName: "G1",
          amount: "123123",
        },
      ],
      goals: [
        {
          goalName: "",
          goalDate: "28/02/2024",
          done: false,
        },
      ],
    });
  };

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        marginTop: "30px",
        backgroundColor: "secondary.main",
        padding: "30px",
        border: "#080a45 solid 2px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "fontWeightMedium",
          paddingBottom: "30px",
        }}
        color="primary.main"
      >
        TELL US MORE ABOUT YOUR IDEA
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20.25rem" },
        }}
        noValidate
        autoComplete={"off"}
      >
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.name}
        />
        <br />
        <TextField
          required
          label="Description"
          name="description"
          multiline
          minRows={2}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.description}
        />
        <br />
        <TextField
          label="Est. Budget"
          required
          helperText="Enter the amount in dollars"
          fullWidth
          name="budget"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.budget}
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
        <TextField
          label="Target Audience"
          fullWidth
          required
          onChange={(e) => {
            handleChange(e);
          }}
          name="audience"
          value={formData.audience}
        />
        <br />
        <Button
          onClick={() => {
            testObj();
          }}
        >
          Test Values
        </Button>
        <Typography
          variant="body1"
          color="primary.main"
          fontFamily={"pFF"}
          sx={{ marginLeft: "8px", marginTop: "10px" }}
        >
          Estimated Expenses:(optional){" "}
        </Typography>

        <AddExpense
          onChange={(e) => {
            handleChange(e);
          }}
          name="expenses"
          value={formData.expenses}
          onExpenseChange={handleExpenseChange}
        />
        <Typography
          variant="body1"
          color="primary"
          fontFamily={"pFF"}
          sx={{ marginLeft: "8px", marginTop: "25px" }}
        >
          Add Goals: (optional){" "}
        </Typography>
        <Goals
          onChange={(e) => {
            handleChange(e);
          }}
          onGoalsChange={handleGoalsChange}
          name="goals"
          value={formData.goals}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ fontSize: "20px", marginTop: "20px" }}
        fullWidth
        onClick={hanldeSave}
      >
        Save Idea
      </Button>
    </Container>
  );
};

export default NewIdeas;
