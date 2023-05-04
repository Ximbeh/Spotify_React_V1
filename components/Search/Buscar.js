import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import Tocando from './components/tocando.js';

export default function App() {
  return (



    <View style={styles.container}>
      <View style={styles.container2}>

      <View style={styles.Header}>
        <Text style={styles.textHeader}>Buscar</Text>
        <Image
          source={require('./assets/camera.png')}
          style={styles.HeaderIcon}
        />
      </View>

      <View style={styles.pesquisa}>
        <Image
          source={require('./assets/Search.png')}
          style={styles.pesquisaIcon}
        />
        <TextInput style={styles.textoPesquisa} placeholder="Artistas, músicas ou podcasts" />
      </View>

        <Text style={styles.browseText}>Navegar por todas as seções</Text>


       
    <View style={styles.topicholder}>


        <View style={styles.column}>
          <TouchableOpacity style={[styles.card1, {backgroundColor: '#1D9BF6'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Podcasts</Text>
          <Image source={require('./assets/balela.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#C96827'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Feito para você</Text>
            <Image source={require('./assets/madeforyou.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#212655'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Brasil</Text>
            <Image source={require('./assets/brazil.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#AB9762'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Funk</Text>
              <Image source={require('./assets/brazilfunk.png')} style={styles.cardImg} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.card1, {backgroundColor: '#A76FAE'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Paradas</Text>
            <Image source={require('./assets/charts.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#1D9BF6'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Podcasts</Text>
          <Image source={require('./assets/balela.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#C96827'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Feito para você</Text>
            <Image source={require('./assets/madeforyou.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#212655'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Brasil</Text>
            <Image source={require('./assets/brazil.png')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#AB9762'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Funk</Text>
              <Image source={require('./assets/brazilfunk.png')} style={styles.cardImg} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.card1, {backgroundColor: '#A76FAE'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Paradas</Text>
            <Image source={require('./assets/charts.png')} style={styles.cardImg} />
          </TouchableOpacity>

        </View>


        <View style={styles.column}>
          <TouchableOpacity style={[styles.card1, {backgroundColor: '#591B89'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Eventos ao vivo</Text>
            <Image source={require('./assets/LiveEvents.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#2C8B2C'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Lançamentos</Text>
            <Image source={require('./assets/newreleases.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#1B544E'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Sertanejo</Text>
            <Image source={require('./assets/sertanejo.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#9A1D68'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Pop</Text>
            <Image source={require('./assets/pop.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#C1C136'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Hip-Hop</Text>
            <Image source={require('./assets/hiphop.jpg')} style={styles.cardImg} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card1, {backgroundColor: '#591B89'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Eventos ao vivo</Text>
            <Image source={require('./assets/LiveEvents.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#2C8B2C'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Lançamentos</Text>
            <Image source={require('./assets/newreleases.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#1B544E'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Sertanejo</Text>
            <Image source={require('./assets/sertanejo.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#9A1D68'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Pop</Text>
            <Image source={require('./assets/pop.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card1, {backgroundColor: '#C1C136'}]}>
            <Text style={[styles.cardtxt, {color: '#fff'}]}>Hip-Hop</Text>
            <Image source={require('./assets/hiphop.jpg')} style={styles.cardImg} />
          </TouchableOpacity>

      </View>
    </View>

    <Tocando />
      
    <View style={styles.footer}>
        <View style={styles.footerButton}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/home.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Início</Text>
          </View>
        </View>

        <View style={styles.footerButton}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/search-click.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Buscar</Text>
          </View>
        </View>

        <View style={[styles.footerButton, { marginLeft: -15 }]}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/library.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Sua Biblioteca</Text>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'left',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#121212',
  },
  container2: {
    marginLeft: 10,
    marginRight: 10,
  },


  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },

  textHeader: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 23,
  },

  HeaderIcon: {
    width: 23,
    height: 20,
  },

  textoPesquisa: {
    marginLeft: 35,
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 15
  },

  pesquisa: {
    backgroundColor: '#fff',
    borderRadius: 4,
    width: '100%',
    height: 40,
    justifyContent: `center`,
  },  

  pesquisaIcon: {
    width: 20,
    height: 19,
    position: 'absolute',
    left: 7,
  },

  browseText: {
    color: 'white',
    fontSize: 16,
    fontWeight: `bold`,
    marginBottom: 15,
    marginTop: 15,
  },



  topicholder: {
    flex: 2,
    flexDirection: 'row',
  },
  column: {
    justifyContent: 'space-between',
    alignItems:'center',
    margin: 7,
  },

  card1: {
    width: 167,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 15,
    borderRadius: 6,
    overflow: 'hidden',

  },

  cardtxt: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    left: 5,
    fontSize: 15,
    width: 100,
  },

  cardImg:{
    width: 75,
    height: 75,
    right: -15,
    bottom: 0,
    borderRadius: 10,
    position: 'absolute',
    transform: [{ rotate: '30deg' }],
  },

  

  img: {
    flexDirection: 'row',
    marginTop: 25,

  },

  Tocando: {
    width: '110%'
  },

  footer: {
    flexDirection: 'row',
    position: 'Fixed',
    bottom: 0,
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
    width: '100%',
    height: 66,
    alignItems: 'Center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  footerButton: {
    alignItems: 'Center',
  },

  ButtonIcon: {
    width: 22,
    height: 20,
  },

  textButton: {
    color: '#f1f1f1',
    fontSize: 12,
    
  },
 
});
