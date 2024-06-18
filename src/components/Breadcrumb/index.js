import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BreadcrumbStyled } from "./BreadcrumbStyled";

const BreadCrumbCom = ({ screens = [] }) => {
  return (
    <BreadcrumbStyled>
      <div>
        <Breadcrumb>
          {screens.length > 0 &&
            screens.map((item) => {
              return (
                <Breadcrumb.Item href={item.link}>{item.name}</Breadcrumb.Item>
              );
            })}
        </Breadcrumb>
      </div>
    </BreadcrumbStyled>
  );
};

export default BreadCrumbCom;
