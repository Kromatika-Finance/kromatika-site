import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	return (
		<>
      <GoogleAnalytics gaMeasurementId="UA-249910106-1" />
      <Component {...pageProps} />
    </>
	)
}

export default App;
