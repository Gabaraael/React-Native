import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FuchsiaButton({text, route}) {

    const navigation = useNavigation();
    
    function handleRoute (route) {
        navigation.navigate(route)
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress= { () => handleRoute(route)}>
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
      button: {
        borderRadius: 50,
        paddingVertical: 10,
        margin: 5,
        alignSelf: 'center',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF00FF'
    },
    textButton: {
        color: 'black'
    }
});