import React, { useState } from 'react'
import styled from 'styled-components'
import gradient from '../gradient'

export default function Greenthumb({taskCount, taskDoneCount }) {
    return (

        <div>
            <ThumbCard>
                <div className="card">
                    <h3>Grüner Daumen in Sicht:</h3>
                <div className="Box"> 
                    <Thumb color={gradient[Math.floor(100 / taskCount * taskDoneCount)]} src="./icons/thumb_mask.png" alt=""/>
                </div>
                
                <div className="card-gradient"></div>
                    <h4>Du hast {taskDoneCount} von {taskCount} Aufgaben geschafft {Math.floor(100 / taskCount * taskDoneCount)}%.</h4>
                </div>
            </ThumbCard>
        </div>   
    )
};

const Thumb = styled.img`
    background-color: ${props => props.color}; 
`
const ThumbCard = styled.section`
    display: grid;
    margin: auto;
    padding: 0px;
    justify-content: center;
    background: #e6eddf;
    margin-top: 20px;
    margin-bottom: 150px;
    width: 80%;
    border-radius: 5px;
    box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);
}

.box { 
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 3fr, 1fr ;
    }

.card {
    margin: auto;
    width: 250px;
    height: 475px;
}

.card-gradient {
    margin: auto;
    margin-top: 20px;
    background-image: linear-gradient(90deg, #d53f63 0%, #6b9e52 75%);
    width: 250px;
    height: 30px;
}

img {
        width: 100%;
    }

h3 {
        color: #6b9e52;
        text-align: center;
    }

h4 {
        text-align: center;
        font-size: 15px;
    }


    `
