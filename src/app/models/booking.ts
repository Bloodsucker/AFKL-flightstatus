export interface ContactDetail {
    "@class": 'EmailAddress';
    address: string;
}

export interface Ininerary {
    type: 'ONE_WAY' | 'RETURN';
    connections: Connection[]
}

export interface CodeName <T extends string = string> {
    code: T;
    name: string;
}

export interface Connection {
    id: number;
    duration: string;
    origin: AirportInfo;
    destination: AirportInfo;
    segments: ConnectionSegment[];
}

export interface ConnectionSegment {
    id: number;
    type: 'LOCAL';
    informational: boolean;
    departFrom: AirportInfo;
    arriveOn: AirportInfo;
    marketingFlight: MarketingFlight;
}

type CARRIER_CODES = 'KL' | 'VY';
interface CarrierCode {
    code: CARRIER_CODES;
    name: string;
}

export interface MarketingFlight {
    number: string;
    carrier: CarrierCode;
    status: {
        code: 'CONFIRMED' | 'PENDING';
        name: string;
    };

    numberOfStops: number;
    sellingClass: {
        code: string;
    }

    operatingFlight: OperationFlight
}

type DATE_STRING = string;

export interface OperationFlight {
    number: number;
    carrier: CarrierCode;
    duration: string;
    flown: boolean;
    checkInStart: DATE_STRING;
    localCheckInStart: DATE_STRING;
    checkInEnd: DATE_STRING;
    localCheckInEnd: DATE_STRING;
    scheduledArrival: DATE_STRING;
    localScheduledArrival: DATE_STRING;
    scheduledDeparture: DATE_STRING;
    localScheduledDeparture: DATE_STRING;
    arrivalTerminal: {
        name: string;
    }
    cabin: {
        code: string;
        name: string;
    }
    equipment: {
        code: string;
        name: string;
    }
}

export interface AirportInfo {
    IATACode: string;
    name: string;
    city: {
        IATACode: string;
        name: string;
        country: {
            code: string;
            name: string;
        }
    }
}

export interface Passenger {
    firstName: string;
    lastName: string;
    title: {
        code: 'MR' | 'MRS';
        name: string;
    }
}

export interface Booking {
    bookingCode: string;
    contactDetails: ContactDetail[];
    itinerary: Ininerary
    passengers: Passenger;
}