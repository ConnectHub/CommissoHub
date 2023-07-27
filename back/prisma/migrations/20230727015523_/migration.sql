-- CreateEnum
CREATE TYPE "Profile" AS ENUM ('CANDIDATE', 'COMISSIONADO');

-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "profile" "Profile";
