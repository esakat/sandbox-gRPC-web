FROM golang:1.11.1

ENV GO111MODULE=on

WORKDIR /go/src/sandbox-server
COPY . .
RUN go get -u github.com/pilu/fresh
CMD ["fresh"]
EXPOSE 9999