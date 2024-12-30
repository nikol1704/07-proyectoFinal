import Icon from '@react-native-vector-icons/ionicons';
import { TextStyle } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

interface Props {
  name: any,
  size?: number,
  color?: string,
  style?: StyleProp<TextStyle>
}

export const IonIcon = ({ name, size = 25, color = 'black', style }: Props) => {
  return (
    <Icon name={name} size={size} color={color} style={style} />
  )
}
