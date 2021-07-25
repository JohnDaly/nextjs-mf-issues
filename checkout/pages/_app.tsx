import dynamic from "next/dynamic";
// const NavLayout = dynamic(
//   () => {
//     return window.home?.get("./NavLayout").then((factory) => factory());
//   },
//   { 
//     loading: () => <div>NavLayout is loading</div>,
//     ssr: false
//   }
// );
const NavLayout = dynamic(
  () => {
    const mod = import("home/NavLayout");
    console.log(mod);
    return mod;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <h1>Host: Checkout</h1>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </>
  );
}

export default MyApp;
