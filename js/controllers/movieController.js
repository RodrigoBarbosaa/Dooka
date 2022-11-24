myApp.controller('movieController', ['$rootScope','$scope', 'MovieService', '$state', function ($rootScope,$scope, MovieService, $state) {

  $scope.isAdminUser = !!$rootScope.isAdmin;

  const everyUser = () => {
    UserService.allUsers($scope.buscarUsers)
        .then(resp => {
            $scope.users = resp.data
        }).catch((e) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'an error ocurred',
            showConfirmButton: false,
            timer: 1500
          })
        })
}

  const index = () => {
    MovieService.getCovers($scope.buscarFilmes)
      .then(resp => {
        $scope.covers = resp.data
      })
      .catch((e) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'an error ocurred',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }

  const logOut = () => {
    Swal.fire({
      title: 'log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes'
    }).then((result) => {
      if (result.isConfirmed) {
        $state.go('login')
        localStorage.clear()
      }
    })
  }
  
  $scope.buscaUsers = everyUser
  $scope.logOut = logOut
  $scope.busca = index
  index()
}])