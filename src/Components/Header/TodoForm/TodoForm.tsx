import { useEffect, useRef } from 'react';
import { useTodoContext } from '../../../Context/Context';

export const TodoForm = () => {
  const {
    todoTitle,
    handleInput,
    handleSubmit,
    isDisabled,
  } = useTodoContext();
  const titleField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleField.current) {
      titleField.current.focus();
    }
  }, [isDisabled]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoTitle}
        ref={titleField}
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        onChange={handleInput}
        disabled={isDisabled}
      />
    </form>
  );
};
