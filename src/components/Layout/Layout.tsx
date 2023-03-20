import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
type LayoutProps = {};

function Layout(props: LayoutProps) {
  const isAuth: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  return (
    <div
      className={`${styles["full-div"]}  d-flex h-100 text-center text-bg-dark`}
    >
      <div className=" d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Planning poker</h3>
            {isAuth && (
              <nav
                className={`${styles.navigation} ${styles["nav-masthead"]} justify-content-center float-md-end`}
              >
                <NavLink to="/" className="nav-link fw-bold py-1 px-0 ">
                  Home
                </NavLink>

                <NavLink to="/settings" className="nav-link fw-bold py-1 px-0 ">
                  Settings
                </NavLink>

                <NavLink to="/about" className="nav-link fw-bold py-1 px-0 ">
                  About
                </NavLink>
              </nav>
            )}
          </div>
        </header>

        <main className="px-3">
          <Outlet />
        </main>

        <footer className="mt-auto text-white-50">
          <p>
            Programmed by{" "}
            <a className="text-white" href="https://github.com/jozsefgorcs">
              jozsefgorcs
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
