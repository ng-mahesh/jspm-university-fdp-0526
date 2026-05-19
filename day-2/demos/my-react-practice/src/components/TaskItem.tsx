import React from "react";

interface TaskItemProps{
    id: number,
    title: string,
    isCompleted: boolean,
    onToggleComplete: (id: number) => void
}

const TaskItem: React.FC<TaskItemProps> = ({id, title, isCompleted, onToggleComplete}) => {

    return (
        <div>
            <input type="checkbox" checked= {isCompleted} onChange={()=> onToggleComplete(id)}/>
            <span>{title}</span>
        </div>
    )

};

export default TaskItem;