import { render, screen } from "@testing-library/react";
import App from "./App";

// TestCase 1: Testing the text in the component
test("Test React app case 1", () => {
  render(<App />);
  const text = screen.getByText(/First React Test case/i);
  expect(text).toBeInTheDocument();
});

// test("Testing input box case 2", () => {
//   render(<App />);
//   let checkInput = screen.getByRole("textbox");
//   expect(checkInput).toBeInTheDocument();
//   const placeholder = screen.getByPlaceholderText("Enter username");
//   expect(placeholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name","username");
// });

// TestCase 2: Grouping is done based upon diff types of test cases I want to run, UI, API, database etc.
// describe("UI Test groups",()=>{
//   test("ui case 1",()=>{
//     render(<App />)
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   })
// })

// describe("API Test groups", () => {
//   test("api case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
// });

// TestCase 3 : event handling testing
test("OnChange event test", () => {
  render(<App />);
  let field = screen.getByRole("textbox");
  expect(field).toBeInTheDocument();
});
