import { Photo } from "./photo";


export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    intro?: any;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}