import type { TagGroup } from "./tag-group";

export type Tag = {
    id: string;
    group: TagGroup;
    name: string;
    color: string;
};