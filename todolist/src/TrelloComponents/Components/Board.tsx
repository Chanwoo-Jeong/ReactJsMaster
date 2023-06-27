import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          <Title>{boardId}</Title>
          {toDos.map((todo, i) => {
            return <DraggableCard todo={todo} i={i} />;
          })}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;
