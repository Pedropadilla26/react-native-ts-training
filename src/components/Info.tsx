import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Section } from './Section'

const RootStack = createNativeStackNavigator<RootStackParamList>()

type RootStackParamList = {
  Info: { name: string }
}

type infoProps = NativeStackScreenProps<RootStackParamList, 'Info'>

export const InfoScreen = ({ route, navigation }: infoProps) => {
  return (
    <Section title={route.params.name}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Section>
  )
}
