import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome", () => {
  it("looks for Welcome", () => {
    render(<Welcome />);
    const welcome = screen.getByText(/welcome/i);
    expect(welcome).toBeInTheDocument();
  });
});
