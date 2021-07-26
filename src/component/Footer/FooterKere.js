import React from 'react'

const FooterKere = ({ proo, down, Pricing,Locations,Server,Countries,Blog }) => {
    return (
        <div>
            
            <div className="ule">
                <div className="pro">{proo}</div>
                <ul>
                    <li>{down}</li>
                    <li>{Pricing}</li>
                    <li>{Locations}</li>
                    <li>{Server}</li>
                    <li>{Countries}</li>
                    <li>{Blog}</li>
                </ul>
            </div>


        </div>
    )
}

export default FooterKere
