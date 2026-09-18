import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Contacts = () => {
  return (
    <SafeAreaView className={"flex-1 bg-background p-5"}>
      <Text>Contacts</Text>
    </SafeAreaView>
  )
}

export default Contacts