import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Menu"
          onClick={() => props.handlePageChange("Menu")}
          className={props.currentPage === "Menu" ? "nav-link active" : "nav-link"}
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Add"
          onClick={() => props.handlePageChange("Add")}
          className={props.currentPage === "Add" ? "nav-link active" : "nav-link"}
        >
          Add
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Edit"
          onClick={() => props.handlePageChange("Edit")}
          className={props.currentPage === "Edit" ? "nav-link active" : "nav-link"}
        >
          Edit
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
