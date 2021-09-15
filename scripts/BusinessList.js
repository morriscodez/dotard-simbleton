import { useBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".allCompanies")


export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1> Businesses </h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

export const NYBusinessList = () => {
    const businessArray = useBusinesses()

    const newYorkBusinesses = businesses.filter(businessObject => {
        if ( businessObject.addressStateCode === "NY") {
            return true
        }
        return false
    })

    contentTarget.innerHTML = "<h1> NY Businesses </h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

