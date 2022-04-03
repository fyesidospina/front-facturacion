export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: GetInventario[];
  }

  export interface GetInventario {
    _id?: number;    
  }

  export interface GetInventarioList {
    _id?: number;
    nombre_producto: string;
  }