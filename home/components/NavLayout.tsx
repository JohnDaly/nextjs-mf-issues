import Nav from "./nav";

type Props = {
  children?: React.ReactNode;
}

function NavLayout({ children }: Props) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default NavLayout;