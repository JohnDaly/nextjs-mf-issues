import Nav from "../components/nav";
function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <h1>Host: Home</h1>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
