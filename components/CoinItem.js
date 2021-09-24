import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';


const CoinItem = ({ coin })=>{

  return(
  	<View style={styles.container}>
      <View style={styles.containerNames}>
                     <Image  source={{uri: coin.image}} style={{height: 30, width: 30}}/>
                     <Text style={styles.text}>{coin.name}</Text>
                  </View>
                  <Text style={styles.textprice}>${coin.current_price}</Text>
                  </View>


  )
}


const styles = StyleSheet.create({
 container: {
 	backgroundColor: "#121212",
 	paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerNames: {
    flexDirection: "row",
  },

  text: {
     color: "#fff",
  },

  textprice: {

  	fontBold: "bold",
  	color: "#fff",
    marginLeft: 40,

  },

})

export default CoinItem