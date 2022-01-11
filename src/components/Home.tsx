import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Section} from './Section';

type RootStackParamList = {
  Home: undefined;
};

type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: homeProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title=" making a mobile app"/>
          <View style={styles.buttonContainer}>
            <Button
              color="#3B5360"
              title="Learn about react-native"
              onPress={() => navigation.navigate('Info', {name: ' react-native'})}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              color="#11324D"
              title="Learn about typescript"
              onPress={() => navigation.navigate('Info', {name: ' typescript'})}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              color="#5E454B"
              title="Learn about expo"
              onPress={() => navigation.navigate('Info', {name: ' expo'})}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
});