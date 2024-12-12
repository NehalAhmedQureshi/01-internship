
export async function generateMetadata({ params }) {
  // console.log("🚀 ~ generateMetadata ~ params:",await params)
  const post = await params.slug;
  console.log("🚀 ~ generateMetadata ~ post:", post)

  if (!post) {
    return {
      title: '404 - Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: post,
    description:'you are on the correct way'
  };
}

// Blog post page component
export default async function BlogPost({ params }) {
  const post = await params.slug;

  return (
    <article>
      <h1>{post}</h1>
    </article>
  );
}
