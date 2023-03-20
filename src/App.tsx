import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import { blueGrey, blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "./reducers";
import * as loginActions from "./actions/login.action";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashbordPage from "./components/pages/DashboardPage";
import MemberPage from "./components/pages/MemberPage";
import InformationPage from "./components/pages/InformationPage";
import ScorePage from "./components/pages/ScorePage";
import GamePage from "./components/pages/GamePage";
import { GameEp1, GameEp2 } from "./components/pages/GameEp";
import BoardGamePage from "./components/pages/GameEp/BoardGamePage";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "url(".concat(`${process.env.PUBLIC_URL}/images/.jpg`) + ")",
          width: drawerWidth,
        },
      },
    },
  },
  typography: {
    fontFamily: "Fredoka",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,
  palette: {
    primary: process.env.REACT_APP_IS_PRODUCTION === "0" ? blue : blueGrey,
    background: {
      default: "#CFD2D6",
    },
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const [open, setOpen] = React.useState(true);
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);
  const dispatch = useDispatch<any>();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(loginActions.restoreLogin());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {loginReducer.result && <Header open={open} onDrawerOpen={handleDrawerOpen} />}
        {loginReducer.result && <Menu open={open} onDrawerClose={handleDrawerClose} />}
        <Main
          open={open}
          sx={{ backgroundImage: "url(".concat(`${process.env.PUBLIC_URL}/images/`).concat(")"), height: "100vh" }}
        >
          <DrawerHeader />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoutes />}>Financial
              <Route path="/dashboard" element={<DashbordPage />} />
              <Route path="/members" element={<MemberPage />} />
              <Route path="/info" element={<InformationPage />} />
              <Route path="/score" element={<ScorePage />} />
              <Route path="/games" element={<GamePage />} />
              <Route path="/boardgame" element={<BoardGamePage />} /> 
              <Route path="/ep-1" element={<GameEp1 />} />
              <Route path="/ep-2" element={<GameEp2 />} />

            </Route>
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);
