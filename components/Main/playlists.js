
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
     <View style={styles.playlist}>
          <Image style={styles.capaPLaylist} source={require('../assets/img/fav.png')} />
          <View style={styles.nomePlaylist}>
            <Text style={styles.textNomePlaylist}>Músicas Curtidas</Text>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
 capaPLaylist:{
   width: 50,
   height: 50,
 },

 playlist:{
   backgroundColor: '#2a2a2a',
   width: 170,
   marginLeft: 20,
   marginBottom: 8,
   borderRadius: 5,
   overflow: 'hidden',
   flexDirection: 'row',
   alignItems: 'center',
   height: 50,
 },

 textNomePlaylist: {
   color: '#f1f1f1',
   fontSize: 11,
   marginLeft: 5,
 },
});