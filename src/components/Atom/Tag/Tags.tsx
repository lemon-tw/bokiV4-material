import React from "react";
import Tag from "./Tag";
import { TagListProps } from "../../../types/tagExtends"; // 你的 Tag 資料型別

const Tags: React.FC<TagListProps> = ({ tags, onTagClick }) => (
    <>
        {tags.map(tag => (
            <Tag
                key={tag.id}
                label={tag.label}
                color={tag.color}
                variant={tag.variant}
                icon={tag.icon}
                onlyText={tag.onlyText}
                onClick={onTagClick ? () => onTagClick(tag) : undefined}
            />
        ))}
    </>
);

export default Tags;
