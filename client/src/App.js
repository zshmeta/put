import './App.css';
import io from 'socket.io-client';



const socket = io.connect('http://localhost:3001');

export  const App =()=> {
  return (
    <div className="App">
        <header className="App-header">
            <h2>P.U.T - Peer User Telegraph</h2>
        </header>
        <div className="App-body">
            <div className="App-chat">
                <div className="App-chat-messages">
                    <div className="App-chat-message">
                        <div className="App-chat-message-user">User</div>
                        <div className="App-chat-message-text">Message</div>
                    </div>
                </div>
                <div className="App-chat-input">
                    <input type="text" placeholder="Type your message here..." />
                    <button>Send</button>
                </div>
            </div>
          <div className="App-users">
            <div className="App-users-list">
                <div className="App-users-list-item">User 1</div>
                <div className="App-users-list-item">User 2</div>
                <div className="App-users-list-item">User 3</div>
                <div className="App-users-list-item">User 4</div>
                <div className="App-users-list-item">User 5</div>
                <div className="App-users-list-item">User 6</div>
                <div className="App-users-list-item">User 7</div>
                <div className="App-users-list-item">User 8</div>
                <div className="App-users-list-item">User 9</div>
                <div className="App-users-list-item">User 10</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
