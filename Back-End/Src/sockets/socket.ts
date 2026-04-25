import { Server } from "socket.io";

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("joinTable", (tableNumber) => {
      socket.join(`table_${tableNumber}`);
    });

    socket.on("joinKitchen", () => {
      socket.join("kitchen");
    });
  });

  return io;
};