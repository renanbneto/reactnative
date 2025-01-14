import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function App() {
  const [produto, setProduto] = useState('')
  const [produtos, setProdutos] = useState([])
  const [mensagem, setMensagem] = useState('Tela inicial')

  const adicionar = () => {
    setProdutos([...produtos, { id: produtos.length + 1, nome: produto }])
    setProduto('')
    setValorProduto([...valorproduto, { id: valorproduto.length + 1, nome: valor }])
    setValor('')
    setDescricaoProduto([...descricaoproduto, { id: descricaoproduto.length +1, nome: descricao }]
    setDescricao('')
    )
  }

  const remover = (id) => {
    setProdutos(produtos.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Lista de produtos</Text>
      <TextInput style={styles.input}

        placeholder='digite o Nome do Produto'
        value={produto}
        onChangeText={text => setProduto(text)}

        placeholder='digite o Valor do Produto'
        value={valor}  
        onChangeText={text => setValor(text)}

        placeholder='digite uma Descrição'
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />


      <TouchableOpacity style={styles.btnAdd} onPress={adicionar}>
        <Text style={styles.btnAddText} >Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.nome}</Text>
            <TouchableOpacity onPress={() => remover(item.id)} >
              <Icon name="trash" size={20} color="#ff6347" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    marginBottom: 10
  },
  btnAdd: {
    backgroundColor: '#a9a9a9',
    alignItems: 'center'

  },
  btnAddText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});