export const Agent = (agentObj) => {
    return `
        <h2 class="agent_name">${agentObj.fullName}</h2>
        <p>Company: ${agentObj.company}</p>
        <p>Phone Number: ${agentObj.phoneNumber}</p>
        <br>
    `
}