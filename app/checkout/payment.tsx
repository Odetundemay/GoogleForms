import { useRouter } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Button, Card, TextInput, useTheme, Checkbox } from 'react-native-paper'

export default function PaymentDetails() {
  const router = useRouter()
  const theme = useTheme()
  const nextPage = () => {
    //Submit
    router.push('/')
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
      <Card
        style={{
          backgroundColor: theme.colors.background
        }}
      >
        <Card.Title title={'Payment Details'} titleVariant='headlineLarge' />
        <Card.Content>
          <TextInput
            label={'Card Number'}
            placeholder='4242 4242 4242 4242'
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TextInput
              label={'Expiration Date'}
              placeholder={'MM/YYYY'}
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={'CVV Number'}
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <Checkbox.Item label='Save payment information ' status='checked' />
        </Card.Content>
      </Card>
      <Button onPress={nextPage} mode='contained'>
        Submit
      </Button>
    </ScrollView>
  )
}
