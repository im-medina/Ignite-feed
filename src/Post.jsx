//props recebe um objeto { author: "", content: ""}
export function Post(props){
  return (
    <div>
      <strong>{props.author}</strong> 
      <p>{props.content}</p>
    </div>
  ) 
}

/* 
- Para exebir o valor de uma variavel JS dentro de uma tag HTML, usa as chaves {} 
- O uso dos paresentes serve para poder quebrar a linha do return
- O uso da DIV é necessário para não dar erro ao colocar um elemento em cima do outro 
*/