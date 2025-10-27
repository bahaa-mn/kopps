export function getInitials(firstname: string, lastname?: string): string {
  if (lastname)
    return `${firstname.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`
  return firstname.charAt(0).toUpperCase()
}
