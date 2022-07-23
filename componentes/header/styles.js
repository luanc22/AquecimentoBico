import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 20,
        height: '12%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: "center",
        backgroundColor: '#008000',
        position: "fixed",
        borderBottomWidth: 0.5,
    },
    titulo: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
    },
    bico: {
        fontWeight: 'bold',
        color: '#D4AF37',
    }
})

export default styles;