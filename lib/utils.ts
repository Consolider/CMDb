// Math round IMDb rating
export function roundToNearest(number: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

// Kebab-case string
export function toURL(input: string): string {
    return input
        .toLowerCase()                  // Convert to lowercase
        .trim()                         // Remove leading/trailing whitespace
        .replace(/[^a-z0-9\s]/g, '')    // Remove special characters
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/^-|-$/g, '');         // Remove any leading/trailing hyphens
}
