import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login"; // Assuming Login is your login component

test("Valid Login", () => {
  const { getByLabelText, getByText } = render(<Login />);
  const passwordInput = getByLabelText("password");
  const emailInput = getByLabelText("email");

  fireEvent.change(emailInput, { target: { value: "tariqjannat@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "12345678" } });
  fireEvent.click(loginButton);

  // Check that the success message or redirection occurs
  // You might also check that the user state is updated accordingly
});
