import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    card:{ 
        flexDirection: 'row',
        backgroundColor: '#EEF5DB',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20
    },
    texts:{
        marginLeft: 30
    },
    groupText:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 'auto'
    },
    title:{
        color: '#2A2B26',
        fontWeight: '700',
        fontSize: 27
    },
    text:{
        color: '#74776D',
        fontSize: 14
    },
    smallText:{
        color: '#2A2B26',
        fontSize: 10,
        marginLeft: 3
    },
    pink:{
        color: '#FE6A78',
        fontWeight: '400'
    },
    book:{
        marginLeft: 20,
        transform: [{scale: 1.5}]
    }
});