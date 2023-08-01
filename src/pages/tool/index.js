import RootLayout from "@/components/layouts/RootLayout";
import { Avatar, Button, List } from "antd";
import Card from "antd/es/card/Card";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function PCBuilder() {
  const data = useSelector((state) => state.cart);

  return (
    <Card
      title="PC Builder ( You can select a total of four items )"
      actions={[
        data.length >= 4 && (
          <Button
            style={{
              width: "70%",
            }}
            key={""}
            type="primary"
            block>
            Create a Computer
          </Button>
        ),
      ]}>
      <List
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar size={50} src={item?.image_url} />}
              title={item?.title}
              description={
                <div>
                  <p>
                    {item?.description?.length > 100
                      ? item?.description.slice(0, 60) + "..."
                      : item?.description}
                  </p>
                </div>
              }
            />
            <p
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginRight: "20px",
              }}>
              Price: {item?.price}৳
            </p>
          </List.Item>
        )}
      />
      {data.length < 4 && (
        <Button type="dashed" block>
          <Link href={"/products"}>Choose</Link>
        </Button>
      )}
    </Card>
  );
}

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

{
  /* <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                alt="sub"
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
              />
            }
            title="CPU"
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Button>
            <Link href={"/products?title=CPU"}>Choose</Link>
          </Button>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                alt="sub"
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
              />
            }
            title="Ram"
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Button>
            <Link href={"/products?title=Ram"}>Choose</Link>
          </Button>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                alt="sub"
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
              />
            }
            title="Monitor"
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Button>
            <Link href={"/products?title=Monitor"}>Choose</Link>
          </Button>
        </List.Item> */
}
