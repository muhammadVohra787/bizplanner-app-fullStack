import { useState } from "react";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Box, TextField, Button  } from "@mui/material/";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import { PlusIcon } from "./PlusIcon";
import Notify from "./Notify";

const Goals = () => {
  const today = new Date();
  const [goals, setGoals] = useState([
    {
      goalName: "",
      date: dayjs(today),
      done: false,
    },
  ]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const goalsCopy = [...goals];
    goalsCopy[index][name] = value;
    setGoals(goalsCopy);
  };

  const handleDelete = (index) => {
    console.log('here')
    const updatedGoals = goals.filter(
      (goal, currentIndex) => currentIndex !== index
    );
    setGoals(updatedGoals);
  };

  const handleAddExpense = () => {
    setGoals([...goals, { goalName: "", date: dayjs(today), done: false }]);
  };

  const handleDone = (index) => {
    const goalsCopy = [...goals];
    goalsCopy[index].done = !goalsCopy[index].done;
    setGoals(goalsCopy);
    console.log(goalsCopy)
  };
  return (
    <Box>
      {goals.map((goal, index) => {
        return (
          <Box key={index}>
            <br />
            <TextField
              label="Goals"
              required
              value={goal.goalName}
              onChange={(e) => handleChange(e, index)}
              name="goalName"
              sx={{ textDecoration: goal.done ? "line-through" : "none" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                required
                onChange={(e) => handleChange(e, index)}
                value={goal.date}
                format="MM/DD/YYYY"
                name="date"
                label="Completion Date (MM/DD/YYYY)"
              />
            </LocalizationProvider>
              <Notify
                message={"Goal: "+ goal.goalName + " is deleted"}
                onClick={() => handleDelete(index)}
                messageType={"warning"}
                action="delete"
              >
                <DeleteIcon />
              </Notify>

            <Notify
              message={goal.goalName + " is completed"}
              messageType={"success"}
              action="done"
              onClick={() => handleDone(index)}
            ></Notify>
          </Box>
        );
      })}
      <br />
      <Button
        color="success"
        variant="contained"
        sx={{ marginLeft: "8px" }}
        onClick={handleAddExpense}
      >
        <PlusIcon sx={{ fontSize: "15px" }} />
        <Typography variant="h7" fontWeight={"fontWeightLight"}>
          Create a new Goal
        </Typography>
      </Button>
    </Box>
  );
};

export default Goals;
