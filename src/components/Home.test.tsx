import { render, screen } from "@testing-library/react";

import Home from "./Show";

test("testing for show component", () => {
  render(<Home />);
  const linkElement = screen.getAllByRole("table");
  expect(linkElement).toBeInTheDocument();
});
