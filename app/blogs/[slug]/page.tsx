import SingleBlogPage from './SingleBlogPage';

const Page = ({ params }: { params: any }) => {
  const { slug } = params
  // console.log(slug,"slug")
  return (
    <div>
      <SingleBlogPage slug={slug} />
    </div>
  );
}

export default Page;
