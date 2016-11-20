Troubleshooting:

(1) Unhandled Rejection MongoDB.
If you encounter this problem, you probably didn't run database,
or it didn't initialise yet. Try re-running the program.

Other error:
Make sure that you have mongodb, node and npm installed


Usage:
* rejestracja: POST /api/v1/users
* logowanie (trzeba dać cookie jar!) POST /api/v1/sessions
* książki pod: GET /api/v1/collections/books
* dodawanie ksiażki (trzeba być zalogowanym jako admin): POST /api/v1/collections/books
