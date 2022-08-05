import Link from "next/link";

import navigationBarStyles from "../styles/NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={navigationBarStyles.navBar}>
      <ul className={navigationBarStyles.linksContainer}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
