package global

import akka.http.scaladsl.server.PathMatchers
import com.typesafe.config.ConfigFactory

object Config {
  private val config = ConfigFactory.load()
  private val akkaHttp = config.getConfig("akka.http")

  val akkaHttpConfig = AkkaHttpConfig(
    akkaHttp.getString("host"),
    akkaHttp.getInt("port")
  )

  implicit class ServerRoutes(pathMatchers: PathMatchers) {

  }

}

case class AkkaHttpConfig(host: String, port: Int)
