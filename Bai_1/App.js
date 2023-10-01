import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}> </View>
      <View style={styles.view2}>
        <View>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>GROW</Text>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>YOUR BUSINESS</Text>
        </View>
        <View>
          <Text style={{top: "100px", fontWeight:"bold", width:"300px" , height:"36px", color:"#000000" }}>We will help you to grow your business using online server</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}><button style={styles.button1}> Login</button></View>
        <View style={styles.view4}><button style={styles.button1} > Sign Up</button></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    display: "flex",
    backgroundColor: "#4dd2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex: 3,
    marginTop:"70px",
    width: "150px",
    height: "300px",
    top : "30px",    
    borderColor: "#000000",
    borderWidth: "20px",
    borderRadius: "50%",
  },
  view2: {
    flex: 4,
    top : "80px",
  },
  view3: {
    flex:"4",
    marginTop:"150px",
    flexDirection: "row",
    justifyContent: "space-around",
  }, 
  button1:{
    backgroundColor:"#E3C000",
    color:"#333",
    fontWeight: "bold",
    fontSize:"20px",
    width:"119px",
    height:"48px",
    borderRadius:"15px",
    margin:"25px",
    textTransform:"uppercase",
    border:"none",
  }
});