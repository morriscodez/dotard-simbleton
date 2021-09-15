import { useBusinesses, NYBusinessList, ManufacturingBusinessList } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".allCompanies")
const NYContentTarget = document.querySelector(".businessList--NewYork")
const ManufacturingContentTarget = document.querySelector(".businessList--manufacturing")

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

export const ManufacturingBusinesses = () => {
    const ManufacturingBusinessArray = ManufacturingBusinessList
    ManufacturingContentTarget.innerHTML = "<h1> Manufacturing Businesses </h1>"

    ManufacturingBusinessArray.forEach(
        businessObject => {
            ManufacturingContentTarget.innerHTML += Business(businessObject)
        }    
    )
}

