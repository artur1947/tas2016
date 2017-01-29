Troubleshooting:

(1) Unhandled Rejection MongoDB.
If you encounter this problem, you probably didn't run database,
or it didn't initialise yet. If it's first run, try waiting for minute or few.
 Otherwise,Try re-running the program.

Other error:
Make sure that you have mongodb, node and npm installed

Usage:
* rejestracja: POST /api/v1/users

Example POST for user creation, using Lisp-fu:
``` common-lisp
(drakma:http-request "http://localhost:1337/api/v1/users"
                              :method :post
                              :parameters'(("username" . "mati")
                                           ("password" . "mati123")
                                           ("role" . "client")))
```
Explanation:
Creates user name "mati" with password "mati123".
Assigns a role of "client". All fields are mandatory.

* logowanie (trzeba dać cookie jar!) POST /api/v1/sessions
* książki pod: GET /api/v1/collections/books
* dodawanie ksiażki (trzeba być zalogowanym jako admin): POST /api/v1/collections/books
