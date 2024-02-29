import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  createSvgIcon,
  Button,
} from "@mui/material/";
import Notify from "./Notify";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);
const AddExpense = ({ onExpenseChange }) => {
  const [expenses, setExpenses] = useState([
    {
      expName: "",
      amount: "",
    },
  ]);
  const handleAddExpense = () => {
    setExpenses([...expenses, { expName: "", amount: "" }]);
    console.log(expenses);
  };
  const handleOnchange = (e, index) => {
    const { name, value } = e.target;
    const expensesCopy = [...expenses];
    if (name === "amount" && isNaN(parseInt(value))) {
      return;
    }
    expensesCopy[index][name] = value;
    setExpenses(expensesCopy);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter(
      (expense, currentIndex) => currentIndex !== index
    );
    setExpenses(updatedExpenses);
  };
  useEffect(() => {
    onExpenseChange(expenses);
  }, [onExpenseChange, expenses]);

  const testObj = () => {
    setExpenses([
      {
        expName: "exp#1",
        amount: "100",
      },
      {
        expName: "exp#2",
        amount: "200",
      },
      {
        expName: "exp#3",
        amount: "300",
      },
      {
        expName: "exp#4",
        amount: "400",
      },
      {
        expName: "exp#5",
        amount: "500",
      },
      // Add more objects as needed
    ]);
  };
  return (
    <Box>
      {expenses.map((expense, index) => {
        return (
          <Box key={index}>
            <TextField
              required
              name="expName"
              label="Name"
              helperText="Enter the Name Of Expense"
              autoComplete="off"
              value={expense.expName}
              onChange={(e) => handleOnchange(e, index)}
            />
            <TextField
              label="Amount"
              required
              name="amount"
              helperText="Enter the Expense Amount in Dollars"
              value={expense.amount}
              autoComplete="off"
              onChange={(e) => handleOnchange(e, index)}
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
            <Notify
              message={"Expense: " + expense.expName + " is deleted"}
              onClick={() => handleDelete(index)}
              messageType={"warning"}
              action="delete"
            >
              <DeleteIcon />
            </Notify>
            <br />
          </Box>
        );
      })}
      <br />
      <Button
        variant="contained"
        sx={{ marginLeft: "8px" }}
        onClick={handleAddExpense}
      >
        <PlusIcon sx={{ fontSize: "15px" }} />
        <Typography variant="h7" fontWeight={"fontWeightLight"}>
          Add a new Expense
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

export default AddExpense;
