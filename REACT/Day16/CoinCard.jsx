import React from "react";

const CoinCard = ({ coin }) => {

    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        margin: "16px",
        backgroundColor: "#fff"
    };

    const imageStyle = {
        width: "100px",
        height: "100px",
        borderRadius: "10px"
    };

    const titleStyle = {
        fontSize: "18px",
        marginTop: "10px"
    };

    const infoStyle = {
        fontSize: "14px",
        color: "#555"
    };

    return (
        <div style={cardStyle}>
            <img src={coin.image} alt={coin.name} style={imageStyle} />
            <h3 style={titleStyle}>{coin.name}</h3>
            <p style={infoStyle}>Price: ${coin.current_price}</p>
            <p style={infoStyle}>Market Cap Rank: {coin.market_cap_rank}</p>
        </div>
    );
};

export default CoinCard;