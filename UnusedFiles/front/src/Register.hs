{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE OverloadedStrings #-}

module Main where
--import Data.Text
import Text.Hamlet
import Text.Blaze.Html.Renderer.String
import MeinTemplate

kontęt = "<script src=\"login.js\"></script><form><div class=\"form-group\"><label for=\"login\" class=\"control-label\">Login:</label><input type=\"text\" class=\"form-control\" id=\"username\"></input><div class=\"form-group\"><label for=\"password\" class=\"control-label\">Password:</label><input class=\"form-control\" id=\"password\" type=\"password\"></input> <input type=\"radio\" id=\"role\" value=\"client\" checked>Klient</input><input type=\"radio\" id=\"role\" value=\"admin\">Admin</input><button type=\"button\" class=\"btn btn-default\" onclick=\"register()\">Zarejestruj</button></form>"
main = putStrLn $ renderHtml $
  webPage "PTTP" kontęt mkUrls
