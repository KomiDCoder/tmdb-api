import styled from "styled-components";
import { ActorListStyle } from "../actorList/style";
export const AllMovieTVStyle = styled(ActorListStyle)`
  ul {
    li {
      width: calc(100% / 7);
      div.card-hover-data {
        gap: 10px;
        height: calc(80% - 11px);
        p {
          margin: 0;
          font-weight: bold;
          text-transform: capitalize;
        }
        h4 {
          margin: 0;
        }
        .genre {
          padding-left: 10px;
          span {
            font-weight: light;
          }
        }
        .rating {
          display: flex;
          gap: 5px;
        }
      }
    }
  }
`;
