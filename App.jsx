import React from 'react';
import Counter from './src/screens/Counter';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </View>
  );
};

export default App;

// import React from 'react';
// import Input from './src/screens/Input&Switch';
// import {
//   Dimensions,
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const {width, height} = Dimensions.get('screen');

// const App = () => {
//   return (
//     <View>
//       <ImageBackground
//         resizeMode="stretch"
//         style={styles.img}
//         source={{
//           uri: 'https://media.istockphoto.com/id/1623303770/photo/creative-background-image-is-blurred-evening-city-lights-and-light-snowfall.jpg?b=1&s=612x612&w=0&k=20&c=--I6QisPR7yGmgujOI2co8U3FIK5tBv6xAjMup67ghc=',
//         }}>
//         <Text style={styles.txt}>Hello</Text>
//       </ImageBackground>
//       {/* <Text>Image Example</Text> */}
//       {/* <Image style={styles.img} source={require('./src/assets/bg.jpeg')}  /> */}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {alignItems: 'center', justifyContent: 'center', flex: 1},
//   txt: {fontSize: 20, fontWeight: 'bold'},
//   img: {height: height, width: width},
// });
