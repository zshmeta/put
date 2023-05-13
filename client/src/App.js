import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';



const socket = io.connect('http://localhost:3001');

export  const App =()=> {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            const data = {
                username,
                room
            }
            socket.emit('join_room', data);
        }

    }


  return (
    <div className="App">
            <h2>P.U.T - Peer User Telegraph</h2>

      <h3>Join the Party</h3>
        <input type="text"  placeholder="Jack Sparrow" onChange={(event) =>
            setUsername(event.target.value)}
        />
        <br />
        <input type="text"  placeholder='chatBoxID' onChange={(event) =>
            setRoom(event.target.value)
        }  />
        <button onClick={joinRoom}>Join</button>
    </div>
  );
}

export default App;
