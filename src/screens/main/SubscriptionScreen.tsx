import { Box, Text } from '@app/theme';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';

const descriptions = [
  'Reach your goals with the complete Ad Astra experience',
  'Access the full meditation and sleeping tracks library',
  'Unlock all sections of the Journal',
  'Relax your eyes using our wonderful dark theme',
  'We plant a tree for every month of premium membership',
];

export default function SubscriptionScreen() {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="mainBackground" padding="m">
      <Text variant="title" textAlign="center" marginBottom="m">
        Try for 7 days Free!
      </Text>

      {descriptions.map((desc, i) => {
        return (
          <Box flexDirection="row" key={i} marginVertical="s">
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color={theme.colors.main}
              style={{ top: 3 }}
            />
            <Box flex={1} marginLeft="m">
              <Text>{desc}</Text>
            </Box>
          </Box>
        );
      })}

      {/* CARDS */}
    </Box>
  );
}
