import { useRouter } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Button, Card, TextInput, useTheme } from 'react-native-paper'

export default function PersonalDetails() {
  const router = useRouter()
  const theme = useTheme()
  const nextPage = () => {
    router.push('/checkout/delivery')
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
        <Card.Title title='Personal Information' titleVariant='headlineLarge' />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label='Name'
            placeholder='Name'
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={'Email'}
            placeholder='hey@gmail.com'
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Button mode='contained' onPress={nextPage}>
        Next
      </Button>
    </ScrollView>
  )
}
