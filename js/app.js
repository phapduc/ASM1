import { customer_arr, travelAgency_arr, tour_arr } from './data.js';
const hien1Tour = (tour) => {
    return `<div>
        <h4>Tên tour: ${tour.tourName}</h4>
        <p>Khởi hành: ${tour.startDate}</p>
        <p>Ghi chú: ${tour.note}</p>
    </div>`;
};
export const showlisttour = () => {
    const html_arr = tour_arr.map(hien1Tour);
    return html_arr.join("");
};
const genderDisplay = (gender) => {
    if (typeof gender === 'boolean') {
        return gender ? "Nữ" : "Nam";
    }
    else {
        return gender;
    }
};
const hien1Customer = (customer) => {
    return `<div>
        <h4>Họ tên: ${customer.name}</h4>
        <p>Điện thoại: ${customer.phone}</p>
        <p>Giới tính: ${genderDisplay(customer.gender)}</p>
        <p>Tour: ${customer.tourName}</p>
        <p>Ghi chú: ${customer.note}</p>
    </div>`;
};
export const showlistkhachhang = () => {
    const html_arr = customer_arr.map(hien1Customer);
    return html_arr.join("");
};
const hien1TravelAgency = (agency) => {
    return `<div>
        <img src="${agency.image}" alt="${agency.name}">
        <h4>${agency.name}</h4>
        <p>${agency.address}</p>
    </div>`;
};
export const showlistdiadiem = () => {
    const html_arr = travelAgency_arr.map(hien1TravelAgency);
    return html_arr.join("");
};
const show1Brand = (brand) => {
    return `<div>${brand.name}</div>`;
};
export const showlistthuonghieu = async () => {
    try {
        const response = await fetch("http://localhost:3000/thuong_hieu");
        if (!response.ok)
            throw new Error("Network response was not ok");
        const brand_arr = await response.json();
        let str = '';
        brand_arr.forEach(brand => str += show1Brand(brand));
        return str;
    }
    catch (error) {
        console.error("Error fetching travel brands:", error);
        return `<p>Unable to fetch travel brands at this moment.</p>`;
    }
};