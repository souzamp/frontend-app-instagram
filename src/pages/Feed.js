import React, { Component } from 'react';
import more from '../assets/more.svg';
import comment from '../assets/comment.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';

import './Feed.css';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Marcos Paulo</span>
                            <span className="place">Pernambuco</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/OmniStack.jpg"/>

                    <footer>
                        <div className="actions">
                            <img src={like}/>
                            <img src={comment}/>
                            <img src={send}/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Semana muito bacana com o Diego da Rocketseat
                            <span>#react #onmistack #node</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Marcos Paulo</span>
                            <span className="place">Pernambuco</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/OmniStack.jpg"/>

                    <footer>
                        <div className="actions">
                            <img src={like}/>
                            <img src={comment}/>
                            <img src={send}/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Semana muito bacana com o Diego da Rocketseat
                            <span>#react #onmistack #node</span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;