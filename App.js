
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Touchable } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
  const[cep, setCep] = useState("");
  const[inputCep, setInputCep] = useState(0);
  
  async function buscaCep(){
  const response = await Api.get('ws/'+inputCep+'/json/');
 setCep(response.data);

}

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.txt}>Cotação de Moedas</Text>
        

 
       
        <TouchableOpacity
          style={styles.botao}
          onPress={buscaCep}
        >
          <Text style={styles.txtBotao}> Dólar para real </Text>
        </TouchableOpacity>


        <Cep data ={cep} />
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
    borderBottomColor:'#8b008b'
  },
  txtBotao:{
    fontSize:20,
    textAlign:'center'
  },
  txt:{
    fontSize:20,
    textAlign:'center'
  },
});     