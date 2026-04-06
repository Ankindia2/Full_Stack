import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";

export default function CoinCreate() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.slice1);

    useEffect(() => {
        dispatch(FetchData(20));
    }, [dispatch]);

    if (loading) {
        return <h1>Data is Loading...</h1>;
    }

    if (error) {
        return <h1>Error has Occurred</h1>;
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {data.map((value) => (
                <CoinCard key={value.id} coin={value} />
            ))}
        </div>
    );
}