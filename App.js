import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function App() {
  const [activity, setActivity] = useState("");

  const fetchActivity = async () => {
    try {
      const response = await axios.get(
        "https://www.boredapi.com/api/activity/"
      );
      setActivity(response.data.activity);
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.Title}>BoredomBuddy</Text>
        <Text style={styles.SubTitle}>Banish Boredom, Embrace Adventure!</Text>
        <Image style={styles.mascot} source={require("./assets/mascot.png")} />
        <Text style={{ ...styles.SubTitle, fontSize: 18, marginTop:20 }}>
          Hello!{"\n"}Here is your task.
        </Text>
        <View style={styles.activityContainer}>
          <Text style={styles.Task}>"{activity}"</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={fetchActivity}>
          <Text style={{ fontSize: 18, color: "aliceblue", fontWeight: "500" }}>
            Get New Activity
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="aliceblue" barStyle={"dark-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    marginTop:25,
    height: 150,
    width: 150,
  },
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    boxSizing: "borderBox",
    width: "100%",
    paddingVertical: 50,
  },
  Title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1e2227",
  },
  SubTitle: {
    fontSize: 14,
    fontWeight: "300",
    color: "#2c2e33",
    textAlign: "center",
  },
  Task: {
    marginVertical: "10%",
    fontSize: 24,
    width: "95%",
    textAlign: "center",
    height: "auto",
    fontWeight: "300",
  },
  Button: {
    backgroundColor: "#9D8DF1",
    height: 50,
    width: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation:2
  },
  activityContainer:{
    width:'90%',
    height:300,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start'
  }
});
