// pages/api/[id].js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, query, body } = req;
  const id = parseInt(query.id, 10);

  // Check if ID is valid
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    if (method === "PUT") {
      // Handle PUT request
      const { name, email } = body;
      const updatedUser = await prisma.user.update({
        where: { id },
        data: { name, email },
      });
      return res.status(200).json(updatedUser);
    } else if (method === "DELETE") {
      // Handle DELETE request
      const deletedUser = await prisma.user.delete({
        where: { id },
      });
      return res.status(200).json(deletedUser);
    } else if (method === "GET") {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } else {
      // Method not allowed
      res.setHeader("Allow", ["PUT", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
