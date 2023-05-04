
import { StyleSheet, Text, View, Image } from 'react-native';

import Playlists from './components/Main/playlists.js';
import Tocando from './components/Main/tocando.js';
import Musicas from './components/Main/Musicas.js';
git init

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>Boa tarde</Text>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icone}
            source={require('./assets/img/notifica.png')}
          />
          <Image
            style={styles.icone}
            source={require('./assets/img/Relogio.png')}
          />
          <Image
            style={styles.icone}
            source={require('./assets/img/Config.png')}
          />
        </View>
      </View>
      <View style={styles.header2}>
        <View style={styles.textHeader2}>
          <Text style={styles.text}>Musíca</Text>
        </View>
        <View style={[styles.textHeader2, { marginLeft: 10 }]}>
          <Text style={styles.text}>Podcast e programas</Text>
        </View>
      </View>
      <View style={styles.playlists}>
        <View style={styles.playlist}>
          <Playlists />
        </View>

        <View style={[styles.playlist, {  marginLeft: -10 }]}>
          <Playlists />
        </View>

        <View style={styles.playlist}>
          <Playlists />
        </View>

        <View style={[styles.playlist, {  marginLeft: -10}]}>
          <Playlists />
        </View>

        <View style={styles.playlist}>
          <Playlists />
        </View>

        <View style={[styles.playlist, { marginLeft: -10 }]}>
          <Playlists />
        </View>
      </View>

      <View style={styles.tocados}>
        <View style={styles.Titulo}>
          <Text style={styles.textTocados}>Tocados recentemente</Text>
        </View>
        <View style={styles.playlistsTocados}>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
        </View>
      </View>

      <View style={styles.tocados}>
        <View style={styles.Titulo}>
          <Text style={styles.textTocados}>Músicas baixadas</Text>
        </View>
        <View style={styles.playlistsTocados}>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
        </View>
      </View>

      <View style={styles.tocados}>
        <View style={styles.Titulo}>
          <Text style={styles.textTocados}>Músicas baixadas</Text>
        </View>
        <View style={styles.playlistsTocados}>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
          <View style={styles.playlistTocados}>
            <Musicas />
          </View>
        </View>
      </View>

      <Tocando />

      <View style={styles.footer}>
        <View style={styles.footerButton}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/img/HomeOpen.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Início</Text>
          </View>
        </View>

        <View style={styles.footerButton}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/img/Search.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Buscar</Text>
          </View>
        </View>

        <View style={[styles.footerButton, { marginLeft: -15 }]}>
          <Image
            style={styles.ButtonIcon}
            source={require('./assets/img/Playlist.png')}
          />
          <View style={styles.textIconButton}>
            <Text style={styles.textButton}>Sua Biblioteca</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  footer: {
    flexDirection: 'row',
    position: 'Fixed',
    bottom: 0,
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    width: '100%',
    height: 65,
    alignItems: 'Center',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },

  footerButton: {
    alignItems: 'Center',
  },

  ButtonIcon: {
    width: 25,
    height: 23,
  },

  textButton: {
    color: '#f1f1f1',
    fontSize: 13,
    
  },

  tocados: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  playlistsTocados: {
    flexDirection: 'row',
  },

  playlistTocados: {
    marginRight: 15,
  },

  textTocados: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },




  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItens: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    // position: 'absolute',
    // top: 25,
  },

  textoHeader: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 22,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    width: 25,
    height: 24,
    marginHorizontal: 15,
    marginRight: 0,
  },

  header2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  textHeader2: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    backgroundColor: '#2a2a2a',
    borderRadius: 25,
    marginLeft: 0,
    height: 30,
    
  },

  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },

  playlists: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function Auth(props){

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
          <Stack.Screen name = "Welcome" components = {Welcome}/>
          <Stack.Screen name = "HomeScreen" components = {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

