"use client";
import { Row, Col, Typography, Layout, Menu, Dropdown, Button } from "antd";
import { MenuOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  console.log(session);
  return (
    <Row>
      <Col xl={24} lg={24} md={8} sm={24} xs={24}>
        <Header className="header-fixed">
          <Row>
            <Col xl={4} lg={7} md={8} sm={10} xs={10}>
              <Link href={"/"}>
                <Image
                  src={"/images/logo.svg"}
                  alt=""
                  width={150}
                  height={60}
                />
              </Link>
            </Col>
            <Col xl={16} lg={10} md={8} sm={4} xs={4}>
              <Menu
                theme="dark"
                mode="horizontal"
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
              </Menu>
            </Col>
            <Col xl={4} lg={7} md={8} sm={10} xs={10}>
              <Button
                style={{
                  margin: "5px",
                  marginRight: "10px",
                }}
                type="primary">
                <Link type="button" href={"/tool"}>
                  PC Builder
                </Link>
              </Button>
              {session?.user?.name && (
                <Button
                  onClick={() => signOut()}
                  title="Logout"
                  type="default"
                  icon={<LogoutOutlined />}
                />
              )}

              {!session?.user?.name && (
                <Link
                  title="Login"
                  type="button"
                  style={{
                    fontSize: "20px",
                    color: "blueviolet",
                  }}
                  href={"/login"}>
                  <Button icon={<LoginOutlined />} />
                </Link>
              )}
            </Col>
          </Row>
        </Header>
      </Col>
    </Row>
  );
}
