var React = require('react');

var AddToDo = React.createClass({
    handleSubmit: function(event){
        event.preventDefault();
        var todo = this.refs.todoText.value;
        if(todo.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddToDo(todo);
        }else{
            this.refs.todoText.focus();
        }
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do we need to do?"></input>
                    <button className="button expanded primary">Add To Do</button>
                </form>
            </div>
        );
    }
});

module.exports = AddToDo;