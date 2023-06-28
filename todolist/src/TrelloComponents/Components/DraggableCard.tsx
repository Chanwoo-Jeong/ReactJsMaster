import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragableCardsProps {
  toDoId: number;
  toDoText: string;
  i: number;
}

function DraggableCard({ toDoId, toDoText, i }: IDragableCardsProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={i}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          isDragging={snapshot.isDragging}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

//DraggableCard 의 prop 이 변경되지 않는다면 이 컴포넌트를 재렌더링하지마세요 => React.memo
export default React.memo(DraggableCard);
