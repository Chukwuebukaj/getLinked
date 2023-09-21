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
                {index > 2 ? (
                  <Link
                    to={link.path}
                    className={
                      location.pathname.slice(1) === link.path ? "current" : ""
                    }
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    className={
                      location.pathname.slice(1) === link.path ? "current" : ""
                    }
                    href={link.path}
                  >
                    {link.title}
                  </a>
                )}
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
