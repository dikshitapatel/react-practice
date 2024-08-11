import { render, waitFor,screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter as Router } from 'react-router-dom';
import { TEST_DATA } from "../utils/testData";


global.fetch = jest.fn(() =>{
   Promise.resolve({
    json: () =>
      Promise.resolve({TEST_DATA}),
      
  }) 
}) as jest.Mock;

describe("Testing body component", ()=>{
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any previous mocks
      });

    test("Testing if dessert cards are present", async ()=>{
        const body = render(
        <Router> <Body/></Router>
       )
        await waitFor(() => {
            const dessertCards = screen.getAllByTestId('DessertCard'); // Fetch all dessert cards
            expect(dessertCards.length).toBeGreaterThan(0); // Ensure at least one card is present
          });
    })
    
})