import React from "react";
import { Container, Menu, Header as Heading } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const activeItem = useLocation().pathname;

  return (
    <Menu inverted>
      <Container>
        <Menu.Item header>
          <Heading as="h3" color="orange">
            OUR COMPANY
          </Heading>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/sales/1"
          name="sales"
          active={activeItem === "/sales"}
        >
          Продажа
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/rent"
          name="rent"
          active={activeItem === "/rent"}
        >
          Аренда
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={activeItem === "/about"}
        >
          О компании
        </Menu.Item>
      </Container>
    </Menu>
  );
};
