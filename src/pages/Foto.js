import React from 'react'
import styled from 'styled-components'

export default function Foto() {
    return (
        <div>
            <FotoLayer>
                <div className='card'>
                    <img src="" alt=""/>


                </div>
            </FotoLayer>
        </div>
    )
}

const FotoLayer = styled.section`
    display: grid;
    margin: auto;
    padding: 0px;
    justify-content: center;
    background: #e6eddf;
    margin-top: 20px;
    margin-bottom: 150px;
    width: 80%;
    height: 150%;
    border-radius: 5px;
    box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.4);

.card {
    margin: auto;
    width: 250px;
    height: 475px;
}

    img {
        width: 90%;
    }

    h3 {
        color: #6b9e52;
        text-align: center;
    }

    h4 {
        text-align: center;
    }


    `
