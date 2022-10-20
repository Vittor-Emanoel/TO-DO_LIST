import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useAlert } from "react-alert";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://fsc-task-manager-backend.herokuapp.com/tasks"
            );

            setTasks(data);
        } catch (_error) {
            alert.error("Não foi possível recuperar as tarefas");
        }
    };

    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            task={lastTask}
                            fetchTasks={fetchTasks}
                            key={lastTask._id}
                        />
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {completedTask.map((completedTask) => (
                        <TaskItem
                            task={completedTask}
                            fetchTasks={fetchTasks}
                            key={completedTask._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
