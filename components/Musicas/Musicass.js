import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
              style={[styles.background]}
              source={require('./assets/img/Background.png')}
            />


      <View style={styles.Header}>
      <Image
  style={[styles.IconeHeader, styles.Image]}
  source={require('./assets/img/Down.png')}
/>
        <View style={styles.HeaderTexto}>
          <Text style={[styles.textoHeader, styles.textoHeader1]}>TOCANDO DO ARTISTA</Text>
          <Text style={styles.textoHeader}>Joey Pecoraro</Text>
        </View>
        <Image
          style={[styles.IconeHeader, styles.Image, styles.Rotate]}
          source={require('./assets/img/OptionsIcon.png')}
        />
      </View>
      <View style={styles.CapaView}>

      <Image
        style={[styles.Capa]}
        source={require('./assets/img/CapaMusica.jpg')}
      />
      </View>
     



      <View style={styles.player}>
        <View style={styles.playerHeader}>

          <View style={styles.Nomes}>
          <View style={styles.textoMusica}>
            <Text style={styles.textoNomeMusica}>Your Favourite Place</Text>
            <Text style={styles.textoAutorMusica}>Joey Pecoraro</Text>
          </View>
          <Image
            style={[styles.Image, styles.IconePlayerHeader]}
            source={require('./assets/img/Heart.png')}
          />

          </View>
          

          <View style={styles.playerPlayer}>
            <View style={styles.linhas}>
                <View style={[styles.linha, { backgroundColor: '#f1f1f1', height: 3 }]} />
                <Image
                      style={[styles.Image, styles.bolinha]}
                      source={require('./assets/img/Circulo.png')}
                    />
  
              <View style={[styles.linha, { backgroundColor: '#bbbbbb', height: 3 }]} />
            </View>
            
          </View>
          

          <View style={styles.tempos}>
            <Text style={styles.tempoAtual}>1.44</Text>
            <Text style={styles.tempoAtual}>3:41</Text>
          </View>
        </View>

        <View style={styles.playerButtons}>
          <Image
            style={[styles.Image, styles.ButtonPlayer]}
            source={require('./assets/img/Random.png')}
          />
          <Image
            style={[styles.Image, styles.ButtonPlayer]}
            source={require('./assets/img/Previous.png')}
          />
          <Image
            style={[styles.Image, styles.ButtonPlay]}
            source={require('./assets/img/Play.png')}
          />
          <Image
            style={[styles.Image, styles.ButtonPlayer]}
            source={require('./assets/img/Next.png')}
          />
          <Image
            style={[styles.Image, styles.ButtonPlayer]}
            source={require('./assets/img/Repeat.png')}
          />
        </View>

        <View style={styles.footer}>
          <Image
            style={[styles.ButtonFooter1]}
            source={require('./assets/img/Device.png')}
          />

          <View style={styles.Rightfooter}>
            <Image
              style={[styles.ButtonFooter2]}
              source={require('./assets/img/Share.png')}
            />
            <Image
              style={[styles.ButtonFooter3]}
              source={require('./assets/img/Queue.png')}
            />
          </View>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  Image: {
    width: 25,
    height: 25,
  },

 


  player: {
    marginLeft: 20,
    marginRight: 20,
  },

  Nomes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoNomeMusica: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textoAutorMusica: {
    color: '#bbbbbb',
    fontSize: 16,
  },

  IconePlayerHeader: {
    width: 27,
    height: 23,
  },

  bolinha: {
    width: 9,
    height: 10,
    position: 'absolute',
    left: '47%',
    top: -2.5,
  },

  linhas: {
    flexDirection: 'row',
  },

  linha: {
    width: '50%',
    borderRadius: 50,
  },

  tempos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  tempoAtual: {
    color: '#bbbbbb',
    fontSize: 13
  },

  playerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  ButtonPlay: {
    width: 55,
    height: 55,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  Rightfooter: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },

  ButtonFooter1: {
    width: 18.5,
    height: 18,
  },
  ButtonFooter2: {
    width: 16,
    height: 17,
  },
  ButtonFooter3: {
    width: 19,
    height: 20,
    marginLeft: 30,
  },


  










  

  CapaView: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 70,
  },

  Capa: {
    width: 335,
    height: 335,

  },

  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,

  },

  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 15,
  },

  HeaderTexto:{
    textAlign: 'center',

  },

  textoHeader:{
    color: '#f1f1f1',
    fontSize: 14,
    fontWeight: 'bold'
    
  },

  textoHeader1: {
    fontSize: 9,
    fontWeight: '400',
    color: '#bbbbbb'
  },

  Rotate: {
    transform: [{ rotate: '90deg' }]
  },

});
