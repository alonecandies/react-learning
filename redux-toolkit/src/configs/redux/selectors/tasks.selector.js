const getTasks = (state) => {
  const searchText = getSearch(state);
  const sort = getSort(state);
  console.log(state.tasks.tasks)
  const tasks = state.tasks.tasks.filter((task) =>
    task.name.toLowerCase().includes(searchText.toLowerCase())
  );
  if (sort.value === 1) {
    tasks.sort((a, b) => {
      if (sort.by === "A-Z") {
        return a.name.localeCompare(b.name);
      }
      if (sort.by === "Z-A") {
        return b.name.localeCompare(a.name);
      }
      return tasks;
    });

    if (sort.by === "Active") {
      const sortTask = tasks.filter((task) => task.status === "active");
      sortTask.push(...tasks.filter((task) => task.status === "inactive"));
      return sortTask;
    }
    if (sort.by === "Inactive") {
      const sortTask = tasks.filter((task) => task.status === "inactive");
      sortTask.push(...tasks.filter((task) => task.status === "active"));
      return sortTask;
    }
  }
  return tasks;
};
const getSearch = (state) => state.tasks.filters.search;
const getSort = (state) => state.tasks.filters.sort;
const tasksSelector = {
  getTasks,
  getSearch,
  getSort,
};
export default tasksSelector;
