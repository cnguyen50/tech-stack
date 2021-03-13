import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyles, labelStyles, containerStyle } = styles
  return (
    <View styles={containerStyle}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={palceholder}
        autoCorrect={false}
        style={inputStyles}
        value ={value}
        onChangeText={onChangeText}
        style-={{ height:20, width: 100 }}
      />
    </View>
  )
}

const styles = {
  inputStyles: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input }