import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../MOCKS/mockResCardData.json"
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";

global.fetch = jest.fn(() => {
    // Function to mock fetch function of Body component
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should Search restaurants list for burger text input ", async () => {
    await act(async () => { 
        // Faking an API call
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
    });

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchTextBox = screen.getByTestId("searchBox");
    const searchBtn = screen.getByRole("button", {name: "Search"});

    fireEvent.change(searchTextBox, {target: {value: "burger"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2);


})

it("Should filter Top rated restaurants", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
    });
    const allRestuarantCards = screen.getAllByTestId("resCard");

    expect(allRestuarantCards.length).toBe(20)
    const topRatedResBtn = screen.getByRole("button", { name: "Top Rated restaurants"});

    fireEvent.click(topRatedResBtn);

    const topRatedRestaurants = screen.getAllByTestId("resCard");
    expect(topRatedRestaurants.length).toBe(7);

})