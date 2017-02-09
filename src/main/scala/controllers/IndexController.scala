package controllers
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.PathMatchers

trait IndexController {
  private val EntryHtmlPath = "src/public/views/template/index.html"

  val indexRoute = path(PathMatchers.PathEnd) {
    get(getFromFile(EntryHtmlPath))
  }

}
