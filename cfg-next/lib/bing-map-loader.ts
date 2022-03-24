export interface MapWindow extends Window {
    Microsoft: any;
    bingAPIReady: () => void; 
  }
  
  declare let window: MapWindow;
  export let Microsoft: any;
  
  
  export function loadBingApi(key?: string): Promise<void> {
    const callbackName = "GetMap";
    let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;
    if (key) {
      url += `&key=${key}`;
    }
  
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = url;
      window.bingAPIReady = () => {
        Microsoft = window.Microsoft;
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }
  