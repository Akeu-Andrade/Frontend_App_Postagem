import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import "./styles.css";

export default class Main extends Component{
    state = {
        posts: []
    };

    componentDidMount(){
        this.loudPost();
    }

    loudPost = async () => {
        const response = await api.get("/");
        this.setState({posts: response.data});
    };

    render(){
        return (
            <div className="post-list">
                {this.state.posts.map(post => (
                    <article key={post.id}>
                        <strong>{post.titulo}</strong>
                        <p>{post.autor}</p>
                        <p>{post.data}</p>

                        <Link to={`/posts/${post.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}