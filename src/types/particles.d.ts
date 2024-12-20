interface Window {
  particlesJS: (id: string, options: any) => void;
  pJSDom: Array<{
    pJS: {
      fn: {
        vendors: {
          destroypJS: () => void;
        };
      };
    };
  }>;
} 