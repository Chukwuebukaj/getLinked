import { links } from "./HeaderData";
import Button from "../../components/Button";
import { HeaderWrapper, LinkList } from "./Header.styled";
import Logo from "../../components/Logo";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo />
      <nav>
        <LinkList>
          {links.map((link, index) =>
            index < 4 ? (
              <li key={index}>
                <Link
                  className={
                    location.pathname.slice(1) === link.path ? "current" : ""
                  }
                  to={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ) : (
              <Link to={link.path} key={index}>
                <Button
                  children={link.title}
                  className={
                    location.pathname.slice(1) === link.path ? "register" : ""
                  }
                />
              </Link>
            )
          )}
        </LinkList>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
