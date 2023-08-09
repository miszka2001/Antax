import styled from "styled-components";

export const CategoryBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justyfiy-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`
export const CategoryContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: blue;
    margin: 10px 10px 10px 10px;
    &:hover {
        cursor: pointer;
    }
`