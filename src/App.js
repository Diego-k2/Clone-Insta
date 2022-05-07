import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/header/header"
import Post from "./componentes/postagem/postagem";
import Story from "./componentes/story/story"
import sideBar from "./componentes/sideBar/sideBar"

function App() {

  const [posts, setPosts] = useState([
    {
      userPhoto: "https://www.otaviomiranda.com.br/wp-content/uploads/2018/07/foto-perfil-2.png",
      username: "carrot_cake",
      caption: "Felicidade!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      userPhoto: "http://1.bp.blogspot.com/-d4KJsuaPlfk/UqDbzuOSpnI/AAAAAAAAKeE/bqCQUrWVIcw/s1600/GioC.png",
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      userPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyKMxVzKLUaz60bFy0qYFnenGwUulxg6QnQ&usqp=CAU",
      username: "Steven_Universe",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    }
  ]);

  return (
    <div className="app">
      <div>
          <Header />
      </div>
      
      <div className="app-flex">
        <Story />
        {posts.map((post) => (
          <Post
            userphoto={post.userPhoto}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      <div>
        <sideBar/>
      </div>


    </div>
  );
}

export default App;