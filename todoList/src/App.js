import { useMemo, useState } from "react";
import './App.css'
const sortTypes = ["All", "Completed Tasks", "Active Tasks"];

function App() {
  const [taskName, setTaskName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [sortType, setSortType] = useState(sortTypes[0]);

  const onChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onAddTodoItem = () => {
    setList((list) => [...list, { name: taskName, isDone: false }]);
    setTaskName("");
  };

  const onRemoveTodoItem = (selectedItem) => () => {
    setList((list) => list.filter((item) => item.name !== selectedItem.name));
  };

  const onToggleTodoItem = (selectedItem) => () => {
    setList((list) =>
      list.map((item) => {
        if (item.name === selectedItem.name) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  const toggleEdit = () => {
    setIsEdit((edit) => !edit);
  };

  const onEditItem = (selectedItem) => () => {
    setSelectedItem(selectedItem);
    setTaskName(selectedItem.name);
    toggleEdit();
  };

  const handleEditItem = () => {
    setList((list) =>
      list.map((item) => {
        if (item.name === selectedItem.name) {
          return { ...item, name: taskName };
        }
        return item;
      })
    );
    setTaskName("");
    toggleEdit();
  };

  const setSortTypeValue = (sortValue) => () => {
    setSortType(sortValue);
  };

  const listData = useMemo(() => {
    switch (sortType) {
      case sortTypes[1]:
        return list.filter((item) => item.isDone === true);
      case sortTypes[2]:
        return list.filter((item) => item.isDone === false);

      default:
        return list;
    }
  }, [sortType, list]);

  return (
    <div className="App">
      <h1 className="app-name">TODO MATIC</h1>
      <h1>What need to be done?</h1>
      <div>
        <div>
          <input value={taskName} onChange={onChangeTaskName} />
          <button
            onClick={isEdit ? handleEditItem : onAddTodoItem}
            type="primary"
          >
            {isEdit ? "Save" : "Add"}
          </button>
        </div>
        {!isEdit && (
          <>
            <div className="padding-button">
              {sortTypes.map((value) => (
                <button
                  key={value}
                  colorScheme={value === sortType ? "blue" : undefined}
                  onClick={setSortTypeValue(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <h2>{listData.length} tasks remaining</h2>
            {listData.map((item, index) => {
              return (
                <div key={`${index}-${item.name}`}>
                  <form action="#">
                    <div>
                      <p>
                        <input
                          type="checkbox"
                          id={index}
                          isChecked={item.isDone}
                          onChange={onToggleTodoItem(item)}
                        />
                        <label for={index} key={index}>
                          {item.name}
                        </label>
                      </p>
                      <div>
                        <button onClick={onEditItem(item)}>Edit</button>
                        <button onClick={onRemoveTodoItem(item)}>Delete</button>
                      </div>
                    </div>
                  </form>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
