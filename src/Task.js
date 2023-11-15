import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr as trLocale } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const formattedDeadline = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: trLocale,
    addSuffix: true,
  });

  const daysUntilDeadline = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  );

  const youAreLate = daysUntilDeadline <= 3 ? `bg-[#ffd9d4]` : `normal`;

  return (
    <div className="task p-6 bg-white rounded-md leading-normal mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline text-xs pt-1">
        son teslim:{" "}
        <span className={`py-1 px-2 ${youAreLate}`}>{formattedDeadline}</span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="pill inline-block py-1.5 px-3 border-solid border border-[#ccc] mr-1 mb-1.5 rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-md rounded-sm border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
