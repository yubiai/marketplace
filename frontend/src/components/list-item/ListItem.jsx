import React from "react";

const ListItem = ({ item, onClick }) => {
  return (
    <li key={item?.id} className="list-group-item">
      {item?.name} <span> - </span>
      <span className="font-weight-bold">{item?.price} UBI</span>
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick(e);
        }}
      >
        Comprar
      </button>
    </li>
  );
};

export default ListItem;
