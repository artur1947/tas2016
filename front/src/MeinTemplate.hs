{-# LANGUAGE TemplateHaskell#-}
{-# LANGUAGE TemplateHaskellQuotes#-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE OverloadedStrings #-}

module MeinTemplate  where

import Data.Text
import Text.Hamlet
import Text.Blaze.Html.Renderer.String
import Language.Haskell.TH

--genAlgDT :: String -> [String] -> Q Dec
--genAlgDT name xs =return  (DataD [] (mkName name ) []  Nothing (Prelude.map ((flip NormalC []) . mkName) xs) [] )

--genAlgDT "Page" pagelist


--pagelist :: [String]
--pagelist = ["Home",
--             "About",
--             "Catalog",
--             "Login"]


mkUrls :: Page -> [(Text, Text)] -> Text
mkUrls Home   _ = "home.html"
mkUrls About  _ = "about.html"
mkUrls Catalog _ = "catalog.html"
mkUrls Login _ = "login.html"

webPage :: Text -> Text -> HtmlUrl Page
webPage title content = [hamlet|
  <html lang="pl">
    <head>
      <meta charset="utf-8">
      <title>#{toUpper title}
    <body>
      <h1>#{title}
      <div>
      <hr>
      <div>
        <ul>
          <a href=@{Home}> Strona Główna
          <a href=@{Catalog}> Przeglądaj Katalog
          <a href=@{About}> Info
          <a href=@{Login}> Login
      <hr>
      <div>#{content}
 |]
