"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// MUI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "Users", href: "/users" },
  { title: "Products", href: "/products" },
];

interface Country {
  name: { common: string };
  population: number;
  flags: { svg: string };
  region: string
}


const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true)

  // Fetch countries in useEffect
   useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const limitedCountries = data.slice(0, 10);
      setCountries(limitedCountries);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <h2>Products</h2>
      </Toolbar>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#1E293B",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Navigation items={links} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div className="overflow-x-auto">
          <Table striped>
            <TableHead>
              <TableHeadCell>Countries</TableHeadCell>
              <TableHeadCell>Population</TableHeadCell>
              <TableHeadCell>Flag</TableHeadCell>
              <TableHeadCell>Region</TableHeadCell>
              <TableHeadCell>
                Actions
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <TableRow
                    key={index}
                    className="animate-pulse bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-24"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-12"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-12"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-8"></div>
                    </TableCell>
                  </TableRow>
                ))
              : countries.map((item:Country, index) => (
                  <TableRow
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.name.common}
                      
                    </TableCell>
                    <TableCell>{item.population}</TableCell>
                    <TableCell>
                      {/* <Image src={item.flags} alt={item.name.common}}/> */}
                      <img className="w-[40px]" src={item.flags.svg} alt="flag" />
                    </TableCell>
                    <TableCell>{item?.region}</TableCell>
                    <TableCell>
                      <button className="cursor-pointer">
                        <FavoriteBorderIcon/> like
                        </button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
          </Table>
        </div>
      </Box>
    </Box>
  );
}
