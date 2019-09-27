// eslint-disable-next-line
import React from "react"
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles"
import { observer } from "mobx-react"
import CssBaseLine from "@material-ui/core/CssBaseline"
import boot from "./boot"
import { AppRouter } from "./Router"
import * as serviceWorker from './serviceWorker';
import Store from "store/Store"

async function main() {
    await boot()
    
    const rootElement = document.getElementById('root')

    const App = observer(() => (
        <>
            <CssBaseLine/>
            <ThemeProvider theme={Store.appContext.state.theme}>
                {AppRouter.layout}
            </ThemeProvider>
        </>
    ))

    ReactDOM.render(<App/>, rootElement);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}

main();
