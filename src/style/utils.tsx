function getActiveClasses(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([_className, isActive]) => isActive)
    .map(([className]) => className)
    .join(" ");
}

export { getActiveClasses };
