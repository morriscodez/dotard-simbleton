import { useBusinesses, NYBusinessList } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".allCompanies")
const NYContentTarget = document.querySelector(".businessList--NewYork")


export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1> Businesses </h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

export const NYBusinesses = () => {
    const NYBusinessArray = NYBusinessList
    NYContentTarget.innerHTML = "<h1> NY Businesses </h1>"

    NYBusinessArray.forEach(
        businessObject => {
            NYContentTarget.innerHTML += Business(businessObject)
        }    
    )
}

