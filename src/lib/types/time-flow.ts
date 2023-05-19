import type { Interruption } from "./interruption";
import type { Task } from "./task";

export type TimeFlow = {
    id: string;
    task: Task;
    date: Date;
    startTime: Date;
    endTime: Date;
    interruption?: Interruption;
    breakTime?: number;
};