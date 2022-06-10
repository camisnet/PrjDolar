
import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Api from './components/Api';
import Cotacao from './components/Cotacao';

const image = { uri: "https://i.pinimg.com/474x/ca/90/40/ca9040228a6fd2539246c15d03561777.jpg" };

export default function App() {
  const[real, setReal] = useState("");

  async function ParaReal(){
    const response = await Api.get('json/last/USD-BRL');
    setReal(response.data.USDBRL);
}

  return (
    <View style={styles.container}>
      <ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
      <View style={styles.bloco}>
        <Text style={styles.txt}>Cotação de Moedas</Text>
      
        <TouchableOpacity
          style={styles.botao}
          onPress={ParaReal}
        >
          <Text style={styles.txtBotao}> Dólar para real </Text>
        </TouchableOpacity>


        <Cotacao data ={real} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloco: {
    width:'100%',
    alignItems: 'center',
  },
  texto:{
    fontSize:20,
    color: '#fff'
  },
  input:{
    width:'80%',
    marginLeft:'10%',
    borderColor: 'purple',
    borderBottomWidth:2,
    marginTop: 20,
    fontSize: 30
  },
  botao:{
    width:'80%',
    fontSize: 30,
    marginTop:30,
    color: '#8b008b'
  },
  txtBotao:{
    fontSize:20,
    textAlign:'center',
    color: '#fff'
  },
  txt:{
    fontSize:20,
    textAlign:'center',
    color: '#fff'
  },
});     