import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { postClose, toggleChat } from './utils/api';

let display = false;

window.addEventListener('message', (event) => {
    const item = event.data;
    console.log(JSON.stringify(item));
    if (item.type === "chat:addMessage") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.message));
        document.getElementById("chat").appendChild(li);
    }
    if (item !== undefined && item.type === "chat")
    {
        if (item.status === true) {
            ReactDOM.render(
                <AppContainer>
                    <App message={event.data.test} />
                </AppContainer>,
                document.getElementById('root')
            );
        } else {
            ReactDOM.unmountComponentAtNode(document.getElementById("root"))
        }
    }
});

document.onkeyup = data => {
    if (data.which == 27) {
        postClose();
    }
}

document.onkeydown = data => {
    // ON T PRESS
    if (data.which == 84) toggleChat();
}
