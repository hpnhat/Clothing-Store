import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardProduct = ({ products, filterKey }) => {
  const isotope = useRef(null);
  const [heart, setHeart] = useState({});

  const toggleHeart = (id) => {
    setHeart((prevHeart) => ({ ...prevHeart, [id]: !prevHeart[id] }));
  };

  useEffect(() => {
    isotope.current = new Isotope(".isotope-grid", {
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".isotope-item",
      },
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="row isotope-grid">
      {products.map((product,i) => (
        <div
          key={i}
          className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}`}
        >
          <div className="block2">
            <div className="block2-pic hov-img0">
              <img
                className="img-fluid"
                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/449837391_483532860714139_7889592723804709981_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFNQdTt_xIAHK61sa0npjLyx5vHvLOjDnrHm8e8s6MOemzxewpwl1slJC3EXGmP5CItlYUMfJ64jyE8Y7czR9pL&_nc_ohc=X6F00BYyEcYQ7kNvgGQpV7R&_nc_ht=scontent.fhan5-9.fna&oh=00_AYCN7y05Al-vsLpLTQrhD2qbKf3RPHBUvfYfjBdW-oavGg&oe=668AA196"
                alt="IMG-PRODUCT"
              />
              <a
                href="#"
                className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
              >
                Quick View
              </a>
            </div>
            <div className="block2-txt flex-w flex-t p-t-14">
              <div className="block2-txt-child1 flex-col-l">
                <Link
                  to={`${product.slug}`}
                  className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                >
                  {product.name}
                </Link>
                <span className="stext-105 cl3">${product.price}</span>
              </div>
              <div className="block2-txt-child2 flex-r p-t-3">
                <button onClick={() => toggleHeart(product.id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      fontWeight: 900,
                      color: heart[product.id] ? "red" : "#dadada",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default CardProduct;
