import akka.http.scaladsl.server.Directives._
import controllers.{FrontEndController, IndexController}


trait BootSystem
  extends IndexController with FrontEndController {

  val routes =
    indexRoute ~
      frontEndRoute

}
