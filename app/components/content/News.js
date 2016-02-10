import React from "react";
import { Link } from 'react-router';

export default class News extends React.Component{

    render() {
        let story1 = {
                title: "news-story-one",
                id: "1357"
        };
        let story2 = {
                title: "news-story-two",
                id: "2468"
        };
        return (
            <div>
                <h3>Arts</h3>
                <Link to={`/news/${story1.title}/${story1.id}`}>Story1</Link>
                <Link to={`/news/${story2.title}/${story2.id}`}>Story2</Link>
            </div>
        );
    }
}