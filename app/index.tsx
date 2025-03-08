import CameraPan from "./FilScn";
import { registerRootComponent } from 'expo';
import { View, StyleSheet } from 'react-native';

function App() {
  return  (<View style={styles.container}>
    <CameraPan />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

registerRootComponent(App);