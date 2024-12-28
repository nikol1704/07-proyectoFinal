import Icon from '@react-native-vector-icons/ionicons';

interface Props {
    name: any,
    size?: number,
    color?: string
}

export const IonIcon = ({ name, size = 25, color = 'black' }: Props) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}
