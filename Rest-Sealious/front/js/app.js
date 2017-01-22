class BooksList extends React.Component{
    render() {
        var books = this.props.books.map(book =>
                                         <Book key={book._links.self.href} employee={employee}/>
                                        );
        return (
                <table>
                <tbody>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Description</th>
                </tr>
                {employees}
            </tbody>
                </table>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/v1/books'}).done(response => {
            this.setState({books: response.entity._embedded.books});
        });
    }

    render() {
        return (
                <BooksList books={this.state.books}/>
        )
    }
}
