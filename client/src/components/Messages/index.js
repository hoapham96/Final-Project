import React, { useEffect, useState } from 'react';

import '../../index.css';

function Messages({ socket, userData }) {
  const [messages, setMessages] = useState({});
  

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        return newMessages;
      });
    };
  
    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };
  
    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
      <div className="chat-thread">
        {[...Object.values(messages)]
          .sort((a, b) => a.time - b.time)
          .map((message) => (
            message.user.username === userData.me.username ? (<div
              key={message.id}
              
              className="d-flex flex-row message-container-right my-1"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className="message-right"> 
                <div>{message.value}</div>
                <div className="date">{new Date(message.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              </span>
              <span className="user">{message.user.username.charAt(0).toUpperCase()}</span>
            </div>) : (<div
              key={message.id}
              className="d-flex flex-row message-container-left my-1"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className="user">{message.user.username.charAt(0).toUpperCase()}</span>
              <span className="message-left"> 
                <div>{message.value}</div>
                <div className="date">{new Date(message.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              </span>
            </div>)
          ))
        }
      </div>
  );
}

export default Messages;