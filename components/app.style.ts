import styled from "styled-components";

export const ProductListComponent = styled.div`
  display:flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  margin: 0;
  @media (min-width: 768px) {
        width: 80%;
        margin-left:9%
    }
`