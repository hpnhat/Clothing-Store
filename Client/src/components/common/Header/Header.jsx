import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../../hooks/useScrollPosition";
import useOutsideClick from "../../../hooks/useOutsideClick";

const Header = () => {
  useScrollPosition();
  const [open, setOpen] = useState(null);
  const sectionRef = useRef(null);

  useOutsideClick(sectionRef, () => {
    if (open) setOpen(null);
  });

  const handleToggle = (section) => {
    setOpen((prevOpen) => (prevOpen === section ? null : section));
  };

  return (
    <header className="header-v4">
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
            <div className="right-top-bar flex-w h-full">
              <Link to={"/"} className="flex-c-m trans-04 p-lr-25">
                Help &amp; FAQs
              </Link>
              <Link to={"/"} className="flex-c-m trans-04 p-lr-25">
                My Account
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop how-shadow1">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <Link to={"/"} className="logo">
              <img
                src="https://themewagon.github.io/cozastore/images/icons/logo-01.png"
                alt="IMG-LOGO"
              />
            </Link>
            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="label1" data-label1="hot">
                  <Link to="product">Shop</Link>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 "
                onClick={() => handleToggle("search")}
              >
                <i className="zmdi zmdi-search" />
              </div>
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti "
                data-notify={2}
                onClick={() => handleToggle("cart")}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              <Link
                to="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={0}
              >
                <i className="zmdi zmdi-favorite-outline" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Modal Search */}
      <div
        className={`modal-search-header flex-c-m trans-04 ${
          open === "search" ? "show-modal-search" : ""
        }`}
      >
        <div className="container-search-header" ref={sectionRef}>
          <button
            className="flex-c-m btn-hide-modal-search trans-04"
            onClick={() => handleToggle(null)}
          >
            <img
              src="https://themewagon.github.io/cozastore/images/icons/icon-close2.png"
              alt="CLOSE"
            />
          </button>
          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search" />
            </button>
            <input
              className="plh3"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>

      <>
        {/* Cart */}
        <div
          className={`wrap-header-cart  ${
            open === "cart" ? "show-header-cart" : ""
          }`}
        >
          <div className="s-full " />
          <div
            className="header-cart flex-col-l p-l-65 p-r-25"
            ref={sectionRef}
          >
            <div className="header-cart-title flex-w flex-sb-m p-b-8">
              <span className="mtext-103 cl2">Your Cart</span>
              <button
                className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 "
                onClick={() => handleToggle(null)}
              >
                <i className="zmdi zmdi-close" />
              </button>
            </div>
            <div className="header-cart-content flex-w">
              <ul className="header-cart-wrapitem w-full">
                <li className="header-cart-item flex-w flex-t m-b-12">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-01.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt p-t-8">
                    <Link
                      to={"/"}
                      className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      White Shirt Pleat
                    </Link>
                    <span className="header-cart-item-info">1 x $19.00</span>
                  </div>
                </li>
                <li className="header-cart-item flex-w flex-t m-b-12">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-02.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt p-t-8">
                    <Link
                      to={"/"}
                      className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      Converse All Star
                    </Link>
                    <span className="header-cart-item-info">1 x $39.00</span>
                  </div>
                </li>
                <li className="header-cart-item flex-w flex-t m-b-12">
                  <div className="header-cart-item-img">
                    <img src="images/item-cart-03.jpg" alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt p-t-8">
                    <Link
                      to={"/"}
                      className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      Nixon Porter Leather
                    </Link>
                    <span className="header-cart-item-info">1 x $17.00</span>
                  </div>
                </li>
              </ul>
              <div className="w-full">
                <div className="header-cart-total w-full p-tb-40">
                  Total: $75.00
                </div>
                <div className="header-cart-buttons flex-w w-full">
                  <Link
                    to={"shopping-cart"}
                    className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                  >
                    View Cart
                  </Link>
                  <Link
                    to={"shopping-cart"}
                    href="shoping-cart.html"
                    className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
