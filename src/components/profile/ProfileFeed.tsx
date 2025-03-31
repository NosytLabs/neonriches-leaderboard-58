
// Update lines with string|number issues to use toString()
// Modifying the key={userId} line to ensure it's a string

const userId = typeof user.id === 'number' ? user.id.toString() : user.id.toString();
