import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categorias = [
  {
    codigo_categoria: 1,
    nome_categoria: 'Terror',
    observacoes_categoria: 'Doramas de gênero terror.',
    imagem_icone: require('../assets/imagens/icones/terror_icone.png')
  },
  {
    codigo_categoria: 2,
    nome_categoria: 'Investigação',
    observacoes_categoria: 'Doramas de gênero investigação',
    imagem_icone: require('../assets/imagens/icones/investigação_icone.png')
  },
  {
    codigo_categoria: 3,
    nome_categoria: 'Romance',
    observacoes_categoria: 'Doramas de gênero romance',
    imagem_icone: require('../assets/imagens/icones/romance_icone.png')
  },
  {
    codigo_categoria: 4,
    nome_categoria: 'Ação',
    observacoes_categoria: 'Doramas de gênero Ação',
    imagem_icone: require('../assets/imagens/icones/ação_icone.png')
  },
];

const doramaItem = ({ item }) => {
  return (
    <View style={styles.dorama_container}>
      <View style={styles.dorama_text_container}>
        <Text style={styles.dorama_data}>{item.nome_categoria}</Text>
        <Image style={styles.icone_imagem} source={item.imagem_icone} />
        <TouchableOpacity style={styles.dorama_button_details}>
          <Text style={styles.dorama_button_text}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Categoria() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={doramaItem}
        ListEmptyComponent={<Text>A lista de doramas está vazia</Text>}
        keyExtractor={categorias => categorias.codigo_categoria}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dorama_container: {
    flex: 1,
    flexDirection: 'row',
    padding: 25,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#222222',
    marginTop: 13
  },
  dorama_text_container: {
    width: 200,
    justifyContent: 'center',
  },
  dorama_data: {
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Roboto_400Regular',
  },
  icone_imagem: {
    width: 150,
    height: 220,
    marginTop: 10,
    marginLeft: 25
  },
  dorama_button_details: {
    alignItems: 'center',
    backgroundColor: '#6300A9',
    padding: 10,
    marginTop: 15,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 30,
  },
  dorama_button_text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto_400Regular',
  },
});