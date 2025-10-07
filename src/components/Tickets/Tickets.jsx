import React, { use, useState } from 'react';
import Ticket from './Ticket';
import { toast } from 'react-toastify';

const Tickets = ({ fetchTickets, setInProgress, inProgress, setResolved, resolved }) => {
    const tickets = use(fetchTickets);

    const [addTasks, setAddTasks] = useState([]);
    const [resolveTasks, setResolveTask] = useState([]);
    const [card, setCard] = useState(tickets);

    const tasks = (id) => {
        const newAddTasks = tickets.find(ticket => ticket.id === id);
        const newTasks = [...addTasks, newAddTasks];
        setAddTasks(newTasks);
    };

    const taskResolved = (id) => {
        const newResolveTasks = tickets.find(ticket => ticket.id === id);
        const newTasks = [...resolveTasks, newResolveTasks];
        setResolveTask(newTasks);
    };

    const handleComplete = (id) => {
        console.log(id)
        setAddTasks(addTasks => {
            const tasks = [...addTasks];
            const index = tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
            return tasks;
        });

        setResolved(resolved + 1);
        setInProgress(inProgress - 1);
        taskResolved(id);
        toast.success("Resolved task");

        const updatedCards = card.filter(updatedCard => updatedCard.id !== id);
        setCard(updatedCards);
    };

    return (
        <div className="max-w-[95%] md:max-w-[1270px] mx-auto flex flex-col md:flex-row gap-6">
            {/* Ticket List */}
            <div className="w-full md:w-2/3 max-w-[1270px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min transition-all duration-300 ease-in-out">
                {card.map(ticket => (
                    <Ticket
                        key={ticket.id}
                        ticket={ticket}
                        setInProgress={setInProgress}
                        inProgress={inProgress}
                        tasks={tasks}
                    />
                ))}
            </div>

            {/* Task Status Section */}
            <div className="w-full md:w-1/3 max-w-sm h-screen md:h-[90vh] mx-auto mt-8 md:mt-0 overflow-y-auto">
                <h1 className="text-2xl font-semibold mb-4">Task Status</h1>

                {addTasks.length === 0 && (
                    <p className="text-base text-gray-500 mb-4">
                        Select a ticket to add to Task Status
                    </p>
                )}

                {/* Active Tasks */}
                <div>
                    {addTasks.map((addTask, index) => (
                        <div
                            key={index}
                            className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition mb-4"
                        >
                            <p className="text-lg font-medium text-gray-900 mb-3">
                                {addTask.title}
                            </p>
                            <button
                                onClick={() => handleComplete(addTask.id)}
                                className="w-full rounded-md bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition-colors duration-200"
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>

                {/* Resolved Tasks */}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold mb-4">Resolved Task</h1>
                    {resolveTasks.length === 0 && (
                        <p className="text-base text-gray-500 mb-4">Empty</p>
                    )}
                    {resolveTasks.map((resolveTask, index) => (
                        <div
                            key={index}
                            className="w-full rounded-2xl border border-gray-200 bg-green-100 hover:bg-green-200 p-4 shadow-md mb-4 transition"
                        >
                            <p className="text-lg font-semibold text-gray-800 mb-2">
                                {resolveTask.title}
                            </p>
                            <p className="text-sm font-bold text-green-600">Completed</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tickets;
