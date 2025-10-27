import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { ProdutosContext } from "../components/ProdutosContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ListaScreen() {
  const {listaDeProdutos} = useContext(ProdutosContext)
  const navigation =useNavigation

  const renderItem =({item}) =>(
    <TouchableOpacity
    onPress={()=>{navigation.navigate('Detalhes', {produto:item}); }}
    >
      <Text>Produto: {item.nome}</Text>
      <Text>Preço R$: {item.preco.toFixed(2)}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </TouchableOpacity>
  );

    return (
      <View>
        <Text>Meus Produtos</Text>
        {listaDeProdutos.length >0?(
          <FlatList
          data={listaProdutos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}   
          />
        ):(
          <Text>Nenhum produto cadastrado!</Text>     
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
  
}

  })