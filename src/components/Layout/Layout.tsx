import { useSelector } from "react-redux";
import "./Layout.css";
type LayoutProps = {
  children: any;
};

function Layout(props: LayoutProps) {
  const isAuth: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  return (
    <div className="full-div d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Planning poker</h3>
            {isAuth && (
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a
                  className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link fw-bold py-1 px-0" href="#">
                  Features
                </a>
                <a className="nav-link fw-bold py-1 px-0" href="#">
                  Contact
                </a>
              </nav>
            )}
          </div>
        </header>

        <main className="px-3">{props.children}</main>

        <footer className="mt-auto text-white-50">
          <p>Programmed by jozsefgorcs</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
