package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", ashish).Methods("GET")
	r.HandleFunc("/d", deomn).Methods("GET")
	http.ListenAndServe(":3000", r)

}

func ashish(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hi this is a server")
}

func deomn(w http.ResponseWriter, r *http.Request) {
	fmt.Println("ashisihs")
}
