{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE OverloadedStrings #-}


--import Data.Text
--import Text.Hamlet
module Main where

import Text.Blaze.Html.Renderer.String
import MeinTemplate

main = putStrLn $ renderHtml $
  webPage "PTTP" "Zawartość katalogu :)" mkUrls
