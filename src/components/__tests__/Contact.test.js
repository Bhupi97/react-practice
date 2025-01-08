import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    // instead of using "test" we can also use "it"
    it("Should load contact us component", () => {

        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load contact us component", () => {

        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load 2 text boxes in contact us component", () => {
    
        render(<Contact />);
    
        // Querying
        const textBoxes = screen.getAllByRole("textbox");
        // above statement returns a - react fibre node/ JSX element/ react elements
    
        expect(textBoxes.length).toBe(2);
    
        // expect(heading).toBeInTheDocument();
    })

})
