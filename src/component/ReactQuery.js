function Todos() {
    const { status, data, error } = useQuery("todos", fetchTodoList);
  
    if (status === "loading") {
      return <span>Loading...</span>;
    }
  
    if (status === "error") {
      return <span>Error: {error.message}</span>;
    }
  
    return (
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
   