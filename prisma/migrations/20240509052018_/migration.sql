/*
  Warnings:

  - You are about to drop the column `registeredAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `registeredAt`,
    ADD COLUMN `registerredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
