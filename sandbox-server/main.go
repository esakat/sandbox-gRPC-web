package main

import (
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"

	"sandbox-server/sandbox"
)

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 9999))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := sandbox.Server{}
	grpcServer := grpc.NewServer()
	// serverにserviceを追加
	sandbox.RegisterAddNumServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	} else {
		log.Printf("Server started successfully")
	}
}
