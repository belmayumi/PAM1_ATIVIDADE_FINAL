import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const produtos = [
  {
    codigo_produto: 1,
    codigo_categoria: 1,
    nome_produto: 'All Of Us Are Dead',
    autor_produto: 'Lee Jae-kyoo; Kim Nam-su',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/all_of_us_are_dead.png'),
    descricao_produto: 'Os alunos presos devem escapar da escola, que se tornou o marco zero para um surto de vírus zumbi.'
  },
  {
    codigo_produto: 2,
    codigo_categoria: 2,
    nome_produto: 'Big Mouse',
    autor_produto: 'Oh Chung-hwan',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/big_mouth.png'),
    descricao_produto: 'Preso em um caso de assassinato, um advogado de baixo desempenho é considerado o notório vigarista Big Mouse.'
  },
  {
    codigo_produto: 3,
    codigo_categoria: 3,
    nome_produto: 'Attorney Woo',
    autor_produto:'Yoo In-shik',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/extraordinary_attorney_woo.png'),
    descricao_produto: 'Woo Young Woo é uma jovem advogada com autismo. Ela possui um QI alto, uma memória impressionante e um processo de pensamento maravilhosamente criativo, mas tem dificuldade com as interações cotidianas.'
  },
  {
    codigo_produto: 4,
    codigo_categoria: 4,
    nome_produto: 'Island',
    autor_produto:'Park Kwang-hyun',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/island.png'),
    descricao_produto: 'Situado na Ilha de Jeju, três pessoas lutam contra o mal que está tentando destruir o mundo. Van foi criado para proteger o mundo contra o mal. Ele treinou para se tornar uma arma. Ele agora luta contra o mal e mata vítimas possuídas.'
  },
  {
    codigo_produto: 5,
    codigo_categoria: 2,
    nome_produto: 'Mouse',
    autor_produto: 'Choi Joon-bae',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/mouse.png'),
    descricao_produto: 'Jeong Ba-reum, um policial dedicado, enfrenta uma experiência que mudará sua vida quando se depara com um psicopata devastando a cidade ao lado de seu parceiro Go Moo-chi.'
  },
  {
    codigo_produto: 6,
    codigo_categoria: 4,
    nome_produto: 'Moving',
    autor_produto:'Park In-je',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/moving.png'),
    descricao_produto: 'Três adolescentes que herdaram os superpoderes de seus pais. Quando uma onda de assassinatos ameaça Seul, eles precisam parar de esconder suas habilidades e entrar em ação.'
  },
  {
    codigo_produto: 7,
    codigo_categoria: 4,
    nome_produto: 'My Name',
    autor_produto:'Kim Jin-min',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/my_name.png'),
    descricao_produto: 'Yoon ji-woo, uma mulher que, após presenciar o assassinato do pai, busca vingança a todo custo. Ela deposita sua confiança em um chefão do crime organizado da Córeia do Sul que promete justiça a ela.'
  },
  {
    codigo_produto: 8,
    codigo_categoria: 1,
    nome_produto: 'Sweet Home',
    autor_produto:'Lee Eung-bok',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/sweet_home.png'),
    descricao_produto: 'Quando humanos viram monstros selvagens e espalham o terror, um jovem atormentado e seus vizinhos de apartamento lutam para sobreviver sem perder a humanidade.'
  },
  {
    codigo_produto: 9,
    codigo_categoria: 3,
    nome_produto: 'The Glory',
    autor_produto:'hn Gil-ho',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/the_glory.png'),
    descricao_produto: 'Uma mulher que sofreu com bullying escolar e agora, já adulta, dedica a sua vida a se vingar de todos que lhe fizeram mal no passado.'
  },
  {
    codigo_produto: 10,
    codigo_categoria: 2,
    nome_produto: 'Unlocked',
    autor_produto:'Kim Tae-joon, Tae-joon Kim',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/unlocked.png'),
    descricao_produto: 'Lee Na-mi, uma mulher que tem a sua vida transformada em um caos quando um homem perigoso acha seu celular perdido e o usa para rastrear todos os seus passos.'
  },
  {
    codigo_produto: 11,
    codigo_categoria: 4,
    nome_produto: 'Vincenzo',
    autor_produto:'Kim Hui-won',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/vincenzo.png'),
    descricao_produto: 'Vincenzo é um anti-herói que inicia sua jornada focado em alcançar seus objetivos financeiros e, no meio do caminho, nutre empatia pelos menos favorecidos. Junto com a cômica advogada Hong Cha-yeong, eles planejam destruir o corrupto grupo Babel, com métodos dentro e fora da lei.'
  },
  {
    codigo_produto: 12,
    codigo_categoria: 3,
    nome_produto: 'Youth Of May',
    autor_produto:'Kim Sang-hwi',
    valor_produto: '30,00',
    imagem_dorama: require('../assets/imagens/doramas/youth_of_may.png'),
    descricao_produto: 'Hwang Hee Tae é um jovem, aspirante a médico, que odeia tudo o que é previsível. Cansado de sua vida e impactado por um acontecimento que o traumatizou durante um dos protestos contra o governo, ele decide voltar para sua cidade natal onde conhece Kim Myung Hee, uma jovem enfermeira bastante esforçada.'
  },
];

const doramaItem = ({ item }) => {
  return (
    <View style={styles.dorama_container}>

      <Image style={styles.dorama_image} source={item.imagem_dorama} />

      <View style={styles.dorama_text_container}>

        <Text style={styles.dorama_data}>{item.nome_produto}</Text>
        <Text style={styles.autor_produtos}>{item.autor_produto}</Text>
        <View style={styles.valorContainer}>
          <Text style={styles.current}>R$</Text>
          <Text style={styles.dorama_data}>{item.valor_produto} </Text>
        </View>
 

        <TouchableOpacity style={styles.dorama_button_details}>
          <Text style={styles.dorama_button_text}>Detalhes</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
}

export default function Produtos() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={doramaItem}
        ListEmptyComponent={<Text>A lista de doramas está vazia</Text>}
        keyExtractor={produtos => produtos.codigo_produto}
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
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#222222',
  },
  dorama_image: {
    width: 150,
    height: 220,
    marginRight: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  dorama_text_container: {
    width: '55%',
    justifyContent: 'center',
  },
  autor_produtos: {
    fontSize: 13,
    fontWeight: '600',
    width: '100%',
    textAlign: 'left',
    color: 'white',
    marginLeft: 20,
    marginTop:5,
    marginBottom: 5,
    fontFamily: 'Roboto_300Light',
  },
  valorContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20
  },
  current: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: -15,
    color: '#FFDF00',
    fontFamily: 'Roboto_400Regular',
  },
  dorama_data: {
    fontSize: 20,
    fontWeight: '600',
    width: '100%',
    textAlign: 'left',
    color: 'white',
    marginLeft: 20,
    fontFamily: 'Roboto_400Regular',
  },
  dorama_author: {
    fontSize: 14,
    fontWeight: '400',
    width: '100%',
    textAlign: 'left',
    color: '#CCC',
    marginBottom: 10,

  },
  dorama_button_details: {
    alignItems: 'center',
    backgroundColor: '#6300A9',
    padding: 10,
    marginTop: 70,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
  },
  dorama_button_text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto_400Regular',
  },
});