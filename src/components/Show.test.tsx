import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Show from "./Show";
import GoogleMap from "./GoogleMap";
import axios from "axios";

describe("show component tests", () => {
  test("testing", () => {
    render(<Show />);
    const linkElement = screen.getByTestId("google-map");
    expect(linkElement).toBeInTheDocument;
  });
});
