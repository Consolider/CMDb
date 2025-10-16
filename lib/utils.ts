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

// Fix image URL
export function imageURL(input: string) {
    return input
        .trim()                 // Remove leading/trailing whitespace
        .replace(/^\//g, '');   // Remove any leading forward slash
}

// Convert Minutes To Hours
export function runtimeConv(minutes: number): string {
    const hours = Math.floor(minutes / 60);  // Get the whole hours
    const remainingMinutes = minutes % 60;    // Get the remaining minutes

    return `${hours}h ${remainingMinutes}m`;  // Format the string
}

// Generate random number
export function getRandomNumber(): number {
    return Math.floor(Math.random() * 11); // 11 is used to include 10
}

// Convert date to year only
export function extractYear(dateString: string): string {
    return dateString.split('-')[0];
}

// Convert number to gender
export function getGender(value: number): string {
    switch(value) {
        case 0:
            return "Not set / not specified";
        case 1:
            return "Female";
        case 2:
            return "Male";
        case 3:
            return "Non-binary";
        default:
            return "Unknown value";
    }
}