import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    card:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#00173D',
        padding: 15,
        borderRadius: 5,
        marginRight: 10
    },
    groupText:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 'auto'
    },
    title:{
        color: '#FEFEFE',
        fontWeight: '700',
        fontSize: 27
    },
    text:{
        color: '#E7E7E1',
        fontSize: 14
    },
    smallText:{
        color: '#E7E7E1',
        fontSize: 10,
        marginLeft: 3
    },
    strong:{
        color: '#E7E7E1',
        fontSize: 10,
        fontWeight: '400'
    },
    book:{
        borderRadius: 4,
        marginLeft: 50
    }
});