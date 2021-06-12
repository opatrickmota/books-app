import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 30
    },
    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FDFCFC',
        borderRadius: 10,
        padding: 10
    },
    searchIcon:{
        transform: [{scaleX: -1}]
    },
    searchInput:{
        color: '#54565A',
        marginLeft: 5,
        width: '100%'
    },
    title:{
        marginTop: 30,
        color: '#54565A',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15
    },
    textPink:{
        color: '#FE6A78'
    }
});