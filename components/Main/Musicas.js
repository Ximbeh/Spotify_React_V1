
import { Text, View, StyleSheet, Image } from 'react-native';
import favIcon from '../../assets/img/fav.png'

export default function AssetExample() {
  return (
     <View style={styles.playlist}>
          <Image style={styles.capaPLaylist} source={favIcon} />
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