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
}