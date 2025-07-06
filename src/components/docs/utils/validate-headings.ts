/**
 * Utility to validate uniqueness of heading IDs in the document
 * This is useful for debugging duplicate heading ID issues in the Table of Contents
 */
export function validateHeadingIds(): void {
  // Only run in browser environment
  if (typeof document === 'undefined') return;
  
  // Get all headings
  const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingIds = new Map<string, HTMLElement[]>();
  const emptyIds: HTMLElement[] = [];
  
  // Group headings by ID
  headingElements.forEach((heading) => {
    const id = heading.id;
    if (!id) {
      emptyIds.push(heading as HTMLElement);
      return;
    }
    
    const existingHeadings = headingIds.get(id) || [];
    existingHeadings.push(heading as HTMLElement);
    headingIds.set(id, existingHeadings);
  });
  
  // Find duplicates
  const duplicates = Array.from(headingIds.entries())
    .filter(([, headings]) => headings.length > 1);
  
  // Log results
  if (duplicates.length > 0) {
    console.warn(`Found ${duplicates.length} duplicate heading IDs:`);
    duplicates.forEach(([id, headings]) => {
      console.warn(`ID: "${id}" is used by ${headings.length} headings:`);
      headings.forEach((heading, i) => {
        console.warn(`  ${i + 1}. <${heading.tagName.toLowerCase()}> "${heading.textContent}"`);
      });
    });
  } else {
    console.log(`All heading IDs are unique (${headingIds.size} total)`);
  }
  
  if (emptyIds.length > 0) {
    console.warn(`Found ${emptyIds.length} headings without IDs:`);
    emptyIds.forEach((heading, i) => {
      console.warn(`  ${i + 1}. <${heading.tagName.toLowerCase()}> "${heading.textContent}"`);
    });
  }
}
