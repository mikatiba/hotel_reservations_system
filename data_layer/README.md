# Instrucciones para Recrear la Base de Datos del Sistema de Reservas de Hotel

Este archivo contiene los pasos necesarios para configurar y recrear la base de datos `hotel_reservations` utilizada en el Sistema de Reservas de Hotel.

## Requisitos Previos

1. **MariaDB** instalado y configurado.
2. Acceso a un usuario **no root** con permisos para crear bases de datos.
3. Scripts SQL disponibles en la carpeta `sql_scripts/`.

## Pasos para Recrear la Base de Datos

### 1. Acceso a MariaDB

Inicia sesión en MariaDB utilizando un usuario no root:
```bash
mysql -u hotel_user -p
