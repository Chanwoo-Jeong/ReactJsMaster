import React from "react"
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragableCardsProps {
  todo: string;
  i: number;
}

function DraggableCard({ todo, i }: IDragableCardsProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={i}>
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
}
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.cardColor};
`;

//DraggableCard 의 prop 이 변경되지 않는다면 이 컴포넌트를 재렌더링하지마세요 => React.memo
export default React.memo(DraggableCard);
