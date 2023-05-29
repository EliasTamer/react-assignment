import { useState } from "react";
import ListItem from "../ListingItem/ListingItem";
import { Row, Col } from "react-bootstrap";
import "./ListingHolder.scss";

const ListingHolder = ({ data, title }) => {
  const [visibleItems, setVisibleItems] = useState(8);
  return (
    <div className="listing-holder">
      <Row>
        <Col md={8}>
          <div className="list-items">
            <h1> {title}</h1>

            {data?.length > 0 ? (
              <>
                <Row>
                  {data
                    ?.slice(0, visibleItems)
                    .map(({ title, price, quantity, id, image, category }) => {
                      return (
                        <Col md={3} key={id}>
                          <ListItem
                            id={id}
                            key={id}
                            title={title}
                            price={price}
                            quantity={quantity}
                            image={image}
                            category={category}
                          />
                        </Col>
                      );
                    })}
                </Row>
                {visibleItems < data.length && (
                  <div className="load-more-holder">
                    <button
                      className="load-more"
                      onClick={() => {
                        setVisibleItems(visibleItems + 8);
                      }}
                    >
                      Load more
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p> There are currently no items Available.</p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ListingHolder;
