import Head from 'next/head';

const PostHead = ({ post }) => {
  return (
    <Head>
      <meta name="title" content={`View ${post.title} on Mirerse`} />
      <meta
        name="description"
        content="Discover creative websites and developers across the globe."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://Mirerse.com/posts/${post._id}`}
      />
      <meta property="og:title" content={`View ${post.title} on Mirerse`} />
      <meta
        property="og:description"
        content="Discover creative websites and developers across the globe."
      />
      <meta property="og:image" content={post.images[0]} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://Mirerse.com/posts/${post._id}`}
      />
      <meta
        property="twitter:title"
        content={`View ${post.title} on Mirerse`}
      />
      <meta
        property="twitter:description"
        content="Discover creative websites and developers across the globe."
      />
      <meta property="twitter:image" content={post.images[0]} />
    </Head>
  );
};

export default PostHead;
