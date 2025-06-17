import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Chip } from "@mui/material";
import { DragDropContext, Droppable, Draggable, } from "@hello-pangea/dnd";
export const DraggableChips = ({ chips, onChange, getLabel, getKey, renderChip, draggingStyle = {}, }) => {
    const handleDragEnd = (result) => {
        if (!result.destination)
            return;
        const newChips = Array.from(chips);
        const [removed] = newChips.splice(result.source.index, 1);
        newChips.splice(result.destination.index, 0, removed);
        onChange(newChips);
    };
    return (_jsx(DragDropContext, { onDragEnd: handleDragEnd, children: _jsx(Droppable, { droppableId: "chips", direction: "horizontal", children: (provided) => (_jsxs(Box, { ref: provided.innerRef, ...provided.droppableProps, sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: [chips.map((item, index) => (_jsx(Draggable, { draggableId: getKey(item), index: index, children: (provided, snapshot) => (_jsx(Box, { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, sx: {
                                borderRadius: 50,
                                // transition: "transform 0.2s, box-shadow 0.2s",
                                transform: snapshot.isDragging ? "scale(1.05)" : "none",
                                boxShadow: snapshot.isDragging ? 3 : "none",
                                zIndex: snapshot.isDragging ? 999 : "auto",
                                ...draggingStyle,
                            }, children: renderChip ? (renderChip(item)) : (_jsx(Chip, { label: getLabel(item) })) })) }, getKey(item)))), provided.placeholder] })) }) }));
};
