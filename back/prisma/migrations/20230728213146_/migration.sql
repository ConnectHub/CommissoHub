/*
  Warnings:

  - Made the column `cep` on table `Vote` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vote" ALTER COLUMN "cep" SET NOT NULL;
