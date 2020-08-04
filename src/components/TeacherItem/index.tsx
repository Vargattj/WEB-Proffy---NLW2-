import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media.discordapp.net/attachments/482050007810310147/715600453437751356/99275967_662728614568077_1013703034514964480_n.png?width=359&height=468"
          alt="avatar"
        />
        <div>
          <strong>Jônatas Vargatt</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e mudar a vida das pessoas
        através de experiências. Mais de 200.000 pessoas já passaram por uma das
        minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="wpp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
