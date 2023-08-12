const findBestEmployee = function (employees) {
    const employeeNames = Object.keys(employees);
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const name of employeeNames) {
      if (employees[name] > maxTasks) {
        maxTasks = employees[name];
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  };
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); 
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); 
  