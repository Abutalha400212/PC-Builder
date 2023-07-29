import { Row, Col, Typography, Layout, Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const { Header, Content } = Layout;
const { Title } = Typography;
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        CPU/Processor
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        Motherboard
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        RAM
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        Power Supply Unit
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        Storage Device
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        Monitor/ Display
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        Others
      </a>
    ),
  },
];
export default function Navbar() {
  return (
    <Row justify="center">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Header className="header-fixed">
          <Row>
            <Col xl={12} lg={12} md={12} sm={20} xs={20}>
              <Link href={""}>
                <Image
                  src={"/images/logo.svg"}
                  alt=""
                  width={150}
                  height={60}
                />
              </Link>
            </Col>
            <Col xl={12} lg={12} md={12} sm={4} xs={4}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["item1"]}
                overflowedIndicator={<MenuOutlined />}>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Menu.Item
                    style={{ fontSize: "15px", fontWeight: 500 }}
                    key="item1">
                    Desktop
                  </Menu.Item>
                </Dropdown>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Menu.Item
                    key="item2"
                    style={{ fontSize: "15px", fontWeight: 500 }}>
                    Laptop
                  </Menu.Item>
                </Dropdown>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Menu.Item
                    key="item3"
                    style={{ fontSize: "15px", fontWeight: 500 }}>
                    Phone
                  </Menu.Item>
                </Dropdown>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Menu.Item
                    key="item4"
                    style={{ fontSize: "15px", fontWeight: 500 }}>
                    Mac
                  </Menu.Item>
                </Dropdown>

                <Menu.Item style={{ fontSize: "15px", fontWeight: 500 }}>
                  <Link
                    type="button"
                    style={{
                      margin: "5px",
                    }}
                    href={""}>
                    PC Builder
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </Col>
    </Row>
  );
}
