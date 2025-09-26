export interface Project {
    title: string;
    organisation?: string;
    description: string;
    tags: string[];
    images?: string[];
    isFeatured?: boolean;
    url?: string;
    indev?: boolean;
}