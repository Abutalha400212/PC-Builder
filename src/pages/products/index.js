import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

export default function Products({ products }) {
  const { pathname } = useRouter();

  return (
    <Row
      style={{
        placeContent: "center",
        padding: 10,
      }}
      gutter={24}>
      {products?.map((news) => (
        <Col
          xl={6}
          lg={8}
          md={8}
          sm={24}
          xs={24}
          key={news._id}
          className="gutter-row">
          <ProductCard news={news} pathname={pathname} />
        </Col>
      ))}
    </Row>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:3000/api/products"); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      products: data?.data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
  };
};

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
