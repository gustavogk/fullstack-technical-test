-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("id", "name", "status", "userId") SELECT "id", "name", "status", "userId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
