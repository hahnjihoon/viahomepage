import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Home from "./Home";

const MainContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavItem = styled.div`
  position: relative;
  font-size: 1.2em;
  cursor: pointer;
  color: #333; /* 네비게이션 항목 기본 색상 */

  &:hover ul {
    display: block;
  }

  /* 마우스 오버 시 스타일 변경 */
  &:hover {
    color: #333; /* 마우스 오버 시 색상 유지 */
    text-decoration: none; /* 밑줄 제거 */
  }
`;

const Dropdown = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function Main() {
  const [modalOpen, setModalOpen] = useState(true);
  const modalCloseFunc = () => {
    setModalOpen(false);
  };

  return (
    <MainContainer>
      {modalOpen && (
        <Modal onClose={modalCloseFunc}>
          <Home />
        </Modal>
      )}
      <Title>via cosmetics main</Title>
      <Nav>
        <NavItem>
          개요
          <Dropdown>
            <DropdownItem>
              <Link
                to="/info"
                style={{ textDecoration: "none", color: "#333" }}
              >
                회사소개
              </Link>
            </DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          제품
          <Dropdown>
            <DropdownItem>
              <Link
                to="/perfume"
                style={{ textDecoration: "none", color: "#333" }}
              >
                향수
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="/cosmetics"
                style={{ textDecoration: "none", color: "#333" }}
              >
                화장품
              </Link>
            </DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          장소
          <Dropdown>
            <DropdownItem>
              <Link
                to="/sales"
                style={{ textDecoration: "none", color: "#333" }}
              >
                판매장소
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="/headquarters"
                style={{ textDecoration: "none", color: "#333" }}
              >
                본사
              </Link>
            </DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          공지
          <Dropdown>
            <DropdownItem>
              <Link
                to="/notice"
                style={{ textDecoration: "none", color: "#333" }}
              >
                공지사항
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="/board"
                style={{ textDecoration: "none", color: "#333" }}
              >
                게시판
              </Link>
            </DropdownItem>
          </Dropdown>
        </NavItem>
      </Nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2>환영합니다!</h2>
        <p>여기에서 여러분에게 최고의 화장품을 소개합니다.</p>
      </div>
    </MainContainer>
  );
}

export default Main;
