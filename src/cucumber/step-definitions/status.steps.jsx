import React from "react";
import { render, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

import App from "../../core/App/App";

const feature = loadFeature("src/cucumber/features/status.feature");

defineFeature(feature, (test) => {
  beforeEach(() => {
    render(<App />);
  });

  test("Show Status", ({ given, then }) => {
    given("User accessed the website", () => {
      expect(screen.getByTestId("App")).toBeInTheDocument();
    });
    then("User can see the Status page", () => {
      expect(screen.getByTestId("status-wrapper")).toBeInTheDocument();
    });
  });
});
