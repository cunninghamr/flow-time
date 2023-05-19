import type { TimeFlow } from "./time-flow";

export type Interruption = {
    id: string;
    timeFlow: TimeFlow;
    title: string;
};