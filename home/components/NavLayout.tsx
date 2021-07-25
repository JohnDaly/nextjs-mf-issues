import Nav from "./nav";

function NavLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default NavLayout;