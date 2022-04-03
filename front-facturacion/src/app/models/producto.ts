export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: GetProducto[];
  }

  export interface GetProducto {
    _id?: number;
    nombre_producto?: string;
    Descripcion?: string;    
  }