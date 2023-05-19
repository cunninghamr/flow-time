import type { Task } from "./task";

export type TimeBlock = {
    id: string;
    task: Task;
    date: Date;
    startTime: Date;
    endTime: Date;
};