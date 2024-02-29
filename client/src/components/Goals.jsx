import { useState, useEffect } from "react";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Box, TextField, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import { PlusIcon } from "./PlusIcon";
import Notify from "./Notify";

const Goals = ({ onGoalsChange }) => {
  const today = new Date();
  const [goals, setGoals] = useState([
    {
      goalName: "",
      goalDate: dayjs(today),
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
    const updatedGoals = goals.filter(
      (goal, currentIndex) => currentIndex !== index
    );
    setGoals(updatedGoals);
  };

  const handleAddExpense = () => {
    setGoals([...goals, { goalName: "", goalDate: dayjs(today), done: false }]);
  };
  const handleDateChange = (date, index) => {
    const goalsCopy = [...goals];

    goalsCopy[index].goalDate = date;
    console.log(goalsCopy);
    setGoals(goalsCopy);
  };
  const handleDone = (index) => {
    const goalsCopy = [...goals];
    goalsCopy[index].done = !goalsCopy[index].done;
    setGoals(goalsCopy);
  };
  useEffect(() => {
    onGoalsChange(goals);
  }, [goals, onGoalsChange]);

  const testObj = () => {
    setGoals([
      {
        goalName: "Goal#1",
        goalDate: dayjs(today),
        done: false,
      },
      {
        goalName: "Goal#2",
        goalDate: dayjs(today),
        done: false,
      },
      {
        goalName: "Goal#3",
        goalDate: dayjs(today),
        done: false,
      },
      {
        goalName: "Goal#4",
        goalDate: dayjs(today),
        done: false,
      },
      {
        goalName: "Goal#5",
        goalDate: dayjs(today),
        done: false,
      },
    ]);
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
                onChange={(e) => handleDateChange(e, index)}
                value={dayjs(goal.goalDate)}
                format="MM/DD/YYYY"
                name="goalDate"
                label="Completion Date (MM-DD-YYYY)"
              />
            </LocalizationProvider>
            <Notify
              message={"Goal: " + goal.goalName + " is deleted"}
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
        color="primary"
        variant="contained"
        sx={{ marginLeft: "8px" }}
        onClick={handleAddExpense}
      >
        <PlusIcon sx={{ fontSize: "15px" }} />
        <Typography variant="h7" fontWeight={"fontWeightLight"}>
          Create a new Goal
        </Typography>
      </Button>
      <Button
        onClick={() => {
          testObj();
        }}
      >
        Test Values
      </Button>
    </Box>
  );
};

export default Goals;
