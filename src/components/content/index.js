import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Sales } from "./sales/sales";
import { About } from "./about/about";
import { Rent } from "./rent/rent";

export const Content = () => {
  return (
    <main>
      <Container>
        <Route path="/sales/:id">
          <Sales />
        </Route>
        <Route path="/rent">
          <Rent />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Container>
    </main>
  );
};
