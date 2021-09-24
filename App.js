import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import CoinItem from "./components/CoinItem";

const App = () =>{

const [coins, setCoins] = useState([])


const Getdata = async () =>{


   const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   const json = await res.json();
   setCoins(json)

}

 useEffect(()=>{
 
     Getdata()
},[])

	return(
		
		<View style={styles.container}>
			<Text style={styles.title}>CryptoStatus</Text>
     	<FlatList 
          data={coins}
          renderItem={({ item }) =>  {
          	return <CoinItem coin={item} />
          	}}
          	
     	/>
     </View>
  
    )
}

const styles = StyleSheet.create({
 container: {
 	backgroundColor: "#141414",
 	alignItems: "center",
  },

  title: {
  	color: "#fff",
  	fontSize: 20,
  }

})



export default App;