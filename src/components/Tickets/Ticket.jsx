import React from 'react';
import Calender from '../../assets/Vector.png';
import { toast } from 'react-toastify';

const Ticket = ({ ticket, setInProgress, inProgress, tasks }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    const handleStatus = () => {
        setInProgress(inProgress + 1);
        toast.success("Added in task status");
        tasks(id);
    };

    return (
        <div onClick={handleStatus} className="w-full max-w-md h-[130px] bg-white shadow-md rounded-xl p-4 border border-gray-200 mt-[15px] md:mt-[16px] hover:shadow-lg transition">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
                <span className={`flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-full 
                    ${status === "Open"
                        ? "bg-green-100 text-green-500"
                        : status === "Closed"
                            ? "bg-red-100 text-red-500"
                            : "bg-amber-300 text-amber-800"
                    }`}>
                    <span className={`w-2 h-2 rounded-full ${status === "Open" ? "bg-green-500" : status === "Closed" ? "bg-red-500" : "bg-amber-800"}`}></span>
                    {status}
                </span>
            </div>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
            <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500">#<span>{id}</span></span>
                    <span className="font-semibold text-red-500">{priority}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <span>{customer}</span>
                    <img src={Calender} alt="calendar" className="w-4 h-4" />
                    <span>{createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
