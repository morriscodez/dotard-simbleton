export const Business = (businessObj) => {
    return `
    <section class="business">
        <h2 class="business_companyName">${businessObj.companyName}</h2>
        <div class="business_address">
            ${businessObj.addressFullStreet}
            ${businessObj.addressStateCode}
            ${businessObj.addressZipCode}
        </div>
    </section>`
}