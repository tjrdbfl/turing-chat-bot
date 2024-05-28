-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_userId_fkey";

-- DropIndex
DROP INDEX "Category_userId_key";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "question" TEXT,
    "answer" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_categoryId_key" ON "Chat"("categoryId");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
