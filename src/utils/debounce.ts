function debounce(func: any, wait: number, immediate: boolean, ...args: any) {
  let timeout: any;

  return function executedFunction() {
    //@ts-ignore
    const context = this;

    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debounce;
