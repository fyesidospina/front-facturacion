export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: GetInventario[];
  }

  export interface GetInventario {
    id?: number; 
    id_producto:number;
    cantidad:number;
    valor_und: number;
    existencia: number; 
  }

  export interface GetInventarioList {
    _id?: number;
    nombre_producto: string;
  }