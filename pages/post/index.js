import React, {Component} from 'react';
import api from '../../services/api'

import './styles.css'

export default class Post extends Component{
    state = {
        post: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/${id}`);

        this.setState({post: response.data});
    }

    render(){
        const { post } = this.state
        return (
            <div className="post-info">
                <h1>{post.titulo}</h1>
                <p>{post.autor}</p>
                <p>{post.data}</p>

                <p>
                    {post.texto}
                </p>
            </div>
        );
    }
}