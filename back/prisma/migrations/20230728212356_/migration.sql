/*
  Warnings:

  - Made the column `cpf` on table `Vote` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vote" ALTER COLUMN "cpf" SET NOT NULL;
