/*
  Warnings:

  - You are about to alter the column `phone_number` on the `supervisors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_departament_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_supervisor_id_fkey";

-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "supervisor_id" DROP NOT NULL,
ALTER COLUMN "departament_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "supervisors" ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "phone_number" SET DATA TYPE VARCHAR(100);

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departament_id_fkey" FOREIGN KEY ("departament_id") REFERENCES "departaments"("departament_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "supervisors"("supervisor_id") ON DELETE SET NULL ON UPDATE NO ACTION;
