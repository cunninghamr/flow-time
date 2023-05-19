import type { Priority } from "./priority";
import type { Tag } from "./tag";
import type { TimeBlock } from "./time-block";
import type { TimeFlow } from "./time-flow";

export type Task = {
    id: string;
    title: string;
    notes: string;
    priority: Priority;
    tags: Tag[];
    timeFlows: TimeFlow[];
    timeBlocks: TimeBlock[];
};