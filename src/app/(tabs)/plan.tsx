import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Plan = () => {
  return (
    <SafeAreaView className={"flex-1 bg-background p-5"}>
      <Text>Plan</Text>
    </SafeAreaView>
  )
}

export default Plan