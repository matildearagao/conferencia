import React, { Component } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

class Contacts extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  componentDidMount(){
    this.handleChange();
  }

  render() {
    return (
      <section className="sectionContact">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-md-push-3">
            <form action="https://formspree.io/matilde.a.s.homem@gmail.com" method="POST" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-main u-center-text">Encomende já!</h2>
              </div>
              <h5 className="heading-sub">Pedido:</h5>
              <div className="form__group">
                <textarea
                  type="text"
                  id="order"
                  name="order"
                  className="form__input"
                  placeholder="12 cinnapans açúcar + 6 chocolate"
                  required
                />
                <label htmlFor="order" className="form__label">
                  O seu pedido
                </label>
              </div>
              <div className="form__group">
                <DatePicker
                  id="date"
                  name="data"
                  className="form__input"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                <label htmlFor="order" className="form__label">
                  {" "}
                  &nbsp;{" "}
                </label>
              </div>
              <div className="form__group">
                <textarea
                  type="text"
                  id="obs"
                  name="obs"
                  className="form__input"
                  placeholder="Observações"
                  required
                />
                <label htmlFor="order" className="form__label">
                  Observações
                </label>
              </div>
              <br />
              <hr />
              <br />
              <h5 className="heading-sub">Detalhes</h5>
              <div className="form__group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  placeholder="Nome"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Nome
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="form__label" name="_replyto">
                  Email
                </label>
              </div>
              <div className="form__group">
                <input
                  type="tel"
                  id="phone"
                  name="telemovel"
                  className="form__input"
                  placeholder="Telemóvel"
                  required
                />
                <label htmlFor="phone" className="form__label">
                  Telemóvel
                </label>
              </div>

              <div className="form__group u-margin-top-medium">
                <input type="submit" value="Send  &rarr;" className="btn btn--blue"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contacts
