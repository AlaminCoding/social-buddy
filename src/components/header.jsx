import React from "react";
import logo from "../logo.png";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextsmsIcon from "@material-ui/icons/Textsms";
import { Link } from "react-router-dom";

const Header = () => {
  const useStyles = makeStyles({
    header: {
      height: "auto",
      width: "100%",
      backgroundColor: "lightcyan",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      boxShadow: "0px 1px 8px gray",
      position: "fixed",
      top: "0px",
      zIndex: "1",
    },
    img: {
      height: "85px",
      width: "auto",
    },
    nav: {
      color: "crimson",
      width: "12%",
      padding: "5px 10px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderRadius: "3px",
      boxShadow: "0px 0px 8px -2px grey",
    },
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} className={classes.img} alt="Social Logo" />
        </Link>
        <Typography variant="h5">WELCOME!</Typography>
        <nav className={classes.nav}>
          <Link to="/">
            <HomeIcon />
          </Link>
          <NotificationsIcon />
          <TextsmsIcon />
          <AccountCircleIcon />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
