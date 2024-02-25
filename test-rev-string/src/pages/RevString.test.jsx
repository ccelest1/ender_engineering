import { screen, render } from "@testing-library/dom";
import RevString from "./index";

const mockData = ["", "rer", "name", "dude"]

test('Function reverses string', () => {
    mockData.map((data) => {
        render(<RevString str={data} />)
        const revName = data.split("").reverse().join("")
        expect(screen.getByText(
            `Hello ${data} and your flipped name is: ${revName}`
        )).toBeInTheDocument();
    })
})
