import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import appStore from "../../utils/appStore"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../MOCKS/mockResMenu.json"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

global.fetch = jest.fn(async () => // Mock function takes a callback function
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("Should render restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        </Provider>
        </BrowserRouter>
    ))

    const appetizersAccordion = screen.getByText("Appetizers (4)");
    expect(appetizersAccordion).toBeInTheDocument();
    fireEvent.click(appetizersAccordion);

    const addButtons = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addButtons[0]);
    // fireEvent.click(addButtons[1]);

    const cartItems = screen.getByText("Cart - (1 Items)");
    expect(cartItems).toBeInTheDocument();

})

it("Should add item in the cart when add button is clicked", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
        </Provider>
        </BrowserRouter>
    ))

    const appetizersAccordion = screen.getByText("Appetizers (4)");
    fireEvent.click(appetizersAccordion);
    const addButtons = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);
    const cartItems = screen.getByText("Cart - (3 Items)");
    expect(cartItems).toBeInTheDocument();

    const itemsInCart = screen.getAllByTestId("foodItems");
    expect(itemsInCart.length).toBe(7);

})

it("Should should empty the cart when Clear cart button is clicked", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
        </Provider>
        </BrowserRouter>
    ))

    const appetizersAccordion = screen.getByText("Appetizers (4)");
    fireEvent.click(appetizersAccordion);
    const addButtons = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addButtons[0]);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.getByText("Cart Empty!!! Add something.")).toBeInTheDocument();

})

