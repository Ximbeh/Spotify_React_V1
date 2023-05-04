
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
     <View style={styles.playlist}>
          <Image style={styles.capaPLaylist} source={require('../assets/img/fav.png')} />
          <View style={styles.nomePlaylist}>
            <Text style={styles.textNomePlaylist}>Músicas curtidas</Text>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
 capaPLaylist:{
   width: 120,
   height: 120,
 },

 textNomePlaylist: {
    fontSize: 15,
    color: 'white',
    width: 90,
 },

});