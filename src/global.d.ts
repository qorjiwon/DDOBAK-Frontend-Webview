export {}

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        [handlerName: string]: {
          postMessage: (message: any) => void
        }
      }
    }
  }
}