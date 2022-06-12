import React, { Component } from "react";
import Layout from "../Layout/Layout";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      full_name: "",
      gender: "",
    };
  }

  handleInput = (e) => {
    this.setState(() => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  };

  submit = (e) => {
    e.preventDefault();

    this.setState((state) => {
      return {
        full_name: state.fname + " " + state.lname,
        fname: "",
        lname: "",
        gender: e.target.value
        // [e.target.name]: '',
        // [e.target.value]: '',
      };
    });
  };
  render() {
    return (
      <Layout>
        <section className="h-screen flex items-center justify-center">
          <div className="form_container w-96">
            <form onSubmit={this.submit} className="w-full">
              <h2 className="text-center common_head">Sign Up</h2>
              
              <div className="flex mt-8">
                <input
                  name="fname"
                  value={this.state.fname}
                  onChange={this.handleInput}
                  className="mr-4 input"
                  type="text"
                  placeholder="First name"
                />
                <input
                  name="lname"
                  value={this.state.lname}
                  onChange={this.handleInput}
                  className="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <label className="block mt-4">Gender:</label>  
              <div className="mt-2 w-2/6 flex justify-between">
                <label><input onChange={this.handleInput} type="radio" name="gender" value={'male'}/> Male</label>
                <label><input onChange={this.handleInput} type="radio" name="gender" value={'female'}/> Female</label>
              </div>

              <div>
                
              </div>

              <button className="btn mx-auto block mt-12">Submit</button>
            </form>

            <p className="mt-16 text-2xl text-black">
              Full name: {' '}
              <span className="text-[#353535] text-xl capitalize ml-2">
                {this.state.full_name}
              </span>
            </p>

            <p className="mt-2 text-2xl text-black">Gender: <span className="text-[#353535] text-xl capitalize ml-2">
                    {this.state.gender}
                </span></p>
          </div>
        </section>
      </Layout>
    );
  }
}
