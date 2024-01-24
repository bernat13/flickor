import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServCatalogoService {

  fotos=[
        {
            "id": 1,
            "titulo": "Mudanza",
            "descripcion": "Mudanza española, 2 trabajando y 20 mirando.",
            "autor": "Pepe Gotera",
            "fecha_toma": "2023-05-15",
            "visualizaciones": 1200,
            "latitud": 34.0522,
            "longitud": -118.2437,
            "ruta": "./assets/fotos/01mudanza"
        },
        {
            "id": 2,
            "titulo": "Concierto en el desierto",
            "descripcion": "Concierto en medio del desierto con piramides de fondo.",
            "autor": "Luis Amstrong",
            "fecha_toma": "2023-07-22",
            "visualizaciones": 980,
            "latitud": 39.5501,
            "longitud": -106.0674,
            "ruta": "./assets/fotos/02jazzeneldesierto"
        },
        {
            "id": 3,
            "titulo": "Tornado",
            "descripcion": "Un tornado con ua sonrisa y sin preocupación.",
            "autor": "Julio Verne",
            "fecha_toma": "2023-07-22",
            "visualizaciones": 1500,
            "latitud": 39.5501,
            "longitud": -106.0674,
            "ruta": "./assets/fotos/03tornado"
        },
        {
            "id": 4,
            "titulo": "Boxeo",
            "descripcion": "Mohamed Ali en plena acción.",
            "autor": "Mohamed Ali",
            "fecha_toma": "2001-09-22",
            "visualizaciones": 400,
            "latitud": 39.5501,
            "longitud": 106.0674,
            "ruta": "./assets/fotos/04boxeo.jpeg"
        },
        {
            "id": 5,
            "titulo": "Cumpleaños",
            "descripcion": "Cumpleaños de Laura Armstrong soplando las velas",
            "autor": "Laura Armstrong",
            "fecha_toma": "2001-01-22",
            "visualizaciones": 800,
            "latitud": 39.5501,
            "longitud": -67.0674,
            "ruta": "./assets/fotos/05cumple.jpeg"
        },
        {
            "id": 6,
            "titulo": "Caballo",
            "descripcion": "Un caballo gigante en medio de broklin.",
            "autor": "Leo Harlem",
            "fecha_toma": "2012-07-22",
            "visualizaciones": 4000,
            "latitud": 74.5501,
            "longitud": -106.0674,
            "ruta": "./assets/fotos/06caballoenbroklin.jpeg"
        },
        {
            "id": 7,
            "titulo": "Pizarra",
            "descripcion": "Escalera ante una pizarra matematica en la universidad.",
            "autor": "Alan Turing",
            "fecha_toma": "1956-07-22",
            "visualizaciones": 123,
            "latitud": -139.5501,
            "longitud": -106.0674,
            "ruta": ".src/assets/fotos/07pizarrauniversidad.jpeg"
        },
        {
            "id": 8,
            "titulo": "Avion",
            "descripcion": "Primer vuelo de un avion en la historia.",
            "autor": "Hermanos Wright",
            "fecha_toma": "1906-07-22",
            "visualizaciones": 14,
            "latitud": 139.5501,
            "longitud": -106.0674,
            "ruta": "./assets/fotos/08primervuelo.jpeg"
        },
        {
            "id": 9,
            "titulo": "Eistein",
            "descripcion": "La lengua de Eisntein es una de las mas famosas de la historia.",
            "autor": "Albert Nadal",
            "fecha_toma": "2001-07-22",
            "visualizaciones": 678,
            "latitud": 39.5501,
            "longitud": -106.067,
            "ruta": "./assets/fotos/09insteinslengua.jpeg"
        },
        {
            "id": 10,
            "titulo": "Escoceses",
            "descripcion": "Escoceses visitando Italica.",
            "autor": "William Wallace",
            "fecha_toma": "1967-07-22",
            "visualizaciones": 78978,
            "latitud": 23.5501,
            "longitud": -106.067,
            "ruta": "./assets/fotos/10escocesesenitalica.jpeg"
        }
    ]

  constructor() { }

  getAll(){
    return this.fotos;
  } 
}