import styled from "styled-components";

export const ActorListStyle = styled.div`
  position: relative;
  h2.title {
    font-size: 24px;
    padding-right: 10px;
    color: white;
    direction: rtl;
  }
  .carousel-buttons {
    position: absolute;
    display: flex;
    bottom: 20px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #000;
    .crsl-button {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 15px 20px;
      background: white;
      opacity: 1;
      font-size: 20px;
      font-weight: bolder;
      border-radius: 10%;
      cursor: pointer;
      opacity: 0.3;
      z-index: 10;
      transition: all 0.3s ease-in;
      &:hover {
        opacity: 1;
      }
    }
  }
  ul {
    scroll-behavior: smooth;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: flex;
    width: 100%;
    color: white;
    align-items: center;
    justify-content: stretch;
    li {
      position: relative;
      display: flex;
      flex-direction: column;
      width: calc(100% / 6);
      padding: 10px;

      div.card-hover-data {
        position: absolute;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        background: #000;
        opacity: 0;
        width: calc(100% - 20px);
        height: calc(80%);
        border-radius: 10px;
        transition: all 0.3s ease-in;
        z-index: 2;
        font-size: 16px;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
        }
        p {
          margin: 5px;
        }
        .best-movies {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          span {
            padding: 0 15px 0 10px;
          }
        }
      }

      img {
        border-radius: 10px;
      }
      h3 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        height: 40px;
      }
    }
  }
`;
