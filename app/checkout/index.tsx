import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function PersonalDetails() {
  return (
    <View>
      <Text style={{ fontSize: 60 }}>Personal Details</Text>

      <Link href={'/checkout/delivery'}>Next</Link>
    </View>
  )
}
