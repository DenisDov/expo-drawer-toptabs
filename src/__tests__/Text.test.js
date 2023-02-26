import * as React from 'react';
import { render } from '@app/utils/test-utils';

import { Text } from '@app/theme';

test('renders correctly', () => {
  const tree = render(<Text>Snapshot test!</Text>);
  expect(tree);
});
