export const Business = (businessObj) => {
    return `
        <h2 class="business_name">${businessObj.companyName}</h2>
        <p class="business_full-street">${businessObj.addressFullStreet}</p>
        <p class="business_city_state_zip>${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
        <br>
    `
}