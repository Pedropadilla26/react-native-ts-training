import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const Section: React.FC<{
  title: string
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        Learn about
        <Text
          style={[
            styles.sectionTitleBolder,
            {
              color: isDarkMode ? '#D1EBFF' : '#0A1172',
            },
          ]}
        >
          {title}
        </Text>
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionTitleBolder: {
    fontSize: 24,
    fontWeight: '900',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})
