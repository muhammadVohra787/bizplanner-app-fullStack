import React, { useState, useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Checkbox, Button } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

const Notify = ({ messageType, message, action, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const capitalized =
  messageType.charAt(0).toUpperCase() + messageType.slice(1);
  useEffect(() => {
    if (isChecked && action === "done") {
      createNotification();
    }
  }, [isChecked]);

  const createNotification = () => {
    switch (messageType) {
      case "info":
        NotificationManager.info(message,capitalized, 2000);
        break;
      case "success":
        NotificationManager.success(message, capitalized, 2000);
        break;
      case "warning":
        NotificationManager.warning(message, capitalized, 2000);
        break;
      case "error":
        NotificationManager.error(message, capitalized, 2000, () => {
          alert("callback");
        });
        break;
      default:
        console.log("Invalid message type");
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteClick = () => {
    console.log(action);
    if (action === "delete" && onClick) {
      createNotification();
      onClick()
    }
  };

  return (
    <>
      {action === "done" ? (
        <Checkbox
          color="success"
          onChange={handleCheckboxChange}
          sx={{ marginTop: "8px" }}
        />
      ) : action === "delete" ? (
        <Button onClick={handleDeleteClick} sx={{ marginTop: "8px" }}>
          <DeleteIcon />
        </Button>
      ) : null}
      <NotificationContainer />
    </>
  );
};

export default Notify;
