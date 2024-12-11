# Base de Datos - Sistema de Reservas de Hotel

Este documento describe cómo recrear la base de datos necesaria para el Sistema de Reservas de Hotel.

## Requisitos
- MariaDB instalado.
- Acceso a la máquina virtual o servidor donde se ejecutará la base de datos.
- Usuario no root configurado (por ejemplo: `hotel_user`).

## Pasos para Recrear la Base de Datos

### 1. Acceso a MariaDB
Accede al sistema con el usuario no root:
```bash
mysql -u hotel_user -p
