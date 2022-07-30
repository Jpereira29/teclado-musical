import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 30px;
    border-radius: 10px 10px 20px 20px;

    div {
        display: flex;
    }

`
export const Key = styled.div<{styleKey: {bg: string, height: string}}>`
    width: 50px;
    height: 200px;
    background-color: #FFF;
    border: 2px solid;
    border-radius: 0 0 5px 5px;

    &:active {
        background-color: #F0F0F0;
        height: 195px;
    }
`
export const Chromatic = styled.div`
    width: 40px;
    height: 120px;
    background-color: #000;
    margin-left: -30px;
    margin-right: -10px;
    border-radius: 0 0 5px 5px;
    position: relative;
`
