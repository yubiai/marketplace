import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BreadcrumbA(props) {
  const { t, i18n } = useTranslation("breadcrumbA");
  let component = (
    <Breadcrumbs
      style={{
        marginLeft: "1.9rem",
        marginTop: "0.45rem",
        marginBottom: "0.5rem",
      }}
      separator="›"
      aria-label="breadcrumb"
    >
      <Link
        className={props.classes.link}
        to="/sales"
        onClick={props.handleClick}
      >
        {t("Sales")}
      </Link>
      <Link
        className={props.classes.link}
        to="/salescomplete"
        onClick={props.handleClick}
      >
        {t("Complete")}
      </Link>
      <Link
        className={props.classes.link}
        to="/salescompletedetails"
        onClick={props.handleClick}
      >
        {t("Details")}
      </Link>
      <Link
        className={props.classes.link}
        to="/salescompletedetails/messagesbox"
      >
        {t("Sales messages")}
      </Link>
    </Breadcrumbs>
  );
  console.log("Location is::: ", props.location);
  if (props.location.pathname === "/checkorders/messagesbox") {
    component = (
      <Breadcrumbs
        style={{
          marginLeft: "1.9rem",
          marginTop: "0.45rem",
          marginBottom: "0.5rem",
        }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link
          className={props.classes.link}
          to="/orders"
          onClick={props.handleClick}
        >
          {t("Orders")}
        </Link>
        <Link
          className={props.classes.link}
          to="/checkorders"
          onClick={props.handleClick}
        >
          {t("Order details")}
        </Link>
        <Link className={props.classes.link} to="/checkorders/messagesbox">
          {t("Messages of the order")}
        </Link>
      </Breadcrumbs>
    );
  }

  return component;
}
