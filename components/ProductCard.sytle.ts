import { Card } from "react-bootstrap";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

export const StyledCard = styled(Card)`
    margin-bottom: 1.5rem!important;
    border-radius: 0!important;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
    //width: 30%;
    
    @media (min-width: 768px) {
        width: 30%;
    }
    /* &:hover StyledCardOverlay { 
        visibility: visible;
    opacity: 1;
    } */

`

export const StyledCardImage = styled(Card.Img)`
    height:340px;
    @media (max-width: 768px) {
       height: inherit;
    }
`
export const StyledCardOverlay = styled(Card.ImgOverlay)`
    background: rgba(0,0,0,.2);
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    ${StyledCard}:hover &{ 
        visibility: visible;
        opacity: 1;
    }
`

export const FilledStarIcon = styled(FaStar)`
  font-size: 18px;
  color: #ede861 !important;
`

export const MutedStarIcon = styled(FaStar)`
  font-size: 18px;
  color: #bcbcbc !important;
`
export const OverlayButton = styled.a`
   
    background-color: #59ab6e !important;
    border-color: #56ae6c !important;
    color: #fff!important;
    margin-top: 0.5rem!important;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
   
` 
