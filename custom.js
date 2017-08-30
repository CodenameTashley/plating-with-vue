var vm = {};

vm = {
  /* Variables */
  searchText: "",
  newUser: {},
  /* Functions */
  greet: greet,
  log: log,
  editUser: editUser,
  deleteUser: deleteUser,
  submit: submit
}

function greet() {
  alert("Hello " + vm.searchText);
}

function log(obj) {
  console.log(obj);
}

function editUser(user) {
  vm.newUser = user;
}

function deleteUser(user) {
  console.log(user);
  _.forEach(vm.users, function (element) {

    if (element.Sr === user.Sr) {
      element.visible = false;
    }
  });

}

function submit() {
  if (vm.newUser.hasOwnProperty("Sr")) {
    /* Edit */
    _.forEach(vm.users, function (element) {
      if (element.Sr === vm.newUser.Sr) {
        element.Name = vm.newUser.Name;
        element.Age = vm.newUser.Age;
      }
    });

  } else {
    /* Add */
    vm.newUser.Sr = vm.users.length + 1;
    vm.newUser.visible = true;
    vm.users.push(vm.newUser);
    vm.newUser = {};

  }
}

vm.users = [{
    Sr: 1,
    Name: "Parvez Alam",
    Age: 28,
    visible: true
  },
  {
    Sr: 2,
    Name: "Sameer",
    Age: 13,
    visible: true
  },
  {
    Sr: 3,
    Name: "Rakesh",
    Age: 55,
    visible: true
  },
  {
    Sr: 4,
    Name: "Ramesh",
    Age: 44,
    visible: true
  },
  {
    Sr: 5,
    Name: "Aman",
    Age: 34,
    visible: false
  }
]

var app = new Vue({
  el: '#app',
  data: vm

});