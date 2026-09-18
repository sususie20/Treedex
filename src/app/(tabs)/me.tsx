import {View, Text} from 'react-native'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Me = () => {
  return (
    <SafeAreaView className={"flex-1 bg-background p-5"}>
      <Text>Me</Text>
    </SafeAreaView>
  )
}

export default Me