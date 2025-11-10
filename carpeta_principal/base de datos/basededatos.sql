-- Crear la base de datos
CREATE DATABASE sistema_reservas;

-- Conectarse a la base
\c sistema_reservas;

-- Tabla: equipo
CREATE TABLE equipo (
    id_equipo SERIAL PRIMARY KEY,
    nombre_equipo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    estado VARCHAR(20) DEFAULT 'Disponible' CHECK (estado IN ('Disponible', 'En uso', 'En reparación'))
);

-- Tabla: incidencia
CREATE TABLE incidencia (
    id_incidencia SERIAL PRIMARY KEY,
    descripcion TEXT NOT NULL,
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) DEFAULT 'Pendiente' CHECK (estado IN ('Pendiente', 'En proceso', 'Resuelto')),
    id_equipo INT REFERENCES equipo(id_equipo) ON DELETE CASCADE
);

