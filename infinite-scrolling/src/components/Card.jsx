import { Box } from '@chakra-ui/react'
import React from 'react'

const Card = ({name, picture, index}) => {
    return (
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", border:"1px solid gray", marginLeft:"10px", marginRight:"10px", backgroundColor:(index%2==0)?"white":"#edf2f7" }} >
                <h1 style={{ marginLeft: "10px", padding: "10px", color: "gray" }}>
                    {name.title} {name.first} {name.last}
                </h1>
                <div style={{ marginRight: "10px", padding: "10px", borderRadius: "10px" }}>
                    <img style={{ borderRadius: "25px" }} src={picture.thumbnail} alt={"name"} />
                </div>
            </div>  
    )
}

export default Card