import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

export default function PropertyList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties"
      );
      setData(res.data);
      setLoading(false);
    }
    getData();
  }, [toggle]);

  async function handleDelete(id) {
    setLoading(true);
    await axios.delete(
      `https://us-central1-real-estate-backend-8b77f.cloudfunctions.net/app/properties/${id}`
    );
    setToggle(!toggle);
  }

  if (!loading) {
    const propertyList = data.map((item) => {
      return (
        <ListItem key={item.id}>
          <ListItemText>{item.nickName}</ListItemText>
          <ListItemSecondaryAction>
            <ListItemIcon>
              <IconButton
                href={`/property_form/?id=${item.id}`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
    return (
      <>
        <h1>Properties</h1>
        <Divider variant="middle" />
        <List>{propertyList}</List>
      </>
    );
  } else {
    return <h1>Loading.....</h1>;
  }
}
