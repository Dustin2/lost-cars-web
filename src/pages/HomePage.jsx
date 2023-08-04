import React, { useState, useEffect } from "react";

//components
import CustomButton from "../componets/Button/CustomButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

//firebase
import { database } from "../../Firebase/Config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
function HomePage() {
  useEffect(() => {
    const collectionRef = collection(database, "actas");
    const q = query(collectionRef, orderBy("colony", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setActa(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          colony: doc.data().colony,
          date: doc.data().date,
          typeVehicle: doc.data().typeVehicle,
          plaque: doc.data().plaque,
          color: doc.data().color,
          colorAvatar: doc.data().colorAvatar,
          description: doc.data().description,
          createdDoc: doc.data().createdDoc,
        }))
      );
    });
    return unsubscribe;
  }, []);
  const [acta, setActa] = useState([]);
  console.log(acta);
  return (
    <div className="home-container">
      <List>
        {acta.map((acta) => {
          return (
            <ListItem key={acta.id}>
              <Avatar sx={{ bgcolor: acta.colorAvatar }}>
                {acta.name[0] + acta.name[1]}
              </Avatar>

              <ListItemText primary={acta.name} style={{ marginLeft: 15 }} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default HomePage;
