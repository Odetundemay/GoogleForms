import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default function PaymentDetails() {
  const router = useRouter()
  const nextPage = () => {
    //Submit
    router.push('/')
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Payment Details</Text>
      <Button onPress={nextPage} mode='contained'>
        Submit
      </Button>
    </View>
  )
}
