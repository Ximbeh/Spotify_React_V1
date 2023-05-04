

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
      <TouchableOpacity style={styles.tocando} onPress={()=>poses.navigation.navigate("Home1")}>
          <Image style={styles.capaMusicaTocando} source={require('../assets/img/fav.png')} /> 

          <View style={styles.textosTocando}>
              <View style={styles.NomeMusica}>
                  <Text style={styles.NomeMusicaTexto}>Your Favorite Place</Text>
            </View>

            <View style={styles.AutorMusica}>
                <Text style={styles.AutorMusicaTexto}>Joey Pecoraro</Text>
            </View>
          </View>
  
           <View style={styles.iconesBotoes}> 
              <Image style={styles.botoesIcone} source={require('../assets/img/Select.png')} /> 
              <Image style={styles.botoesIcone} source={require('../assets/img/Heart.png')} /> 
              <Image style={styles.botoesIcone} source={require('../assets/img/Play.png')} /> 
           </View>
          </TouchableOpacity>
  );
}


const styles = StyleSheet.create({


  iconesBotoes: {
      flexDirection: 'row',
      position: 'Fixed',
      right: 5,
  },

  botoesIcone: {
    width: 27,
    height: 23,
    marginLeft: 15,

  },


  tocando: {
    width: '90%',
    backgroundColor: '#2a2a2a',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    height: 60,
    borderRadius: 5,
    position: 'Fixed',
    bottom: 95,
    right: '49%',
    transform: [{translateX: '50%'}, {translateY: '50%'}]
    
  },

  textosTocando: {
    
  },

  capaMusicaTocando:{
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },

  NomeMusicaTexto: {
    fontSize: 16,
    color: '#f1f1f1',
  },

   AutorMusicaTexto: {
    fontSize: 15,
    color: '#b3b3b3',
  },

});