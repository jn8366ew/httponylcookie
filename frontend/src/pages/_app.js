import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../store';

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);


    return (
          <Provider store={store}>
                <Head>
                      <title>HTTPOnly Auth</title>
                      <meta name='viewport' content='width=device-width, initial_scale=1' />
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                            rel="stylesheet"
                            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
                            crossOrigin="anonymous"
                      ></link>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                            crossOrigin="anonymous"
                    ></script>
                </Head>
                <Component {...pageProps} />
          </Provider>
    );
};

export default App
