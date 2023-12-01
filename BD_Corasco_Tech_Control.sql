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

-- INSERTAR REGISTROS EN LA TABLA SUPERVISORS CON TODOS LOS CAMPOS

INSERT INTO public.supervisors(supervisor_id, first_name, last_name, email, phone_number) VALUES
(gen_random_uuid(),'Satoru', 'Gojo', 'gojo_satoru@jujutsu.com', '5232-6532')

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

insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Sharyl', 'Connerly', 'sconnerly0@cnn.com', '8679');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Vito', 'Toopin', 'vtoopin1@opera.com', '6');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Shellie', 'Lenham', 'slenham2@google.es', '7');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Wynnie', 'Bewshire', 'wbewshire3@kickstarter.com', '277');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Lyell', 'Mattersley', 'lmattersley4@ucsd.edu', '5');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Enrique', 'Gann', 'egann5@dot.gov', '95905');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Ilene', 'Quilty', 'iquilty6@yale.edu', '436');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Leupold', 'Biggar', 'lbiggar7@xinhuanet.com', '75823');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Sonny', 'Shemilt', 'sshemilt8@dedecms.com', '74');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Lev', 'Pinnion', 'lpinnion9@ustream.tv', '1');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Phip', 'Hull', 'phulla@themeforest.net', '7');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Kaleb', 'Bullard', 'kbullardb@stanford.edu', '25726');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Eadmund', 'Primmer', 'eprimmerc@sciencedirect.com', '011');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Allegra', 'Sherburn', 'asherburnd@sciencedaily.com', '416');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Avery', 'Sangar', 'asangare@networksolutions.com', '5');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Osbourne', 'Shovlar', 'oshovlarf@cyberchimps.com', '7017');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Dorelle', 'O''Keeffe', 'dokeeffeg@vinaora.com', '56');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Milli', 'Morstatt', 'mmorstatth@google.fr', '56721');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Augusto', 'Ziemen', 'aziemeni@ucoz.ru', '3');
insert into supervisors (supervisor_id, first_name, last_name, email, phone_number) values (gen_random_uuid(), 'Bennie', 'Castell', 'bcastellj@amazon.co.jp', '84');

insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Product Management', 'Osteopathy in diseases classified elsewhere, left shoulder', '812-966-3055', 'amolian0@wikia.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Legal', 'Pasngr in hv veh injured in clsn w oth and unsp mv in traf', '425-927-2600', 'smcdyer1@state.tx.us');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Support', 'Inj oth flexor musc/fasc/tend at forearm level, right arm', '482-494-0434', 'kmuschette2@webnode.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Accounting', 'Nondisp apophyseal fx r femr, 7thF', '197-172-2563', 'pmeeke3@squidoo.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Human Resources', 'Poisoning by electrolytic/caloric/wtr-bal agnt, accidental', '676-568-5593', 'vquinney4@pinterest.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Research and Development', 'Nondisp transverse fx l patella, subs for clos fx w malunion', '751-128-7978', 'sarton5@who.int');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Human Resources', 'Other recurrent vertebral dislocation, cervical region', '318-792-8341', 'tdosdale6@slashdot.org');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Sales', 'Displ spiral fx shaft of ulna, unsp arm, 7thJ', '391-421-6916', 'tlinch7@squidoo.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Marketing', 'Nicotine dependence, other tobacco product, with withdrawal', '159-909-5668', 'maddeycott8@mysql.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Training', 'Gastric contents in esophagus causing oth injury, init', '500-581-2952', 'kyitzhakof9@blogspot.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Legal', 'Contusion of lower back and pelvis, subsequent encounter', '588-706-2348', 'dmckerna@time.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Sales', 'Mech compl of implnt elec nstim, generator, subs', '100-213-5825', 'aricksonb@joomla.org');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Marketing', 'Burn due to loc fire on board oth powered wtrcrft, sequela', '663-499-7752', 'kbelchamberc@yale.edu');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Support', 'Injury of musculocutaneous nerve, unsp arm, init encntr', '913-309-3378', 'nkastingd@squarespace.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Engineering', 'Postviral fatigue syndrome', '621-419-5340', 'battowe@ning.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Marketing', 'Hit by object from burning bldg in uncontrolled fire, subs', '284-448-4240', 'cspiritf@cnet.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Business Development', 'Displ seg fx shaft of l fibula, 7thE', '748-545-1694', 'lcalwayg@adobe.com');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Sales', 'Nondisp fx of lateral malleolus of unsp fibula, 7thD', '665-827-8899', 'zseeberth@cbc.ca');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Legal', 'Pedestrian on foot injured in collision w skateboarder, subs', '810-716-7640', 'gmurcutti@ftc.gov');
insert into public.departaments (departament_id, departament_name, departament_description, contact_phone, contact_email) values (gen_random_uuid(), 'Accounting', 'Other acquired stenosis of external ear canal', '236-758-0048', 'gkleinej@go.com');