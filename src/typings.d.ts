
 declare interface AttrGroup {
    nomodule?: string;
    integrity?: string;
    crossOrigin?: string;
    defer?: string;
    type?: string;
    src?: string;
    href?: string;
    name: string;
    fileName: string;
  }
  /** 仅仅为加载js文件*/
declare function loadRemoteModule(
  url: string,
  moduleName?: string
): Promise<any>; 
/**加载资源清单*/
declare function loadRemoteModuleManifest(config: {
  scripts: AttrGroup[];
  stylesheets: AttrGroup[];
}): Promise<any>
