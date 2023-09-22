import { links } from "./HeaderData";
import Button from "../../components/Button";
import { HeaderWrapper, LinkList } from "./Header.styled";
import Logo from "../../components/Logo";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../components/MenuIcon";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import CloseButton from "../../components/CloseButton";

const Header = () => {
  const location = useLocation();
  const [display, setDisplay] = useState<string>("none");

  return (
    <HeaderWrapper $displayLinks={display}>
      <Logo />
      <nav>
        <LinkList>
          {display === "flex" && (
            <Button onClick={() => setDisplay("none")} className="close-btn">
              <AiOutlineClose className="close-icon" />
              <CloseButton />
            </Button>
          )}
          {links.map((link, index) =>
            index < 4 ? (
              <li key={index} onClick={() => setDisplay("none")}>
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
                    href={location.pathname !== "/" ? "/" : link.path}
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ) : (
              <Link
                to={link.path}
                key={index}
                onClick={() => setDisplay("none")}
              >
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
      {display === "none" && (
        <Button onClick={() => setDisplay("flex")} className="menu-btn">
          <MenuIcon />
        </Button>
      )}
    </HeaderWrapper>
  );
};

export default Header;
