import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../MOCKS/MOCK_RES_DATA.json";
import "@testing-library/jest-dom";


it("Should contain restaurant name", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();

});

it("Should rende restaurant card with Open label", () => {
    const RestaurantCardLabeled = withOpenLabel(RestaurantCard);
    render(<RestaurantCardLabeled resData={MOCK_DATA} />);

    const name = screen.getByText("Now Open");

    expect(name).toBeInTheDocument();

});