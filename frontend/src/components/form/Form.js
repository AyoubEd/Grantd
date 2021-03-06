import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import WalletConnect from "../WalletConnect";
import Navbar from "../navbar/Navbar";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  handleChange,
  InputAdornment,
} from "@mui/material";
import Button from "@mui/material/Button";
import Notification from "../../components/notification/Notification";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% )`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardForm() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box id="form-page" sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              fontFamily: "Comfortaa",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {/* <ChevronLeftIcon /> */}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {/* {mainListItems} */}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
          <div
            style={{
              marginLeft: "2rem",
              marginTop: "3rem",
              fontFamily: "Comfortaa",
            }}
          >
            <div>
              Search Description
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                {/* <InputLabel htmlFor="outlined-adornment-amount">Required</InputLabel> */}
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem", fontFamily: "Comfortaa" }}>
              Grant Range
              <br></br>
              <div>
                <FormControl
                  fullWidth
                  sx={{ m: 1 }}
                  style={{ marginTop: "1rem" }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    style={{ fontFamily: "Comfortaa" }}
                  >
                    Maximum
                  </InputLabel>
                  <OutlinedInput
                    style={{ paddingTop: "0.5rem", width: "20rem" }}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Required"
                  />
                </FormControl>

                <br></br>

                <FormControl
                  fullWidth
                  sx={{ m: 1 }}
                  style={{ marginTop: "1rem", fontFamily: "Comfortaa" }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    style={{ fontFamily: "Comfortaa" }}
                  >
                    Minimum
                  </InputLabel>
                  <OutlinedInput
                    style={{ paddingTop: "0.5rem", width: "20rem" }}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Minimum"
                  />
                </FormControl>
              </div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
              Tag
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem", fontFamily: "Comfortaa" }}>
              Community Size
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem" }}>
              Rating
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Rating
                    name="half-rating-read"
                    defaultValue={4}
                    precision={0.5}
                    readOnly
                  />
                  <Rating name="half-rating" defaultValue={3} precision={0.5} />
                  <Rating
                    name="half-rating-read"
                    defaultValue={2}
                    precision={0.5}
                    readOnly
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={1}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </FormControl>
            </div>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 3 }}
            style={{
              paddingTop: "2rem",
              fontFamily: "Comfortaa",
              color: "#787ff6",
            }}
          >
            <h1>Polygon Ecosystem Fund</h1>

            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 140,
                boxShadow: "3px 6px 15px rgba(0, 0, 0, 0.1)",
              }}
              style={{
                paddingRight: "15rem",
                marginRight: "1rem",
                marginBottom: "2rem",
                marginLeft: "0rem",
              }}
            >
              <p
                fullWidth
                style={{ marginRight: "-12rem", fontFamily: "Comfortaa" }}
              >
                An investment fund dedicated to growing and supporting
                blockchain ecosystem building applications on Ethereum and
                Polygon. If you are building applications on DeFi, Web3,
                blockchain infrastructure, NFTs, metaverse, gaming and more and
                are looking for funding opportunities, please submit your
                application here.
              </p>
            </Paper>

            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 500,
                boxShadow: "3px 6px 15px rgba(0, 0, 0, 0.1)",
              }}
              style={{
                paddingRight: "15rem",
                marginRight: "1rem",
                marginBottom: "2rem",
                marginLeft: "0rem",
                paddingBottom: "160rem",
                fontFamily: "Comfortaa",
                boxShadow: "3px 6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>Submit Application Form</h3>
              <Container>
                <form>
                  <label
                    style={{ marginBottom: "5rem", fontFamily: "Comfortaa" }}
                  >
                    Applicant Name:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem", fontFamily: "Comfortaa" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "0.5rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>
                  <label style={{ marginBottom: "10rem" }}>
                    Email Address:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "0.5rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>
                  <label style={{ marginTop: "5rem" }}>
                    Project Name:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "0.5rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Please summarize your grant proposal in 140 characters or
                    less:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "2rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Total budget requested:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "0.5rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Focus Area
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <TextField
                        style={{ width: "60rem" }}
                        id="outlined-number"
                        label="Required"
                        type="number"
                        select
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Team Description
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Grant Scope:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    How does this project benefit the greater Polygon ecosystem?
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Relvant links:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Project Goals and success factors:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Project roadmap and milestones:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Challenges:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Referral:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{ paddingTop: "2rem", width: "60rem" }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Additional support requests:
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "2rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>

                  <label style={{ marginTop: "5rem" }}>
                    Additional information (feel free to share anything else you
                    feel might help your application!)
                    <br></br>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ marginTop: "1rem" }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        style={{ fontFamily: "Comfortaa" }}
                      >
                        Required
                      </InputLabel>
                      <OutlinedInput
                        style={{
                          paddingTop: "2rem",
                          width: "60rem",
                          fontFamily: "Comfortaa",
                        }}
                        id="outlined-adornment-amount"
                        multiline
                        startAdornment={
                          <InputAdornment position="start"></InputAdornment>
                        }
                        label="Required"
                      />
                    </FormControl>
                  </label>
                  <br></br>
                  <br></br>
                  <Button id="submit-button">
                    <Link
                      id="links-submit"
                      to="/messagingportal"
                      element={<Notification />}
                    >
                      submit
                    </Link>
                  </Button>
                </form>
              </Container>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Form() {
  return <DashboardForm />;
}
