mkdir bin
cd ./src
ghc -v -o ../bin/Home ./Home.hs
ghc -v -o ../bin/Catalog ./Catalog.hs
ghc -v -o ../bin/About ./About.hs
ghc -v -o ../bin/Login ./Login.hs
cd ..
./bin/Home > home.html
./bin/Catalog > catalog.html
./bin/About > about.html
./bin/Login > login.html
