import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { DraggableChips } from "../../components/Atom/Chips/DraggableChips";
const meta = {
    title: "components/chips/DraggableChips",
    component: DraggableChips,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;
export const Draggable = {
    render: (args) => {
        const [list, setList] = useState([
            { id: "1", name: "Apple" },
            { id: "2", name: "Banana" },
            { id: "3", name: "Orange" },
        ]);
        return (_jsx(DraggableChips, { ...args, chips: list, onChange: setList, getKey: (item) => item.id, getLabel: (item) => item.name }));
    },
};
