import jobs from '../dictionaries/jobs.json';
import dreams from '../dictionaries/dreams.json';
import cards from '../dictionaries/cards.json';
import type { Card, DreamOption, JobOption } from '../types/dictionaries';

export const getJobs = () => {
    return jobs as JobOption[];
};

export const getDreams = () => {
    return dreams as DreamOption[];
};

export const getCard = (jobId: string) => {
    const convertedCards = cards as { [key: string]: Card };
    return convertedCards[jobId];
};