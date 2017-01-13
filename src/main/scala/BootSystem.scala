import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Directives._
import controllers.IndexController


trait BootSystem
  extends IndexController {

  val routes =
    indexRoute

}
