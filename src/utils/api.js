import axios from 'axios';

export const postClose = () => axios.post('http://wildchat/exit', {});

export const sendMessage = (message) => {
    if (message.length > 100) {
        axios.post('http://wildchat/error', JSON.stringify({error : "Message is too big!"}))
        return;
    } else if (!message) {
        axios.post('http://wildchat/error', JSON.stringify({error : "No message!"}))
        return;
    } else {
        axios.post('http://wildchat/main', JSON.stringify({
            text: message
        }));
        return;
    }
}

export const toggleChat = () => axios.post('http://wildchat/toggleChat', {})