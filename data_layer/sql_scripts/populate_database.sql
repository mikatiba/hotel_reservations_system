-- Insertar datos en la tabla `clientes`
INSERT INTO clientes (nombre, direccion, telefono, email)
VALUES
    ('Juan Pérez', 'Calle Falsa 123', '555-1234', 'juan.perez@example.com'),
    ('María García', 'Avenida Siempre Viva 456', '555-5678', 'maria.garcia@example.com'),
    ('Carlos López', 'Boulevard de los Sueños 789', '555-9012', 'carlos.lopez@example.com');

-- Insertar datos en la tabla `habitaciones`
INSERT INTO habitaciones (numero_habitacion, tipo, descripcion, precio, estado, imagen)
VALUES
    ('101', 'Sencilla', 'Habitación sencilla con cama individual', 50.00, 'Disponible', '/imagenes_habitaciones/101.jpg'),
    ('102', 'Doble', 'Habitación doble con dos camas individuales', 75.00, 'Disponible', '/imagenes_habitaciones/102.jpg'),
    ('201', 'Matrimonial', 'Habitación matrimonial con cama king size', 100.00, 'Disponible', '/imagenes_habitaciones/201.jpg'),
    ('202', 'Suite', 'Suite de lujo con vista al mar', 150.00, 'Disponible', '/imagenes_habitaciones/202.jpg'),
    ('301', 'Presidencial', 'Habitación presidencial con todas las comodidades', 250.00, 'Disponible', '/imagenes_habitaciones/301.jpg');

-- Insertar datos en la tabla `reservas`
INSERT INTO reservas (cliente_id, habitacion_id, fecha_inicio, fecha_fin, estado)
VALUES
    (1, 101, '2023-01-15', '2023-01-20', 'Activa'),
    (2, 201, '2023-02-01', '2023-02-05', 'Activa'),
    (3, 202, '2023-03-10', '2023-03-15', 'Activa');