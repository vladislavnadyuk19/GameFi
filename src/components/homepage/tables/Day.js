import React from "react";
import Table from "./Table";
import TableItem from "./TableItem";

function Day({ className }) {
  return (
    <div className={`tables__content ${className}`}>
      <div className="tables__wrapper">
        <h4 className="tables__table-title">TOP GAIN</h4>

        <Table>
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />

          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            high={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
        </Table>
      </div>{" "}
      <div className="tables__wrapper">
        <h4 className="tables__table-title">TOP LOSE</h4>
        <Table>
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
          <TableItem
            to="#"
            image="image1.png"
            imageS="image1-s.png"
            abbreviation="WSG"
            title={"Wall Street Game"}
            lower={"8.49%"}
            price="$1.2446"
            volume="$20.3K"
          />
        </Table>
      </div>
    </div>
  );
}

export default Day;
