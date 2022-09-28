import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      tempo: 0,      
      textoBotao: 'Ligar',
      botaoZerar: 'Salvar e Zerar',
      txtmemoria1: '',
      txtmemoria2: '',
      txtmemoria3: '',
      txtmemoria4: '',
      
    }
    this.liga = this.liga.bind(this)
    this.idTimer = null
  }

  liga(){  //  id  setInterval ( metodo a ser exectado ) , intervalo de tempo em milisegundos
          //  clearInterval (id)
    if (this.idTimer != null){  
      clearInterval(this.idTimer)
      this.idTimer = null      
      this.setState({textoBotao: 'Ligar' })
    }else{
      this.setState({textoBotao: 'Pausar' })      
      this.setState({botaoZerar: 'Salvar e Zerar'})
      this.idTimer = setInterval(() => {this.setState({tempo: this.state.tempo + 1})} , 1000)
    }    
  }  

  zerar(){
    if (this.state.tempo != 0){                  
      this.setState({
        textoBotao: 'Ligar',        
        botaoZerar: 'Zerar',
        txtmemoria1: 'N° Registro',
        txtmemoria2: '01',
        txtmemoria3: 'Tempo',         
        txtmemoria4 : this.state.tempo,        
        tempo: 0,
       })
      clearInterval(this.idTimer)
      this.idTimer = null   

    }else{
      this.setState({textoBotao: 'Ligar'})
      this.setState({txtmemoria1: ''})
      this.setState({txtmemoria2: ''})
      this.setState({txtmemoria3: ''})
      this.setState({txtmemoria4: ''})                 
    }  
  }
  

  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, margin:40}}> Loja de esportes</Text>
        <Text style={{fontSize: 50, color: 'black', margin: 10}}>Cronômetro</Text>
        <Text style={{fontSize: 100}}>{this.state.tempo}s</Text> 
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={this.liga}>
              <Text style={estilo.botao}>{this.state.textoBotao}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.zerar()}>
              <Text style={estilo.botao}>{this.state.botaoZerar}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={estilo.botao2}>
            <Text>{this.state.txtmemoria1}</Text>
            <Text>{this.state.txtmemoria2}</Text>
          </View>    
        
          <View style={estilo.botao2}>
            <Text style={{alignItems: 'flex-end'}}>{this.state.txtmemoria3}</Text>
            <Text>{this.state.txtmemoria4}</Text>
          </View> 
        </View>
      </View>
    )
  }
}

const estilo = StyleSheet.create({
  botao: {
    fontSize: 25,
    width: 170,
    alignItems: 'center',
    color: 'black',
    margin: 10,
    padding: 4,
    borderWidth: 1,         
    borderColor: 'black',
    textAlign: 'center',    
  },

  botao2: {    
    width: 170,
    margin: 10,
    padding: 10,            
  }
})