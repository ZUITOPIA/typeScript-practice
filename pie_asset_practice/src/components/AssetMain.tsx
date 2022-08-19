import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import NoticeBox from "./NoticeBox";
import InputBox from "./InputBox";
import CategorySelect from "./CategorySelect";

const Style = {
  Wrapper: styled.div``,
};

export default function AssetMain() {
  return (
    <>
      <Style.Wrapper>
        <NoticeBox />
        <InputBox />
        <NoticeBox />
        <InputBox />
        <Thumbnail />
        <hr />
        <NoticeBox />
        <NoticeBox />
        <CategorySelect />
      </Style.Wrapper>
    </>
  );
}
