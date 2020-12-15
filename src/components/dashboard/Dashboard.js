import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ButtonMat from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import Chart from "../Chart";
import croc from "../../croc.jpg"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Access
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({})
  const [data, setData] = useState("")

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    console.log(userInfo)
    const response = await axios.post("http://localhost:8080/adduser", userInfo);
    
    console.log(response)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
            



            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form {...layout} name="basic" initialValues={{ remember: true }}>
                <Form.Item
                  label="firstname"
                  name="firstname"
                  rules={[
                    { required: true, message: "Please input your firstname!" },
                  ]}
                >
                  <Input onChange={(e) => setUserInfo({...userInfo,firstname:e.target.value}) } />
                </Form.Item>
                <Form.Item
                  label="lastname"
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your lastname!" },
                  ]}
                >
                  <Input onChange={(e) => setUserInfo({...userInfo,lastname:e.target.value}) }/>
                </Form.Item>
                <Form.Item
                  label="phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                  ]}
                >
                  <Input onChange={(e) => setUserInfo({...userInfo,phone:e.target.value}) }/>
                </Form.Item>
                <Form.Item
                  label="card number"
                  name="card number"
                  rules={[
                    { required: true, message: "Please input your card number!" },
                  ]}
                >
                  <Input onChange={(e) => setUserInfo({...userInfo,cardnumber:e.target.value}) }/>
                </Form.Item>
                <Checkbox>door 1</Checkbox>
                <Checkbox>door 2</Checkbox>
                <Checkbox>door 3</Checkbox>
              </Form>
            </Modal>

            <Switch>
              <Route path="/dashboard" exact>
                <div style={{
                width: "50vw",
                margin: "50px",
                marginLeft:"200px",
                fontSize: "20px",
                
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
              }}>
                
                <Chart/>
                <img src={croc} style={{ width:"600px",height:"600px"}}/>
                </div>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Orders />
                  </Paper>
                </Grid>
              </Route>
              <Route path="/dashboard/:id">
              <div
              style={{
                width: "100%",
                margin: "50px",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <ButtonMat
                variant="contained"
                color="secondary"
                onClick={showModal}
              >
                Add new User
              </ButtonMat>
            </div>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Users  />
                  </Paper>
                </Grid>
              </Route>
            </Switch>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
