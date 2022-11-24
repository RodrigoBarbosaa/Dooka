myApp.controller('allCoversController', ['$rootScope', '$scope', 'MovieService', '$state', '$location', function ($rootScope, $scope, MovieService, $state, $location) {

  const allCovers = () => {
    MovieService.findAllCovers()
      .then(resp => {
        console.log(resp);
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

  const refresh = cover => {
    $location.path(`/movies/${cover.movie.id}`)
  }

  $scope.refresh = refresh
  $scope.logOut = logOut
  allCovers()
}])