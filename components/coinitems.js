import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';


const CoinItems = ({ coin })=>{

  return(
  	<View style{style.container}>
      <View style={styles.containerNames}>
                     <Image  source={{uri: item.image}} style={{height: 30, width: 30}}/>
                     <Text style={styles.text}>{item.name}</Text>
                     <Text style={styles.textprice}>${item.current_price}</Text>
                  </View>
                  </View>


  )
}


const styles = StyleSheet.create({
 container: {
 	backgroundColor: "#121212",
 	paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerNames: {
    flexDirection: "row",
    paddingTop: 10,
  },

  text: {
     color: "#fff",
  },

  textprice: {

  	fontBold: "bold",
  	color: "#fff",
  },

})

export default CoinItems