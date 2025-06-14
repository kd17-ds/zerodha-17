import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../src/Landing-page/Home/Hero/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImg");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
