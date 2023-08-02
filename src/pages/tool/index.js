import RootLayout from "@/components/layouts/RootLayout";
import { removeCart } from "@/redux/cart/cartSlice";
import { Avatar, Button, Divider, List, Result, message } from "antd";
import Card from "antd/es/card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function PCBuilder() {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.cart);
  const total = data.reduce((a, b) => a + Number(b.price), 0);
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info(
      <Result
        status="success"
        title="Successfully Builded a Computer"
        subTitle={`Build number: 2017182818828182881. Total Amount: ${total}`}
      />
    );
    dispatch(removeCart());
  };
  return (
    <Card
      style={{
        maxWidth: "800px",
        margin: "20px auto",
      }}
      title="PC Builder ( You can select a total of four items )"
      actions={[
        data.length > 5 && (
          <>
            {contextHolder}
            <Button
              onClick={info}
              style={{
                width: "70%",
              }}
              key={""}
              type="primary"
              block>
              Add a Builder
            </Button>
          </>
        ),
      ]}>
      <List
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar size={50} src={item?.image_url} />}
              title={
                <Link href={`/products/${item?._id}?filter=full`}>
                  {item?.title}
                </Link>
              }
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
      {data.length < 6 ? (
        <Button type="dashed" block>
          <Link href={"/products"}>Choose</Link>
        </Button>
      ) : (
        <List>
          <List.Item>
            <List.Item.Meta
              title="Total Amount"
              description="This build computer with a high level of performance as compared to a general-purpose computer."
            />

            <p
              style={{
                fontWeight: 600,
                fontSize: "20px",
                marginRight: "20px",
              }}>
              {" "}
              <span> {total}৳</span>
            </p>
          </List.Item>{" "}
        </List>
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
