CREATE DATABASE corasco_tech_control

-- Crear la extensión uuid-ossp si aún no está habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE departaments (
    departament_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    departament_name VARCHAR(255) NOT NULL,
    departament_description TEXT,
    contact_phone VARCHAR(15),
    contact_email VARCHAR(255)
);

-- Registros para la tabla Departamentos

INSERT INTO departaments(departament_name, departament_description, contact_phone, contact_email) VALUES
('IT', 'Information Technology Department','555-1234', 'it@example.com'),
('HR', 'Human Resources Department','555-5678', 'hr@example.com');

-- Mostrar los registros de la tabla Departamentos

SELECT * FROM departaments

---

CREATE TABLE supervisors (
	supervisor_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(100) NULL
)

--- INSERTAR REGISTROS EN LA TABLA SUPERVISORS

INSERT INTO supervisors(first_name, last_name, email, phone_number) VALUES
('Satoru', 'Gojo', 'gojo_satoru@jujutsu.com', '5232-6532')

--- MOSTRAR LOS REGISTROS DE LA TABLA SUPERVISORS

SELECT * FROM supervisors

--- Supervisor_id "bb9d9f90-b830-4f8c-9e61-0b6305156b9e" --- departament_id "eccf61fc-caf7-493b-b610-5fa3bc90f67f" 

CREATE TABLE employees(
    employee_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    supervisor_id UUID REFERENCES supervisors(supervisor_id) ON DELETE SET NULL,
	departament_id UUID REFERENCES departaments(departament_id) ON DELETE SET NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    position_employee VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    hire_date DATE NOT NULL,
    location_employee VARCHAR(255) NULL
);

--- INSERTAR REGISTROS EN LA TABLA EMPLOYEES

INSERT INTO employees(supervisor_id, departament_id, first_name, last_name, position_employee, phone_number, hire_date, location_employee) VALUES
('bb9d9f90-b830-4f8c-9e61-0b6305156b9e', 'eccf61fc-caf7-493b-b610-5fa3bc90f67f', 'Yuta', 'Okkotsu', 'Hechicero Grado Especial', '4521-9865', '07-03-2001', 'Preparatory Tokyo')

SELECT * FROM employees