import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

const employeeURL = "http://dummy.restapiexample.com/api/v1/employees";
const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(employeeURL)
     .then((response)=> response.json())
     .then((json) => {
        setStatus(json.status);
       setData(json.data);
       setMessage(json.message);
      })
         .finally(setLoading(false));
  });

  return( 
  <SafeAreaView style={styles.container}>
     {isLoading ? (
       <ActivityIndicator />
     ):(
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={{ marginBottom: 12}}></View>
     <FlatList 
         data={data}
         keyExtractor={({id }, index) => id}
         renderItem={({item}) =>(
         
         <View style={{ paddingBottom: 5}}>
         <Text style={styles.employeeText}>
           {item.id}. 
           {item.employee_name},
           {item.employee_salary},
           {item.employee_age}
           {item.profile_image}
        </Text>
        </View>
       )}
     />
     <Text style={styles.message}>{message}</Text>
     </View>
     
     )}
     

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor:'black',
    flex: 1,
    alignItems: 'center',
    marginTop:48,
  
  },
  employeeText:{
    fontSize: 15,
    fontWeight: "900",
    fontWeight: "normal",
    color:"orange",
  },
  status: {
    fontSize: 25,
    fontWeight: "bold",
    color:"red",

  },
  message: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "200",
    color:"green",
  },
});
export default App;