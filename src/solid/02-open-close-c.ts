// import axios from "axios";

/**
 * Principio Open and Close. Abierto a la extensión y Cerrado a la modificación.
 *
 * Como ejemplo, primero se usó axios, luego se cambió la librería a fetch para demostrar que no se tuvo
 * que tocar para nada el código cliente al realizar uno de estos cambios.
 */
export class HttpClient {

    // async get( url: string ) {
        // const { data, status } = await axios.get(url);
        // return { data, status };
    // }

    async get( url: string ) {
        const response = await fetch(url);
        if (!response.ok) {
            return { data: null, status: response.status };
        }
        const data = await response.json();
        return { data, status: 200 };
    }
}