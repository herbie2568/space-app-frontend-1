import * as React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import {Planet} from './model'
const IndexPage = () => {
    const [planets, setPlanets] = React.useState([]);
    useEffect(() => {
        axios
            .get('https://space-meteor.herokuapp.com/planets')
            .then((response) => {
            setPlanets(response.data);
        });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "TRAVEL TO THE PLANETS!"),
        React.createElement("div", { className: 'planetContainer' }, planets?.map((planet) => {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'planetCard' },
                    React.createElement("div", { key: planet._id }),
                    React.createElement("img", { src: planet.image }),
                    React.createElement("h3", null, planet.name),
                    React.createElement("div", null, planet.description),
                    React.createElement("h4", null,
                        "Year discovered: ",
                        planet.date_found),
                    React.createElement("h4", null,
                        "Ticket price: $",
                        planet.ticket_price),
                    React.createElement("h4", null,
                        "Featured activity: ",
                        planet.activity))));
        }))));
};
export default IndexPage;
