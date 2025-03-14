import Blog from "../../components/Blog/Blog";
import { Helmet } from "react-helmet-async";

function BookPage() {
  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - Blog</title>
      </Helmet>
      <Blog />
    </>
  );
}

export default BookPage;
