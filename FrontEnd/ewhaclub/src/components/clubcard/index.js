import React from "react";
import styled from "styled-components";
import {
  colors,
  fonts,
  BORDER_RADIUS_1,
  BORDER_RADIUS_2,
  BOX_SHADOW,
} from "styles/styleObj";

const category_color = {
  공연: `${colors.red.light}`,
  문화: `${colors.orange.origin}`,
  사회과학: `${colors.yellow.light}`,
  사회연대: `${colors.green.origin}`,
  종교: `${colors.blue.light}`,
  체육: `${colors.purple.light}`,
  학술: `${colors.purple.origin}`,
};

const state_color = {
  0: {
    color: `${colors.black.light_grey_1}`,
    border: `${colors.black.light_grey_1}`,
  },
  1: {
    color: `${colors.white.origin}`,
    border: `${colors.black.light_grey_1}`,
  },
};

const Clubcard = ({ club }) => {
  return (
    <Card>
      <Thumbnail src={club.main_img_url} alt={club.name}></Thumbnail>
      <MainContainer>
        <Title>{club.name}</Title>
        <Description>{club.short_description}</Description>
      </MainContainer>
      <SubContainer>
        <Category color={category_color[club.category_name]}>
          {club.category_name}
        </Category>
        <State color={state_color[club.is_recruiting]}>
          {club.is_recruiting ? "모집중" : "모집마감"}
        </State>
      </SubContainer>
    </Card>
  );
};
export default Clubcard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.white.origin};
  border-radius: ${BORDER_RADIUS_1};
  box-shadow: ${BOX_SHADOW};
  padding: 15px;
`;

const Thumbnail = styled.img`
  /*로고 : 512 x 288*/
  width: 100%;
  height: 50%;
  padding-bottom: 15px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 30%;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${colors.black.light_origin};
  padding-top: 10px;
  line-height: 19px;
`;

const Title = styled.div`
  font-family: MinSans-Medium;
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
  color: ${colors.black.origin};
  padding-bottom: 12px;
  //line-height: 21px;
`;

const Description = styled.div`
  font-family: MinSans-Medium;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${colors.black.origin};
  //line-height: 19px;
`;

const Category = styled.span`
  font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.light};
  color: ${colors.black.origin};
  background-color: ${(props) => props.color};

  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  padding: 3px 6px;
  margin-right: 14px;
`;

const State = styled.span`
  font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${colors.black.origin};
  background-color: ${colors.black.light_grey_1};
  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  background-color: ${(props) => props.color.color};
  border: 1px solid ${(props) => props.color.border};
  padding: 3px 6px;
`;
