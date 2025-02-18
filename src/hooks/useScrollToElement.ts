export const useScrollToElement = () => {
  const scrollToElement = (elementId: string, options?: { offset?: number }) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = options?.offset || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return scrollToElement;
};
