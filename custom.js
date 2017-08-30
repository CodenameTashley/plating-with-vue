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

function deleteUser(user){
  vm.users = vm.users.filter(function (element) {
    if  (element.Sr !== user.Sr) {
      return element;
    }
  });
}

function submit() {
  if (newUser.hasOwnProperty("Sr")) {
    /* Edit */
  }else{
    /* Add */
    var newSr = vm.users.length + 1;
    
    
  }
}

vm.users = [{
    Sr: 1,
    Name: "Parvez Alam",
    Age: 28
  },
  {
    Sr: 2,
    Name: "Sameer",
    Age: 13
  },
  {
    Sr: 3,
    Name: "Rakesh",
    Age: 55
  },
  {
    Sr: 4,
    Name: "Ramesh",
    Age: 44
  },
  {
    Sr: 5,
    Name: "Aman",
    Age: 34
  }
]

var app = new Vue({
  el: '#app',
  data: vm

});