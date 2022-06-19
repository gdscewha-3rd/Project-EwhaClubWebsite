import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SearchInput from "components/searchinput";

import styled from "styled-components";
import { LogoIcon } from "asset/icons";
import { fonts } from "styles/styleObj";

import { applyMediaQuery } from "styles/mediaQuery";
import ClubcardList from "components/clubcardList";

const Result = ({ match }) => {
  console.log("search result", match.params.name);
  const query = match.params.name;
  const [cnt, setCnt] = useState(null);
  useEffect(() => {}, [query, cnt]);

  return (
    <>
      <StyledRoot>
        <Link to="/">
          <img src={LogoIcon} alt="logo"></img>
        </Link>

        <SearchInput />

        {cnt && (
          <>
            <SearchInfo>
              <Text weight={`${fonts.weight.bold}`}>'{query}'</Text>
              <Text weight={`${fonts.weight.regular}`}>&nbsp;검색결과 :</Text>
              <Text weight={`${fonts.weight.regular}`}>&nbsp;{cnt}개</Text>
            </SearchInfo>
          </>
        )}
        <ClubcardList query={query} setcnt={setCnt} />
      </StyledRoot>
    </>
  );
};

export default Result;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
`;

const SearchInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 3.5rem;
  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${fonts.size.medium};
`;
