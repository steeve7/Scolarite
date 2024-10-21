import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Here will be the content for the blog post "{slug}".</p>
    </div>
  );
};

export default BlogPost;
