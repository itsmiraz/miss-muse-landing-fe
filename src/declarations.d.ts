// src/declarations.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '@fontsource/inter/*';

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
// src/types/svg.d.ts
declare module '*.svg?url' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.webp' {
  const value: string;
  export default value;
}
