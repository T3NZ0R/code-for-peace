export const hoursDecimal = (time) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    return `${hours}h ${minutes}m`;
}

export const statusColor = (status) => {
    switch (status) {
        case "created":
            return "green"
        case "in_review":
            return "orange"
        case "in_deploy":
            return "orange"
        case "running":
            return "orange"
        case "cancel":
            return "red"
        default:
            break;
    }
}
