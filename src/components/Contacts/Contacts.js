import React from "react"
import { Link } from 'gatsby'

export default function Contacts() {
  return (
    <section className="section-events">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-main u-margin-bottom-small"> Useful Information</h2>
        <p className="paragraph">
          <div className="30">
           
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, non ratione sunt aspernatur repellendus ducimus.
          </div>
        </p>
      </div>
      <div className="row events-icons">
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Emails</h5>
            <p className="paragraph">
            esclhinlisbon2020@fd.ulisboa.pt.
            </p>
          </div>
        </div>
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Phone Contacts</h5>
            <p className="paragraph">
            +35199999
            </p>
          </div>
        </div>
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Addresses</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, non ratione sunt aspernatur repellendus ducimus.
            </p>
          </div>
        </div>
        <div className="row">
          google maps
        </div>
      </div>
    </section>
  )
}
