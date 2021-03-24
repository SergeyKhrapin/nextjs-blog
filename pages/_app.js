console.log('_app.js')

// It is the top-level component which is a common across all the different pages
export default function App({ Component, pageProps }) {
    console.log('App component')
    return <Component {...pageProps} argon="18" />
}
