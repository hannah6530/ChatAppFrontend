import React, { useState } from 'react';
import './style.css';

const Chat = () => {
    return(
        <React.Fragment>
            <div id="chat-container">
                <div id="chat-title">
                </div>

                <div id="search">
                    <input type="text" placeholder="search" />

                </div>
                <div id="conversation-list">

                </div>
                <div id="new-message-container">

                </div>
                <div id="chat-form">

                </div>
                <div id="chat-message-list">

                </div>

            </div>
        </React.Fragment>
    )

};
export default Chat;