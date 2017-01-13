package controllers
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.PathMatchers

trait IndexController {
  private val EntryHtmlPath = "frontend/index.html"

  val indexRoute = path(PathMatchers.PathEnd) {
    get(getFromResource(EntryHtmlPath))
  }

}
