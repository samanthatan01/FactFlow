import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../context/user";
import useFetch from "../hooks/useFetch";
import styles from "../components/SmartCollection.module.css";

import { TextField, Box, Button, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const SmartCollection = () => {
  const userCtx = useContext(UserContext);
  const fetchData = useFetch();
  const [newCollection, setNewCollection] = useState("");

  // for testing purposes -- to delete when completed
  console.log(userCtx.smartCollection);
  console.log(userCtx.loggedUserId);
  console.log(newCollection);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  //Control card expansion for Advanced Search Options
  const [expanded, setExpanded] = useState(false);

  //handle Edit Collection Expand click
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // get smart collection for the specific logged-in user
  const getCollectionByUserID = async () => {
    const id = userCtx.loggedUserId;
    const res = await fetchData(
      "/api/" + id,
      "GET",
      undefined,
      userCtx.accessToken
    );

    if (res.ok) {
      userCtx.setSmartCollection(res.data);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  // add new collection to the specific logged-in user
  const addNewCollection = async () => {
    const id = userCtx.loggedUserId;
    const res = await fetchData(
      "/api/" + id,
      "PUT",
      { q: newCollection },
      userCtx.accessToken
    );

    if (res.ok) {
      getCollectionByUserID();
      setNewCollection([]);
      alert(JSON.stringify(`Collection has been added.`));
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        {/*========== New Collection Input ==========*/}
        <TextField
          style={{ width: "30%" }}
          id="outlined-controlled"
          label="Add New Collection"
          value={newCollection}
          onChange={(event) => {
            setNewCollection(event.target.value);
          }}
        />
        <Button
          style={{ marginLeft: 5, height: "54px", backgroundColor: "black" }}
          size="large"
          variant="contained"
          onClick={addNewCollection}
        >
          Add
        </Button>
      </Box>
      <CardActions>
        <small>Edit Collection</small>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreOutlinedIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            {userCtx.smartCollection.map((item) => {
              return (
                <>
                  <label className="col-md-3">{item.q}</label>
                  <Button
                    className="col-md-2"
                    variant="contained"
                    style={{
                      marginLeft: 5,
                      height: "28px",
                      backgroundColor: "#1976D2",
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    className="col-md-2"
                    variant="contained"
                    style={{
                      marginLeft: 5,
                      height: "28px",
                      backgroundColor: "black",
                    }}
                  >
                    Delete
                  </Button>
                  <br />
                </>
              );
            })}
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};

export default SmartCollection;
