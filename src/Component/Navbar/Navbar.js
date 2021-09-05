import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import
import SearchTitle from "../SearchTitle/SearchTitle";
import SearchRate from "../SearchRate/SearchRate";
import "./Navbar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({
  setSearchTitle,
  setSearchRating,
  searchRating,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://tse1.mm.bing.net/th?id=OIP.dkcdYx-M2GQtkNbT0rBFSwHaHa&pid=Api&P=0&w=300&h=300"
              className={classes.large}
            />
          </IconButton>
          {/* <Link to="/"> */}
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ color: "white" }}>
              MovieApp
            </Link>
          </Typography>
          {/* </Link> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <SearchTitle setSearchTitle={setSearchTitle} />
          </div>
          <SearchRate
            setSearchRating={setSearchRating}
            searchRating={searchRating}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
