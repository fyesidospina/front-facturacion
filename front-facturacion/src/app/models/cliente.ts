export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: GetCliente[];
  }

  export interface GetCliente {
    _id?: number;
    nombres?: string;
    apellidos?: string;
    edad?: number;
        
  }