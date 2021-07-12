  // Q2
  const students = [{
    name: 'John',
    age: 12,
    percentage: '81%'
  },
    {
      name: 'Sean',
      age: 12,
      percentage: '60%'
    },
    {
      name: 'Tony',
      age: 12,
      percentage: '72%'
    }];

    let result = students.filter(student => student.percentage > '70%');
    console.log(result);
