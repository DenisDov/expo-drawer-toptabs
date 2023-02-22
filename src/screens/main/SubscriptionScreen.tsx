import { Box, Text } from '@app/theme';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { Button, StyleSheet } from 'react-native';

import SegmentedControl from '@app/components/Segmented';

const descriptions = [
  'Reach your goals with the complete Ad Astra experience',
  'Access the full meditation and sleeping tracks library',
  'Unlock all sections of the Journal',
  // 'Relax your eyes using our wonderful dark theme',
  // 'We plant a tree for every month of premium membership',
];

export default function SubscriptionScreen() {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="mainBackground" padding="m">
      <Box flex={1}>
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

        {/* <Box flexDirection="row">
        <Box style={styles.box}>
          <Text style={styles.count}>1</Text>
          <Text style={styles.month}>month</Text>
        </Box>
        <Box style={styles.box}>
          <Text style={styles.count}>6</Text>
          <Text style={styles.month}>months</Text>
        </Box>
        <Box style={styles.box}>
          <Text style={styles.count}>12</Text>
          <Text style={styles.month}>months</Text>
        </Box>
      </Box> */}

        {/* SEGMENT */}
        <Box marginVertical="xl">
          <SegmentedControl />
        </Box>

        <Box marginBottom="l">
          <Text textAlign="center" fontSize={12}>
            Try 7 days for free - after $6.99/1 month.
          </Text>
          <Text textAlign="center" fontSize={12}>
            Billed monthly. Cancel anytime.
          </Text>
        </Box>

        <Box>
          <Button title="Continue" />
        </Box>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text fontSize={12}>Terms & Conditions</Text>
        <Text fontSize={12}>Privacy Policy</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'hsl(211, 100%, 50%)',
    padding: 16,
  },
  count: {
    fontSize: 34,
    color: '#ffc96c',
  },
  month: {
    color: '#F0F2F3',
  },
});
