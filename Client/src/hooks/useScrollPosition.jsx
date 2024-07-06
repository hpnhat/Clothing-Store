import { useEffect } from "react";

const useScrollPosition = () => {
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".container-menu-desktop");
      const menuDesktop = document.querySelector(".wrap-menu-desktop"); // Đảm bảo phần tử này tồn tại

      if (window.scrollY > 10) {
        menu.classList.add("fix-menu-desktop");
        if (menuDesktop) {
          menuDesktop.style.top = "0";
        }
      } else {
        menu.classList.remove("fix-menu-desktop");
        if (menuDesktop) {
          menuDesktop.style.top = "40px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollPosition;
