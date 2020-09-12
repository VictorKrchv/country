import React from "react";
import styles from "./sales.module.css";
import { Card, GridColumn, Image } from "semantic-ui-react";

export const SalesItem = ({ item, setModalItem }) => {
  
  const images = item.images.filter((img) => {
    return img.id.includes("PR");
  });
  const src = images.length
    ? `https://images.jqestate.ru/${images[0].id}-jqestate-2048`
    : `https://via.placeholder.com/290x192`;

  console.log('render')

  return (
    <GridColumn>
      <Card>
        <Image onClick={setModalItem} className={styles.img} src={src} />
        <Card.Content>
          <Card.Meta>
            <span className="date">
              {item.location
                ? `${item.location.countryName}, ${item.location.districtName}, `
                : null}
            </span>
            ID: {item.id}
          </Card.Meta>
          <Card.Header>
            Цена:{" "}
            {item.rentOffer
              ? `${item.rentOffer.price} ${item.rentOffer.currency}`
              : "Договорная"}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          Площадь: {item.specification.area ? item.specification.area : "___"}{" "}
          <b>
            м<sup>2</sup>{" "}
          </b>
        </Card.Content>
      </Card>
    </GridColumn>
  );
};
