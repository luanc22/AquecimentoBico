import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
    },
    tela: {
        flex: 1
    },
    box: {
        height: '100%',
    },
    boxBotoes: {
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    botoes: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#008000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textobotao: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#008000',
        overflow: 'hidden',
        padding: 10,
    },
    subtitle: {
        marginTop: 50,
        marginBottom: 30,
        padding: 10,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        marginBottom: 25,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
});

export default styles;