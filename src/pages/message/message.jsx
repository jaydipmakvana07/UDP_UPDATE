import "./message.scss";
import Topbar from "../../components/navbar/Navbar";

import Message from "../../components/message/message/Message";
import Conversation from "../../components/message/conversation/Conversation";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { io } from "socket.io-client";
import { TextareaAutosize } from "@mui/base";
import Send from '@mui/icons-material/SendRounded';


const Home = () => {
  
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", (users) => {
      console.log(users)
      
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:8080/conversation/"+ user.userId ); // Include valid protocol
        setConversations(res.data);
        
        
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.userid]); // Add an empty dependency array if you want to run the effect only once
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8080/message/"+ currentChat?._id ); // Include valid protocol
        setMessages(res.data);
        console.log(res)
        
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.userId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== user.userId
    );

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    });
    try {
      const res = await axios.post("http://localhost:8080/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    return (
     
      <div className="messenger">
        
        <div className="chatMenu">
          
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)} >
                <Conversation conversation={c}  currentUser={user}/>
              </div>
            ))}
            
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
          {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user.userId}  />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <TextareaAutosize
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  
                  ></TextareaAutosize>
                  <button className="chatSubmitButton"onClick={handleSubmit}> 
                    <Send/>
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
             
          </div>
        </div>
        
      </div>
    


             )
}

export default Home
