package sandbox

import (
	"log"

	"golang.org/x/net/context"
)

// gRPC server
type Server struct {
	// 加算される合計値を保持する, goだと0で初期化しなくても,加算時nilエラーとかならないのでこれで
	totalNum int32
}

func (s *Server) AddNum(ctx context.Context, addingNum *AddNumParams) (*TotalNum, error) {
	// パラメータから数値を取り出して、Serverの合計値に加算
	log.Printf("add number")
	s.totalNum += addingNum.Number
	total := &TotalNum{Total: s.totalNum}
	return total, nil
}

func (s *Server) GetTotalNum(ctx context.Context, _ *GetTotalNumParams) (*TotalNum, error) {
	// 現在のtotalを返すだけ
	log.Printf("return total number")
	total := &TotalNum{Total: s.totalNum}
	return total, nil
}
