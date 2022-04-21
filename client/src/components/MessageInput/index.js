import React, { useState } from 'react';
import '../../index.css';

const MessageInput = ({socket, userData}) => {
  const [value, setValue] = useState('');
  
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', {mes: value, user: userData});
    setValue('');
  };

  return (
    <div>
    {userData && <form onSubmit={submitForm}>
      <input
      className="messageInput"
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>}
    </div>
  );
};

export default MessageInput;