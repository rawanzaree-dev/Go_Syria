export function sorting(sortItem, arr) {
    return sortItem === "low" 
        ? [...arr].sort((a, b) => a.priceFrom - b.priceFrom)
        : sortItem === "high"
        ? [...arr].sort((a, b) => b.priceFrom - a.priceFrom)
        : [...arr].sort((a, b) => b.rating - a.rating);
}