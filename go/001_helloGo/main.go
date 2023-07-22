// önemliiii
// go mod init goDuzelt // dizinine, veya başka yere eklemen gerekiyor, otomatik düzeltme olması için
// go mod init goDuzel , i  terminale yazınca ...
// aynı dizine, go.mod isminde bir dosya oluşturuluyor
// go mod init goDuzel , i  terminale yazınca ... go.mod isminde bir dosya oluşturuluyor
// go.mod'un içeriği::::

//module goDuzelt
//go 1.20

// derlemek için
// go build main.go

// çalıştırmak için
// main.exe

// veya
// go run main.go

// veya
// go run . // bu dizindeki tüm go dosyalarını çalıştırır

package main

import (
	"fmt"
) //

func main() {
	fmt.Println("Hello World")

}
