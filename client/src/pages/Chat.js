import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';
import { QUERY_ME_BASIC } from '../utils/queries';
import { useQuery } from '@apollo/client';
import '../index.css'

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  return <>
      
      { socket ? (
        <div >
          <div className="chat-header">
            <h2> Chat Room </h2>
          </div>
          <Messages socket={socket} userData={userData}/> 
          <MessageInput socket={socket} userData={userData}/>
        </div>
      ) : (
        <div>Not Connected</div>
      )}
  </>
}

export default Chat