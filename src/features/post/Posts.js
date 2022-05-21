import React from 'react';
import { useGetHeadlinesQuery } from '../../services/posts';

const Posts = () => {
  const {
    data: headlines,
    error,
    isLoading,
    isFetching,
  } = useGetHeadlinesQuery(3, { refetchOnMountOrArgChange: true });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Oh no, there was an error</>;
  if (!headlines) return <>Missing headlines.</>;

  return (
    <div className='text-cyan-700 m-4'>
      <h1 className='text-xl font-semibold'>RTK Query Posts</h1>
      {headlines.map((headline) => (
        <div className='' key={headline.id}>
          <h3>
            {headline.title}
            {isFetching ? '...refetching' : ''}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Posts;
