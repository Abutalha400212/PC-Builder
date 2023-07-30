import { Card, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Space, Tag } from "antd";
export default function ProductCard({ news }) {
  const { Meta } = Card;

  return (
    <Card
      style={{
        position: "relative",
        width: { lg: 280 },
        margin: 5,
      }}
      hoverable
      cover={
        <Image
          style={{
            objectFit: "contain",
          }}
          src={news?.image_url}
          width={200}
          height={200}
          responsive
          alt="news image"
        />
      }>
      <Tag
        style={{
          position: "absolute",
          top: "45%",
          right: 20,
        }}
        color="#87d068">
        In Stock
      </Tag>

      <Meta
        title={
          <Link
            style={{
              textDecoration: "underline",
            }}
            href={`/products/${news?._id}`}>
            {news?.title}{" "}
          </Link>
        }
        description={
          news?.description?.length > 100
            ? news?.description.slice(0, 60) + "..."
            : news?.description
        }
      />

      <div
        className="line"
        style={{
          height: "2px",
          margin: "10px 0",
          background: "#000",
          width: "100%",
        }}></div>
      <Space
        wrap
        size={[0, 8]}
        style={{
          marginBottom: "8px",
        }}>
        <Tag color="blue" style={{ fontSize: "10px", color: "black" }}>
          Category: {news?.category}
        </Tag>
        <Tag color="yellow" style={{ fontSize: "10px", color: "black" }}>
          Price: {news?.price}৳
        </Tag>
        <Tag color="red" style={{ fontSize: "10px", color: "black" }}>
          Reg. Price: {news?.regular}৳
        </Tag>
      </Space>
      <br />

      <span>
        <Rate
          style={{
            fontSize: "14px",
          }}
          disabled
          value={news?.rating}
        />
        <span
          style={{
            color: "gray",
            fontSize: "14px",
          }}>
          {" "}
          (Out of 5 Stars)
        </span>
      </span>
    </Card>
  );
}
