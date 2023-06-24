import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default function DeliveryDetails() {
  const router = useRouter()
  const nextPage = () => {
    console.log('Hello from delivery')
    router.push('/checkout/payment')
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Delivery Details</Text>

      <Button onPress={nextPage} mode='contained'>
        Next
      </Button>
    </View>
  )
}
