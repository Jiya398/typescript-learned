//Intersection Types

//type typeAB = typeA & typeB;

interface BusinessPartner {
     name: string;
     credit: number;
 }
 interface Identity {
     id: number;
     name: string;
 }
 interface Contact {
     email: string;
     phone: string;
 }

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;


type Employees = Identity & Contact;
let e: Employees = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

type Customers = BusinessPartner & Contact;
let c: Customers = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};



type Employeess = Identity & BusinessPartner & Contact;
let em: Employeess = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
