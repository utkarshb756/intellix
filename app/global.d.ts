// global.d.ts
interface ProveSrc {
  dq: any[];
  display: (...args: any[]) => void;
  init: (config: { apiKey: string; v: string }) => void;
}

interface Window {
  iFrameResize?: (options: object, selector: string) => void;
  provesrc: ProveSrc;
  _provesrcAsyncInit: () => void;
}
