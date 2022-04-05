export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: GetProducto[];
  }

  export interface GetProducto {
    id?: number;
    nombre_producto?: string;
    Descripcion?: string;    
  }


  export interface DropDownProducto {
    nombre_producto?: string;    
  }

  export interface GetProductoLIst {
    id?: number;
    nombre_producto?: string;    
  }