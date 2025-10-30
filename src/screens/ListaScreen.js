import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { ProdutosContext } from "../components/ProdutosContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ListaScreen() {
  const {listaDeProdutos} = useContext(ProdutosContext)
  const navigation =useNavigation();

  const renderItem =({item}) =>(
    <TouchableOpacity
    style = {styles.itemContainer}
    onPress={()=>{navigation.navigate('Detalhes', {produto:item}); }}
    >
      <Text style={styles.produto}>Produto: {item.nome}</Text>
      <Text style={styles.precoproduto}>Preço R$: {item.preco.toFixed(2)}</Text>
      <Text style={styles.precoproduto}>Descrição: {item.descricao}</Text>
    </TouchableOpacity>
  );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Meus Produtos</Text>
        {listaDeProdutos.length >0?(
          <FlatList
          data={listaDeProdutos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}   
          />
        ):(
          <Text style={styles.noData}>Nenhum produto cadastrado!</Text>     
       )}
   
      </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10,
      backgroundColor: '#f0f0f0'
    },
    title:{
      fontWeight:'bold',
      marginBottom: 20,
      textAlign: 'center'
    },
    produto:{
      fontSize: 18,
      fontWeight: 'bold'
    },
    itemContainer:{
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderBottomWidth: 1,
      borderBlockColor: '#ccc'
    },
    precoproduto:{
      fontSize: 16,
      color: '#555',
      marginTop: 5
    },

    noData: {
      textAlign: 'center',
      fontSize: 16,
      color: 'black',
      marginTop: 50
    }

})