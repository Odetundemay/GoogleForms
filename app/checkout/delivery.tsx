import { useState } from 'react'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
  Checkbox
} from 'react-native-paper'

export default function DeliveryDetails() {
  const [shipping, setShipping] = useState('free')

  const router = useRouter()
  const theme = useTheme()
  const nextPage = () => {
    router.push('/checkout/payment')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 600,
        alignSelf: 'center',
        flex: 1,
        width: '100%'
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={'Delivery Info'} titleVariant='headlineLarge' />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={'City'}
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder='Your answer'
            label={'Postal Code'}
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={'Address'}
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={'Shipping Options'} titleVariant='headlineLarge' />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            value={shipping}
            onValueChange={(value) => setShipping(value)}
          >
            <RadioButton.Item label='Free' value='free' />
            <RadioButton.Item label='Fast' value='fast ' />
            <RadioButton.Item label='Same day' value='same' />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode='contained'>
        Next
      </Button>
    </ScrollView>
  )
}
