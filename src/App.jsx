import { useState } from "react";

import { v4 as uuid } from "uuid";

import { FcFullTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, Div } from "./styles.js";

function App() {
  //código javascript

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function input(event) {
    setTask(event.target.value);

    console.log(list);
  }

  function cliqueiNoBotao() {
    if (task) {
      setList([...list, { id: uuid(), task, fineshed: false }]);
    }
  }

  function taskFineshed(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, fineshed: !item.fineshed } : item
    );

    setList(newList);
  }

  function deleteTask(id) {
    const deleteList = list.filter((item) => item.id !== id);

    setList(deleteList);
  }

  //abaixo do return código html, quando inserir dentro do html javascript precisa ser dentro do {}
  return (
    <Container>
      <ToDoList>
        <Input onChange={input} placeholder="O que tenho para fazer..."></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <Div $isFinished={item.fineshed} key={item.id}>
                <FcCheckmark onClick={() => taskFineshed(item.id)} />
                <li>{item.task}</li>
                <FcFullTrash onClick={() => deleteTask(item.id)} />
              </Div>
            ))
          ) : (

            <h3>Não há itens na lista</h3>
          )
          }
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
