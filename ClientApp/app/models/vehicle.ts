export interface KeyValuePair {
    id: number;
    name: string;
}

export interface Contact {
    name: string;
    phone: string;
    email: string;
}

export interface Vehicle {
    id: number;
    make: KeyValuePair;
    model: KeyValuePair;
    isRegistered: boolean;
    features: KeyValuePair[];
    contact: Contact;
    lastUpdate: string;
}

export interface SaveVehicle {
    id: number;
    makeId: number;
    modelId: number;
    isRegistered: boolean;
    features: number[];
    contact: Contact;
}