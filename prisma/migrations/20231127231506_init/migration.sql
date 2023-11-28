-- CreateTable
CREATE TABLE "departaments" (
    "departament_id" UUID NOT NULL,
    "departament_name" VARCHAR(255) NOT NULL,
    "departament_description" TEXT,
    "contact_phone" VARCHAR(15),
    "contact_email" VARCHAR(255),

    CONSTRAINT "departaments_pkey" PRIMARY KEY ("departament_id")
);

-- CreateTable
CREATE TABLE "employees" (
    "employee_id" UUID NOT NULL,
    "supervisor_id" UUID NOT NULL,
    "departament_id" UUID NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "position_employee" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "hire_date" DATE NOT NULL,
    "location_employee" VARCHAR(255),

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "supervisors" (
    "supervisor_id" UUID NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,

    CONSTRAINT "supervisors_pkey" PRIMARY KEY ("supervisor_id")
);

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departaments"("departament_id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "supervisors"("supervisor_id") ON DELETE RESTRICT ON UPDATE NO ACTION;
