-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_userId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_categoryId_fkey";

-- AlterTable
CREATE SEQUENCE chat_id_seq;
ALTER TABLE "Chat" ALTER COLUMN "id" SET DEFAULT nextval('chat_id_seq'),
ADD CONSTRAINT "Chat_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE chat_id_seq OWNED BY "Chat"."id";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
