import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const toDos = ["a", "b", "c", "d", "e", "f"];

function TrelloClone() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((todo , i) => {
                  return (
                    <Draggable draggableId={todo} index={i}>
                      {(magic) => (
                        <Card
                          ref={magic.innerRef}
                          {...magic.draggableProps}
                          {...magic.dragHandleProps}
                        >
                          {todo}
                        </Card>
                      )}
                    </Draggable>
                  );
                })}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 48rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  background-color: ${({ theme }) => theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.cardColor};
`;

export default TrelloClone;
