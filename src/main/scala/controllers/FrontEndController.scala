package controllers

import akka.http.scaladsl.server.Directives._

trait FrontEndController {

  private val frontEndPath = "public"

//  val frontEndRoute = path(frontEndPath / Remaining)(path => getFromResource(s"$frontEndPath/$path"))
  val frontEndRoute = path(frontEndPath / Remaining)(path => getFromFile(s"src/$frontEndPath/$path"))

}
