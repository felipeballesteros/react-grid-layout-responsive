import React from "react";
import { Link } from 'react-router';

export default class Sports extends React.Component{

    render() {
        let story1 = {
                title: "sports-story-one",
                id: "1357"
        };
        let story2 = {
                title: "sports-story-two",
                id: "2468"
        };
        return (
            <div>
                <h3>Arts</h3>
                <Link to={`/sports/${story1.title}/${story1.id}`}>Story1</Link>
                <Link to={`/sports/${story2.title}/${story2.id}`}>Story2</Link>
            </div>
        );
    }
}