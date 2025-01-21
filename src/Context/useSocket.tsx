import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

const BaseUrl = "https://server-9mir.onrender.com"; // Replace with your server URL

// Create the socket instance with correct type
const socket: Socket = io(BaseUrl); // Assuming your Express server runs on port 4000

interface SocketContextType {
  socket: Socket;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
