package main

import "gopkg.in/gin-gonic/gin.v1"
import "net/http"

func main() {
	r := gin.Default()

	r.LoadHTMLGlob("pages/*")
	r.Static("statics", "./statics")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
		return
	})

	r.Run(":4700")

}
