import React from 'react'
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
    this.validator = new SimpleReactValidator({
      className: "absolute z-20 top-0 right-0 text-2xl text-white bg-red-800 rounded-full leading-none mt-6 -mr-1 h-4 w-4 text-center flex flex-col",
      messages: {
        default: '*'
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
        <form
          className="max-w-md mt-4 text-black form min-h-screen"
          name="quick-contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact Form" arial-label="Form Name" />
            {/* <p hidden>
                Don't fill this out:{" "} */}
                <label arial-label="Bot field - do not fill in" className="hidden">Do not fill this in<input name="bot-field" /></label>
            {/* </p> */}
            <div className="flex flex-wrap justify-between">
              <label className="relative flex w-full p-1 flex-col"><span className="uppercase font-heading text-sm block mb-1">Name</span>
                <input className="flex-grow p-3 bg-empress-100 text-empress-600" arial-label="Name" type="text" name="name" onChange={this.handleChange} />
                {this.validator.message('name', this.state.name, 'required')}
              </label>
              <label className="relative flex w-full p-1 flex-col"><span className="uppercase font-heading text-sm block mb-1">Email</span>
                <input className="flex-grow p-3 bg-empress-100 text-empress-600" type="text" name="email" onChange={this.handleChange} />
                {this.validator.message('email', this.state.email, 'required')}
              </label>
              <label className="relative flex w-full p-1 flex-col"><span className="uppercase font-heading text-sm block mb-1">Message</span>
                <textarea className="flex-grow p-3 bg-empress-100 text-empress-600 h-40" type="text" name="message" onChange={this.handleChange} />
               {this.validator.message('message', this.state.message, 'required')}
              </label>
              <span className="p-1 mt-4 ml-auto">
                <button className="p-2 transition duration-300 transform bg-orange-500 btn hover:bg-orange-700" type="submit">Get in touch</button>
              </span>
            </div>
        </form>
    );
  }
}
