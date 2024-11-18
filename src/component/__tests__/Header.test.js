import { render, screen ,fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import ReduxStore from "../../common/ReduxStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test('should load Header with cart', () => {
    //render
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //query
    let homeButton = screen.getByText('Home');

    //assertion
    expect(homeButton).toBeInTheDocument();
})

test('should load login Button', () => {
    render(
        <BrowserRouter>
            <Provider store={ReduxStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    let login=screen.getByRole('button',{name:'login'});
    fireEvent.click(login);
    let logout=screen.getByRole('button',{name:'logout'});

    

    expect(logout).toBeInTheDocument();
})