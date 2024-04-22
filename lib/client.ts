import { PrismaClient } from "@prisma/client"

// declare global {
//     var client: PrismaClient | undefined;
//   }
  
  const client =  new PrismaClient();
  // global.client ||
  // if (process.env.NODE_ENV === "development") global.client = client;
  
  export default client;