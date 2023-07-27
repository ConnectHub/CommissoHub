/*
  Warnings:

  - Made the column `profile` on table `Candidate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Candidate" ALTER COLUMN "profile" SET NOT NULL;

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "cep" TEXT,
ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT;
