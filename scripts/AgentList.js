import { Agent } from "./Agent.js";
import { PurchasingAgents } from "./BusinessProvider.js";

const contentTarget = document.querySelector(".agents")

export const AgentList = () => {
    const agentArray = PurchasingAgents
    
    contentTarget.innerHTML = "<h1> Purchasing Agents </h1>"

    agentArray.forEach(agentObj => {
        contentTarget.innerHTML += Agent(agentObj)
    });
}