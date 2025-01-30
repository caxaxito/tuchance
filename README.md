# tuchance
Repositorio para almacenar el código para la cumplir la prueba técnica segun lo solicitado.

# Archivo Postman
edgar@pixtig.com

{
	"info": {
		"_postman_id": "6109f3ed-cf8a-46c1-baaf-a20d63a4380f",
		"name": "TuChance",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "2372873"
	},
	"item": [
		{
			"name": "consultar-alumno",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{urlTuChance}}consultar-alumno/:grado",
					"host": [
						"{{urlTuChance}}consultar-alumno"
					],
					"path": [
						":grado"
					],
					"variable": [
						{
							"key": "grado",
							"value": "3"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "crear-alumno",
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "admin2025",
							"type": "string"
						},
						{
							"key": "username",
							"value": "Carlos",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"id\": 7,\r\n    \"nombre\": \"Pedro Picapiedra\",\r\n    \"fecha_nacimiento\": \"2000-05-05\",\r\n    \"nombredelpadre\": \"Jorge Pica\",\r\n    \"nombredelamadre\": \"Maria Piedra\",\r\n    \"grado\": 3,\r\n    \"seccion\": \"A\",\r\n    \"fechaingreso\": \"2025-01-30T01:23:40.335429Z\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{urlTuChance}}crear-alumno/",
					"host": [
						"{{urlTuChance}}crear-alumno"
					],
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "obtener-token",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"carlos\",\r\n    \"password\": \"admin2025\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{urlTuChance}}obtener/token/",
					"host": [
						"{{urlTuChance}}obtener"
					],
					"path": [
						"token",
						""
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "urlTuChance",
			"value": "http://127.0.0.1:8000/api/",
			"type": "string"
		}
	]
}

