HessatecApp.controller('PostController', function ($scope, $http) {
    $scope.init = function () {
        $scope.Categories = Categories;
        $scope.Tags = Tags;
        $scope.AllPosts = Posts;

        $scope.AllPosts.forEach(function (p) {
            p.CategoryName = $scope.Categories.find(c => p.CategoryId == c.Id).CategoryName;
            p.PostedOnDate = '' + p.PostedOn.getDate() + ' ' + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][p.PostedOn.getMonth()] + ' ' + p.PostedOn.getFullYear();
        });

        $scope.p = $scope.AllPosts.find(p => p.Id == postId);

        $("head title").html($scope.p.Title + " &ndash; Hessatec");

        $scope.ThisPostTags = Tags.filter(t => $scope.p.TagIds.indexOf(t.Id) >= 0);

        $http({
            url: '/BlogPosts/' + $scope.p.Id + '.html',
            method: 'GET',
        }).then(function (response) {
            $scope.p.FullPost = response.data;
            $("#fullPost").html($scope.p.FullPost);
        }, function (response) {
            alert("Error while fetching post content!");
        });

    };
});