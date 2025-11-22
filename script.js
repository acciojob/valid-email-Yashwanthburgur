function validEmail(str) {
    // Edge case: empty string
    if (!str || str.length === 0) return false;
    
    // Must contain exactly one '@'
    if (!str.includes('@')) return false;
    
    const parts = str.split('@');
    
    // Must have exactly 2 parts (local@domain)
    if (parts.length !== 2) return false;
    
    const [localPart, domainPart] = parts;
    
    // Local part cannot be empty
    if (localPart.length === 0) return false;
    
    // Domain part must contain at least one dot
    if (!domainPart.includes('.')) return false;
    
    const domainParts = domainPart.split('.');
    
    // Must have at least 2 domain parts (example.com)
    if (domainParts.length < 2) return false;
    
    // Last part (TLD) must be 2-3 characters
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2 || tld.length > 3) return false;
    
    // All domain parts must be non-empty
    for (let part of domainParts) {
        if (part.length === 0) return false;
    }
    
    return true;
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
