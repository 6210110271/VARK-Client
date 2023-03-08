import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Layers from "@mui/icons-material/Layers";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LessonIcon from '@mui/icons-material/LibraryBooks';
import MembersIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ScoreIcon from '@mui/icons-material/Score';


const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type MenuProp = {
  open: boolean;
  onDrawerClose: () => void;
};


export default function Menu({ open, onDrawerClose }: MenuProp) {
  const theme = useTheme();



  const handleDrawerClose = () => {
    // setOpen(false);
    onDrawerClose();
  };


  const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) =>
        `${props.className} ${isActive ? props.activeClassName : ""}`
      }
    >
      {props.children}
    </NavLink>
  ));

  const Image = (props: { [x: string]: any; alt: any; }) => {
    const {
      alt,
      ...otherProps
    } = props;

    return (
      <img alt={alt} {...otherProps} />
    );
  }

  const menuList = () => {
    return [
      { to: "/dashboard", icon: <DashboardIcon />, text: "หน้าแรก" },
      { to: "/lesson", icon: <LessonIcon />, text: "บทเรียน" },
      { to: "/members", icon: <MembersIcon />, text: "จัดการสมาชิก" },
      { to: "/info", icon: <InfoIcon />, text: "ข้อมูล" },
      { to: "/score", icon: <ScoreIcon />, text: "ข้อมูลคะแนน" },
    ];
  };


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">
          <Image alt="Logo" src={`${process.env.PUBLIC_URL}/images/codemobiles_logo.png`} style={{ height: 30 }}></Image>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />
      <List>
        {menuList().map((item) => (
          <ListItem
            button
            key={item.to}
            to={item.to}
            component={MyNavLink}
            activeClassName="Mui-selected"
            exact
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* {menuListV2(role).map((item) => (
        <ListItem
          button
          key={item.to}
          to={item.to}
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))} */}
    </Drawer>
  );
}
