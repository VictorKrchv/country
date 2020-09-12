import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { clearData, getSalesList } from "../../../redux/root-reducer";
import { Grid, Loader, Pagination } from "semantic-ui-react";
import { SalesItem } from "./sales-item";
import styles from "./sales.module.css";
import { ItemModal } from "./item-modal";

export const Sales = () => {
  const dispatch = useDispatch();
  const page = useParams().id;
  const history = useHistory();

  const isLoading = useSelector((state) => state.root.isLoading);
  const items = useSelector((state) => state.root.items);
  const limit = useSelector((state) => state.root.pagination.limit);
  const total = useSelector((state) => state.root.pagination.total);

  useEffect(() => {
    dispatch(getSalesList(page, limit));
    return () => {
      dispatch(clearData());
    };
  }, [dispatch, page, limit]);

  const handlePageChange = (e, { activePage }) => {
    return history.push(`/sales/${activePage}`);
  };

  const totalPages = Math.ceil(total / limit);

  const [modalItem, setModalItem] = useState(null);

  return (
    <div>
      {modalItem && (
        <ItemModal
          open={!!modalItem}
          close={() => setModalItem(null)}
          item={modalItem}
        />
      )}
      {totalPages ? (
        <Pagination
          activePage={page}
          totalPages={totalPages}
          className={styles.pagination}
          onPageChange={handlePageChange}
          ellipsisItem={null}
        />
      ) : null}
      {isLoading ? (
        <Loader active />
      ) : (
        <Grid columns={3}>
          {items.map((item) => (
            <SalesItem
              setModalItem={() => setModalItem(item)}
              key={item.id}
              item={item}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};
