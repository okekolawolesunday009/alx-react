import React from "react";
import App from "./App";
import Notifications from "./Notifications";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    const app = shallow(<App />);

    expect(app.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    const app = shallow(<App />);

    expect(app.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    const app = shallow(<App />);

    expect(app.find(".App-footer")).toBeDefined();
  });
  it("It should contain the Notifications component", () => {
    const app = shallow(<App />);

    expect(app.find("Notifications")).toBeDefined();
  });
 
  it("It should contain the Login component", () => {
    const app = shallow(<App />);

    expect(app.find("Login")).toBeDefined();
  });
  it("It should contain the Header component", () => {
    const app = shallow(<App />);

    expect(app.find("Header")).toBeDefined();
  });
  it("It should contain the Footer component", () => {
    const app = shallow(<App />);

    expect(app.find("Footer")).toBeDefined();
  });
});