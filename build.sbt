name := "Experimental"

version := "1.0"

scalaVersion := "2.12.1"

libraryDependencies ++= Seq("com.typesafe.akka" %% "akka-http" % "10.0.1")

mainClass in (Compile, run) := Some("Main")