import React from "react";
import styles from "./sales.module.css";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export const ItemModal = ({ item, open, close }) => {
  const images = item.images.filter((img) => {
    return img.id.includes("PR");
  });
  const src = images.length
    ? `https://images.jqestate.ru/${images[0].id}-jqestate-2048`
    : `https://via.placeholder.com/640x247`;


  return (
    <Modal open={open}>
      <Modal.Header>House Info</Modal.Header>
      <Modal.Content image>
        <Image className={styles.modal_img} size="big" src={src} wrapped />
        <Modal.Description>
          <Header>{item.kind}</Header>

          <p>ID: {item.id}</p>
          <p>
            {item.location.countryName}, {item.location.districtName}
          </p>

          {item.specification.area ? (
            <p>
              Площадь: {item.specification.area} м<sup>2</sup>
            </p>
          ) : null}

          {item.specification.bedrooms ? (
            <p>Спальных комнат: {item.specification.bedrooms}</p>
          ) : null}

          {item.specification.builtYear ? (
            <p>Построено в {item.specification.builtYear} году. </p>
          ) : null}

          {item.specification.floors ? (
            <p>Этажей: {item.specification.floors}</p>
          ) : null}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={close}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
