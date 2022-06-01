import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function AppIcon({
  name,
  backgroundColor = '#000',
  iconColor = '#fff',
  size = 40
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}
