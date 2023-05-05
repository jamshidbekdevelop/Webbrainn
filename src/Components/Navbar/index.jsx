import React, { memo, useState } from "react";
import { Link, Container, Wrapper, Bar, Times, SideManu, Nav } from "./styled";
import { Outlet, useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import BrandName from "../Generic/BrandName";
import Button from "../Generic/Button";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  return (
    <React.Fragment>
      <Container>
        <Nav>
          <BrandName />
          <Wrapper className="first" width={"700"}>
            {navbar.map(
              ({ id, pathname, title, hidden }) =>
                !hidden && (
                  <Link
                    active={`${location?.pathname === pathname}`}
                    key={id}
                    to={pathname}
                  >
                    {title}
                  </Link>
                )
            )}
          </Wrapper>
          <Wrapper>
            <div className="btn_none">
              <Button width={"130"} border>
                <a style={{ textDecoration: "none" }} href="/signin">
                  Krish
                </a>
              </Button>
            </div>
            {isOpen ? <Bar onClick={onToggle} /> : <Times onClick={onToggle} />}
          </Wrapper>
          {!isOpen && (
            <SideManu>
              {navbar.map(
                ({ id, pathname, title, hidden }) =>
                  !hidden && (
                    <Link
                      active={`${location?.pathname === pathname}`}
                      key={id}
                      to={pathname}
                    >
                      {title}
                    </Link>
                  )
              )}
              <div className="btn_active">
                <Button width={"130"} border>
                  <a style={{ textDecoration: "none" }} href="/signin">
                    Krish
                  </a>
                </Button>
              </div>
            </SideManu>
          )}
        </Nav>
      <Outlet />
      </Container>
    </React.Fragment>
  );
};
export default memo(Navbar);
