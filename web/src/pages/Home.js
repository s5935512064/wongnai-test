import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";
import SearchBar from "../components/Search";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
`;

const Title = styled.h2`
  font-size: calc(3.5em + 0.54vw);
  color: #0093e8;
`;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadTripData();
  }, []);

  const loadTripData = async () => {
    return await axios.get("http://localhost:9000/trips").then((res) => {
      if (res.data) {
        setData(res.data);
      }
    });
  };
  return (
    <MainContainer>
      <Title>เที่ยวไหนดี</Title>
      <SearchBar />
      <Card data={data} />
    </MainContainer>
  );
}
