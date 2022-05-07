import React from "react";
import "./postagem.css";


function Post({userphoto, username, caption, imageUrl }) {
    return (
      <div className="post caixaPost">
        <div className="post_header">
          {/* Header: avatar with username */}
          <div className="flex-display">
            <img className="imagemPerfil" src={userphoto}/>
            <h3>{username}</h3>
          </div>
          
          <div>
            <button><img src="https://img.icons8.com/material-outlined/24/000000/more.png"/></button>
          </div>
        </div>
  
        {/* Image */}
        <img className="post_image" src={imageUrl} alt="" />
        {/* Username + caption */}
  
        <div className="interacoes">
          <div>
            <button><img src="https://img.icons8.com/ios/24/000000/like--v1.png" className="botoesLike"/></button>
            <button><img src="https://img.icons8.com/ios/24/000000/speech-bubble--v1.png" className="botoesLike"/></button>
            <button><img src="https://img.icons8.com/dotty/24/000000/gps-device.png" className="botoesLike"/></button>
          </div>
        
          <div className="marcador">
            <button><img src="https://img.icons8.com/small/24/000000/bookmark-ribbon.png"/></button>
          </div>
  
        </div>
        
        <h4>{Math.round(Math.random() * (300 - 2) + 2)} curtidas</h4>
  
        <div className="post_text">
          <strong>{username}: </strong> 
           
        {caption}
  
        <p className="data_post">HÁ {Math.round(Math.random() * (23 - 2) + 2)} HORAS</p>
  
        </div>
  
        <div className="caixa-comentario">
          <button>
          <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          </button>
          
          <input type="text" className="comentario-texto" placeholder="Adicione um comentário..."></input>
  
          <button className="publicar">Publicar</button>
  
        </div>
  
  
  
      </div>
    );
  }
export default Post;






















//AUTOR DIEGO SANTOS SILVA DISPENSA CÓPIAS