"use client";
import { Card, Carousel, Col, Row, Typography } from "antd";
import lottieJSON from "@/assets/build.json";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <Card>
      <Row gutter={[24]}>
        <Col
          style={{
            display: "grid",
            placeContent: "center",
          }}
          xl={10}
          lg={10}
          sm={16}>
          <Player
            autoplay
            loop
            src={lottieJSON}
            style={{
              height: "300px",
              width: "300px",
              margin: "auto auto",
            }}>
            <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </Col>
        <Col
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          xl={14}
          lg={14}
          sm={8}>
          <h1
            style={{
              textAlign: "center",
              fontSize: 20,
            }}>
            This is Leading PC Retail & Online Shop in Bangladesh
          </h1>
          <p style={{}}>
            Technology has become a part of our daily lives, and we depend on
            tech products daily for a vast portion of our lives. There is hardly
            a home in Bangladesh without a tech product. This is where we come
            in. Misssile Ltd.
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default HeroSection;
