import React from "react";
import { DescriptionBoxStyled } from "./DescriptionBoxStyled";
import { Tab, Tabs } from "react-bootstrap";

const DescriptionBox = () => {
  return (
    <DescriptionBoxStyled>
      <div className="my-5 ">
        <Tabs
          defaultActiveKey="Description"
          id="fill-tab-example"
          className=""
          fill
        >
          <Tab
            eventKey="Description"
            title="Description"
            className="p-4 border"
          >
            <ul>
              <li className="my-2">
                {" "}
                Elevate your activewear with our Essential Performance Tee. Made
                from moisture-wicking fabric, this T-shirt keeps you cool and
                dry during workouts or outdoor activities. Its ergonomic fit
                allows for full range of motion, making it ideal for athletes
                and fitness enthusiasts. Choose from a range of vibrant colors
                to keep you motivated and stylish on the move.
              </li>
              <li className="my-2">
                Discover ultimate comfort and effortless style with our
                Essential Tee. Crafted from soft, breathable fabric, this
                T-shirt is designed to be a versatile staple in your
                wardrobe.Whether you're dressing up for a casual outing or
                relaxing at home, the Essential Tee offers a perfect fit that
                moves with you. Available in a range of classic and trendy
                colors, it's easy to pair with jeans, shorts, or your favorite
                accessories. Enjoy the perfect blend of quality, comfort, and
                style with this must-have T-shirt.
              </li>
            </ul>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews (221)" className="p-4 border">
            Review From Different Users
          </Tab>
        </Tabs>
      </div>
    </DescriptionBoxStyled>
  );
};

export default DescriptionBox;
