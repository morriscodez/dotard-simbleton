export const Business = (businessObj) => {
    return `
    <section class="business">
        <h2 class="business_type">${businessObj.type}</h2>
        <div class="business_price">
            Price: ${businessObj.price}
        </div>
</section>`
}