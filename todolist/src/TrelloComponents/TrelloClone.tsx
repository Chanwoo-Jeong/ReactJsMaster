import { DragDropContext, DropResult,} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

function TrelloClone() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    // setToDos((oldToDos) => {
    //   const toDosCopy = [...oldToDos];
    //   toDosCopy.splice(source.index, 1);
    //   toDosCopy.splice(destination?.index, 0, draggableId);
    //   return toDosCopy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
        {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 68rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    }
`;



export default TrelloClone;
