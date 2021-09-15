import { Agent } from "./Agent.js";
import { useBusinesses } from "./BusinessProvider.js";
import { ExtractPurchaseAgents } from "./ExtractPurchaseAgent.js";

export const PurchaseAgentList = () => {
    const businessArray = useBusinesses()
    const agentArray = ExtractPurchaseAgents(businessArray)
    const contentTarget = document.querySelector('.allAgents')

    let agentHTML = ""

    agentArray.forEach(agent => {
        agentHTML =+ Agent(agent)
    })

    contentTarget.innerHTML += `<h2 class="purchase-agent-title">Purchasing Agent </h2>
                                ${agentHTML}`

    // search functionality, agents

    const agentSearchResultArticle = document.querySelector(".foundAgents")

    document
        .querySelector("#agentSearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                const foundAgent = []
                const searchKey = keyPressEvent.target.value.toLowerCase()

                if (searchKey === "") {
                    agentSearchResultArticle.innerHTML = ""
                    contentTarget.innerHTML = ""
                    return PurchaseAgentList()
                }
                foundAgent.push(agentArray.find(agent => {
                    return agent.fullName.toLowerCase().includes(searchKey)
                }))
                console.log(foundAgent)
                let foundAgentHTML = ""
                foundAgent.forEach(agent => {
                    foundAgentHTML += PurchaseAgentList(agent)
                })
                contentTarget.innerHTML = ""
                agentSearchResultArticle.innerHTML = foundAgentHTML
            }
        })
}