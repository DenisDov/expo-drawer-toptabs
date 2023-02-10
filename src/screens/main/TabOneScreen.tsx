import { FlashList } from '@shopify/flash-list';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ActivityIndicator, RefreshControl } from 'react-native';

import { PostItem } from '../../components/PostItem';

import {
  IPosts,
  addPost,
  getPosts,
  postsCacheKey,
} from '../../services/api/postsApi';

import { useRefreshByUser } from '../../hooks/useRefreshByUser';
import { useRefreshOnFocus } from '../../hooks/useRefreshOnFocus';
import { Box, Text } from '../../theme';

// import { generateFakePosts } from '../../utils/faker';

const TabOneScreen = () => {
  const queryClient = useQueryClient();
  // const placeholderData = useMemo(() => generateFakePosts(2), []);
  const {
    status,
    data: posts,
    error,
    isFetching, // for invalidate and refetch
    refetch,
  } = useQuery<IPosts, Error>({
    queryKey: [postsCacheKey],
    queryFn: getPosts,
    // placeholderData,
  });
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  useRefreshOnFocus(refetch);

  const addPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [postsCacheKey] });
    },
  });

  const handleAddPost = () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    addPostMutation.mutate(newPost);
  };

  return (
    <Box flex={1} backgroundColor="mainBackground">
      {status === 'loading' ? (
        <ActivityIndicator />
      ) : status === 'error' ? (
        <Text>Error: {error.message}</Text>
      ) : (
        // status === 'success'
        <FlashList
          data={posts}
          renderItem={PostItem}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefetchingByUser}
              onRefresh={refetchByUser}
            />
          }
        />
      )}
      <Text onPress={handleAddPost}>
        ADD POST
        {isFetching && ' Updating...'}
      </Text>
    </Box>
  );
};

export default TabOneScreen;
