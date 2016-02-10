import React from "react";
import { Link } from 'react-router';

export default class Arts extends React.Component{

    

    render() {
        let story1 = {
                title: "arts-story-one",
                id: "1357"
        };
        let story2 = {
                title: "arts-story-two",
                id: "2468"
        };
        return (
            <div>
                <h3>Arts</h3>
                <Link to={`/arts/${story1.title}/${story1.id}`}>Story1</Link>
                <Link to={`/arts/${story2.title}/${story2.id}`}>Story2</Link>
            </div>
        );
    }
}