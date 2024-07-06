import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../../../data.example";
import Description from "./Description/Description";
import Infomation from "./Information/Information";
import Reviews from "./Reviews/Reviews";

const InfomationStructure = [
  {
    label: "Description",
    link: "#description",
  },
  {
    label: "Additional information",
    link: "#additional-information",
  },
  {
    label: "Reviews",
    link: "#reviews",
  },
];

const DetailProduct = () => {
  const [activeTab, setActiveTab] = useState("#description");
  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  const renderContent = () => {
    switch (activeTab) {
      case "#description":
        return <Description />;
      case "#additional-information":
        return <Infomation />;
      case "#reviews":
        return <Reviews />;
      default:
        return <Description />;
    }
  };

  useEffect(() => {
    setActiveTab("#description");
  }, []);

  return (
    <div className="animsition ">
      {/* breadcrumb */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-80 p-lr-0-lg">
          <Link to={"/"} className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
            Men
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </a>
          <span className="stext-109 cl4">{product.name}</span>
        </div>
      </div>

      <>
        {/* Product Detail */}
        <section className="sec-product-detail bg0 p-t-65 p-b-60">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots" />
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">
                      <div className="item-slick3">{/* Image */}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>
                  <span className="mtext-106 cl2">$58.79</span>
                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 ">
                          <div
                            className="d-flex flex-wrap align-items-center  overflow-auto"
                            style={{
                              flexBasis: "515px",
                              maxHeight: "220px",
                              maxWidth: "515px",
                            }}
                          >
                            {product?.size.map((s, i) => (
                              <button
                                key={i}
                                className="btn btn-outline-secondary  me-2 mb-0"
                                aria-label={s}
                                aria-disabled="false"
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 ">
                          <div
                            className="d-flex flex-wrap align-items-center mt-1 overflow-auto"
                            style={{
                              flexBasis: "515px",
                              maxHeight: "220px",
                              maxWidth: "515px",
                            }}
                          >
                            {product?.color.map((c, i) => (
                              <button
                                key={i}
                                className="btn btn-outline-secondary  me-2 mb-0"
                                aria-label={c}
                                aria-disabled="false"
                              >
                                {c}
                              </button>
                            ))}
                          </div>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue={1}
                          />
                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button
                          style={{ minWidth: 128 }}
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bor10 m-t-50 p-t-43 p-b-40">
              {/* Tab01 */}
              <div className="tab01">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                  {InfomationStructure.map((value, i) => (
                    <li key={i} className="nav-item p-b-10">
                      <button
                        className={`nav-link ${
                          activeTab === value.link ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(value.link)}
                        role="tab"
                      >
                        {value.label}
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Tab panes */}
                <div className="tab-content p-t-43">
                  <div className="tab-pane fade show active" role="tabpanel">
                    {renderContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
            <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>
            <span className="stext-107 cl6 p-lr-25">
              Categories: Jacket, Men
            </span>
          </div>
        </section>
      </>
    </div>
  );
};

export default DetailProduct;
