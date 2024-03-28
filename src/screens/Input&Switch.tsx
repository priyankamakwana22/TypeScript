import React, {useState} from 'react';
import {Alert, Button, Text, View, StyleSheet, TextInput, Switch} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const Input = () => {
  const [title, setTitle] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const handlePress = (title: string, msg: string) => {
    if(title === '' && msg === '')
    {
      Alert.alert('Error', 'No msg entered')
    }else{

      Alert.alert(title, msg);
    }
  };
  return (
    <View style={styles.cont}>
      <Text>Hello</Text>
      <TextInput style={styles.txtInput} placeholder="Enter title" value={title} onChangeText={(title) => setTitle(title)} />
      <TextInput style={styles.txtInput} placeholder="Enter msg" value={msg} onChangeText={(msg) => setMsg(msg)} />
      <Button title="Click here" onPress={() => handlePress(title, msg)} />
      <Switch
        trackColor={{ true: 'red', false: 'pink'}}
        thumbColor={isEnabled ? 'green' : 'blue'}
        value= {isEnabled}
        onValueChange={() => setIsEnabled(isEnabled => !isEnabled)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    cont: {alignItems: 'center', justifyContent: 'center', flex: 1, fontSize: 30},
    txt: {fontSize: 30},
    txtInput: {borderWidth: 1, borderColor: 'black', width: '80%', height: 50, borderRadius: 25, margin: 5, paddingLeft: 20},
});

export default Input;