import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./Sidebar";
import Category from "../Category/Category";
import DisplayAllCategory from "../Category/DisplayAllCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubCategory from "../SubCategory/SubCategory";
import DisplayAllSubCategory from "../SubCategory/DisplayAllSubCategory";
import Company from "../Company/Company";
import DisplayAllCompany from "../Company/DisplayAllCompany";
import Model from "../Model/Model";
import DisplayAllModel from "../Model/DisplayAllModel";
import Vehicle from "../Vehicle/Vehicle";
import DisplayAllVehicle from "../Vehicle/DisplayAllVehicle";
import FeatureInterface from "../Featured/FeatureInterface";
import Offer from "../Offer/Offer";
import DisplayAllOffer from "../Offer/DisplayAllOffer";
import WhypnpInterface from "../WhyPnp/WhypnpInterface";
import { isValidAuth } from "../../Services/FetchNodeServices";
export default function Dashboard() {
  const [authState, setAuthState] = useState(false);
  useEffect(function () {
    checkAuth();
  }, []);
  const checkAuth = async () => {
    var result = await isValidAuth();

    if (result.auth) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  };

  return (
    <div>
      {authState ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PayNRent
              </Typography>

              <Avatar
                alt="Pratishthaa"
                style={{}}
                src="/assets/pratishthaa.png"
              />
            </Toolbar>
          </AppBar>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{ background: "#DDEFFF" }}>
                <div
                  style={{
                    paddingTop: 5,
                    paddingLeft: 5,
                    display: "flex",
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/defaultcar.png" style={{ width: 100 }} />
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10}>
              <Routes>
                <Route element={<Category />} path="/category" />
                <Route
                  element={<DisplayAllCategory />}
                  path="/displayallcategory"
                />
                <Route element={<SubCategory />} path="/subcategory" />
                <Route
                  element={<DisplayAllSubCategory />}
                  path="/displayallsubcategory"
                />
                <Route element={<Company />} path="/company" />
                <Route
                  element={<DisplayAllCompany />}
                  path="/displayallcompany"
                />
                <Route element={<Model />} path="/model" />
                <Route element={<DisplayAllModel />} path="/displayallmodel" />
                <Route element={<Vehicle />} path="/vehicle" />
                <Route
                  element={<DisplayAllVehicle />}
                  path="/displayallvehicle"
                />
                <Route
                  element={<FeatureInterface />}
                  path="/featureinterface"
                />
                <Route element={<WhypnpInterface />} path="/whypnpinterface" />
                <Route element={<DisplayAllOffer />} path="/displayalloffer" />
                <Route element={<Offer />} path="/offer" />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>
          <h1>
            <a href="http://localhost:3000/adminlogin">Pls Login</a>
          </h1>
        </>
      )}
    </div>
  );
}
