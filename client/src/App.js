import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from "./components/Chat";
import reportWebVitals from "./reportWebVitals";



const socket = io.connect('http://localhost:3001');


export  const App =()=> {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            socket.emit('join_room', room);
            setShowChat(true);
        }

    }

console.log(username,room)
  return (
    <div className="App">
        {!showChat ? (
              <div className="joinChatContainer">
                    <h3>Join A Chat</h3>

                    <input
                        type="text"
                        placeholder="Name..."
                        onChange={(event) => { setUsername(event.target.value)
                        }}
                    />
                  <br />
                      <input
                          type="text"
                          placeholder="Room..."
                          onChange={(event) => { setRoom(event.target.value)
                          }}
                      />
                  <br />
                    <button onClick={joinRoom}>Join A Room</button>
              </div>
                  ): null}

                  {showChat &&  <Chat socket={socket} username={username} room={room} />}
    </div>
    );
}


export default App;

reportWebVitals();