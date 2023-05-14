import React, { useState,  useEffect } from 'react';
import './Chat.css';
import ScrollToBottom from 'react-scroll-to-bottom';

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);


  const sendMessage = async () => {
      if (currentMessage.trim() !== '') {
      const messageData = {
          room: room,
          username: username,
          message: currentMessage,
          timestamp: new Date().toUTCString(),
          time: new Date().toLocaleTimeString(),
        };
        await  socket.emit('send_message', messageData);
            setMessageList((list) => [...messageList, messageData]);
            setCurrentMessage("");
        }
    };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (

        <div className="chat-window">
            <div className="chat-header">
                <h3>Chattin in a {room} box</h3>
                <p>PUT - Peer's User Telegraph</p>
            </div>
    <div className="chat-body">
            <div className="chat-messages">
                <ScrollToBottom className="message" >
                    {messageList.map((messageContent) => {
                       return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                                <p id="time">
                                    {messageContent.time}
                                    {messageContent.author}
                                </p>
                  </div>
                </div>
              </div>
            );
            })}
                </ScrollToBottom>
    </div>
</div>
            <div className="chat-footer">
                <input
                        type="text"
                        placeholder="gwendoline a les yeux bleux, gwendoline a kles yeux bleux"
                        onChange={(e) => setCurrentMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>

            </div>
        </div>
    );
};

export default Chat