import { TCustomer, TTour, TBooking, TTravelAgency, TGender } from './data.js';
import { customer_arr, travelAgency_arr, tour_arr } from './data.js';

// Function to display one tour
const hien1Tour = (tour: TTour) => {
    return `<div>
        <h4>Tên tour: ${tour.tourName}</h4>
        <p>Khởi hành: ${tour.startDate}</p>
        <p>Ghi chú: ${tour.note}</p>
    </div>`;
};

// Function to show all tours
export const showlisttour = () => {
    const html_arr = tour_arr.map(hien1Tour);
    return html_arr.join("");
};

// Function to display gender for customers
const genderDisplay = (gender: TGender) => {
    if (typeof gender === 'boolean') {
        return gender ? "Nữ" : "Nam";
    } else {
        return gender as string;
    }
};

// Function to display one customer
const hien1Customer = (customer: TBooking) => {
    return `<div>
        <h4>Họ tên: ${customer.name}</h4>
        <p>Điện thoại: ${customer.phone}</p>
        <p>Giới tính: ${genderDisplay(customer.gender)}</p>
        <p>Tour: ${customer.tourName}</p>
        <p>Ghi chú: ${customer.note}</p>
    </div>`;
};

// Function to show all customers
export const showlistkhachhang = () => {
    const html_arr = customer_arr.map(hien1Customer);
    return html_arr.join("");
};

// Function to display one travel agency
const hien1TravelAgency = (agency: TTravelAgency) => {
    return `<div>
        <img src="${agency.image}" alt="${agency.name}">
        <h4>${agency.name}</h4>
        <p>${agency.address}</p>
    </div>`;
};

// Function to show all travel agencies (should be for "Địa điểm du lịch")
export const showlistdiadiem = () => {
    const html_arr = travelAgency_arr.map(hien1TravelAgency);
    return html_arr.join("");
};

// Function to display one travel brand
const show1Brand = (brand: any) => {
    return `<div>${brand.name}</div>`;
};

// Function to fetch and display travel brands from an API
export const showlistthuonghieu = async () => {
    try {
        const response = await fetch("http://localhost:3000/thuong_hieu");
        if (!response.ok) throw new Error("Network response was not ok");
        
        const brand_arr = await response.json();
        let str = '';
        brand_arr.forEach(brand => str += show1Brand(brand));
        return str;
    } catch (error) {
        console.error("Error fetching travel brands:", error);
        return `<p>Unable to fetch travel brands at this moment.</p>`;
    }
};
