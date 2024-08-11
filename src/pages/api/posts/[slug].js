// pages/api/[id].js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, query, body } = req;
  const url = query.slug;

  console.log("The url is", query);

  try {
    if (method === "DELETE") {
      // Handle DELETE request
      const deletedPost = await prisma.BlogPost.delete({
        where: { url },
      });
      return res.status(200).json(deletedPost);
    } else if (method === "GET") {
      const post = await prisma.BlogPost.findMany({
        where: { url },
      });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.status(200).json(post);
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
