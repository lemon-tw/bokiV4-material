import { Box, Chip } from "@mui/material";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import {
  DraggableChipListProps,
  CustomChipProps,
} from "../../../types/chipsExtends";
import React from "react";

const DraggableChipWrapper = ({
  item,
  index,
  getKey,
  getLabel,
  renderChip,
  draggingStyle = {},
}: {
  item: any;
  index: number;
  getKey: (item: any) => string;
  getLabel: (item: any) => string;
  renderChip?: (item: any) => React.ReactNode;
  draggingStyle?: any;
}) => {
  // 1. 拿到 Chip 元件 or CustomChipProps
  const chipRaw = renderChip ? renderChip(item) : { label: getLabel(item) };

  // 2. 確保有元件可 render
  const chipEl = React.isValidElement(chipRaw) ? (
    chipRaw
  ) : (
    <Chip {...(chipRaw as any)} />
  );

  // 3. 抓 avatar 判斷是否需要大圓角
  const hasAvatar =
    React.isValidElement(chipEl) &&
    !!(chipEl as React.ReactElement<any>).props.avatar;

  return (
    <Draggable draggableId={getKey(item)} index={index}>
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            borderRadius: hasAvatar ? "30px" : "8px",
            transform: snapshot.isDragging ? "scale(1.05)" : "none",
            boxShadow: snapshot.isDragging
              ? "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026"
              : "none",
            zIndex: snapshot.isDragging ? 999 : "auto",
            ...draggingStyle,
          }}
        >
          {chipEl}
        </Box>
      )}
    </Draggable>
  );
};

export const DraggableChips = ({
  chips,
  onChange,
  getLabel,
  getKey,
  renderChip,
  draggingStyle,
}: DraggableChipListProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newChips = Array.from(chips);
    const [removed] = newChips.splice(result.source.index, 1);
    newChips.splice(result.destination.index, 0, removed);
    onChange(newChips);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="chips" direction="horizontal">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
          >
            {chips.map((item, index) => (
              <DraggableChipWrapper
                key={getKey(item)}
                item={item}
                index={index}
                getKey={getKey}
                getLabel={getLabel}
                renderChip={renderChip}
                draggingStyle={draggingStyle}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};
