
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
     <View style={styles.Home1}>
          <Image style={styles.capaPLaylist} source={require('../assets/img/fav.png')} />
          <View style={styles.nomePlaylist}>
            <Text style={styles.textNomePlaylist}>Músicas curtidas</Text>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
 capaPLaylist:{
   width: 90,
   height: 90,
 },

 textNomePlaylist: {
    fontSize: 11,
    color: 'white',
    width: 90,
 },

});