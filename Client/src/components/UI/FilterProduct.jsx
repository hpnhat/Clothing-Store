import React from "react";
const filtersType = [
  { name: "All Products", filter: "*" },
  { name: "Women", filter: ".women" },
  { name: "Men", filter: ".men" },
  { name: "Bag", filter: ".bag" },
  { name: "Shoes", filter: ".shoes" },
  { name: "Watches", filter: ".watches" },
];
const FilterProduct = ({ filters=filtersType, filterKey, setFilterKey }) => {
  return (
    <div >
      {filters.map((filter, i) => (
        <button
          key={i}
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            filterKey === filter.filter ? "how-active1" : ""
          }`}
          data-flter={filter.filter}
          onClick={() => setFilterKey(filter.filter)}
        >
            {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterProduct;
