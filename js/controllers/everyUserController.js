myApp.controller("everyUserController", ['$rootScope','$scope', "UserService", "$state", "$location", function ($rootScope,$scope, UserService, $state, $location) {

    $scope.isAdminUser = !!$rootScope.isAdmin;
    $scope.showButtons = !$state.params.id;

    const init = () => {
        everyUser()
    }

    const everyUser = () => {
        UserService.allUsers($scope.buscarUsers)
            .then(resp => {
                $scope.users = resp.data
                console.log($scope.users);
            }).catch((e) => {
                console.log(e);
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

    $scope.logOut = logOut
    $scope.users = everyUser

    init()
}]);