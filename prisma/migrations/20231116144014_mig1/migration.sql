/*
  Warnings:

  - Added the required column `disease` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medication` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "doctorId" INTEGER,
    "nurseId" INTEGER,
    "disease" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    CONSTRAINT "Patient_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Patient_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Nurse" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("doctorId", "id", "name", "nurseId") SELECT "doctorId", "id", "name", "nurseId" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
