import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import global.Config.akkaHttpConfig._


object Main extends BootSystem {

  def main(args: Array[String]): Unit = {
    implicit val system = ActorSystem("main")
    implicit val materializer = ActorMaterializer()
    implicit val dispatcher = system.dispatcher
    Http().bindAndHandle(routes, host, port)
  }

}
